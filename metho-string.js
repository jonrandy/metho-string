//import * as Metho from "../metho/metho.js"
import * as Metho from "metho"

const target = String.prototype
const ARRAY_FLAG = "array"
const STRING_FLAG = "string"

target[Metho.data] = STRING_FLAG

// chunk - chunk an array or string in to pieces of given size
const chunkFunc = function chunk(size) {
	let res = []

	if (this[Metho.data] == ARRAY_FLAG) {
		// chunk array
		let chunk
		for (let i = 0; i < this.length; i += size) {
			chunk = this.slice(i, i + size)
			res.push(chunk)
		}
	} else if (this[Metho.data] == STRING_FLAG) {
		// chunk string
		res = this.match(new RegExp(".{1," + size + "}", "g"))
	}
	return res
}
export const chunk = Metho.addWithSharedSymbolName(
	target,
	chunkFunc,
	"arrayOrStringChunk"
)

// pieces - divide an array or string in to given number of pieces (attempt to balance number of items in each piece by default)
const piecesFunc = function pieces(count, balanced=true) {
	if (!balanced) return this[chunk(Math.ceil(this.length/count))]
	let result = [], isArray = this[Metho.data] == ARRAY_FLAG, arr = [...this];
	for (let i=count; i > 0; i--) {
		result.push(arr.splice(0, Math.ceil(arr.length / i)));
	}
	return isArray ? result : result.map(arr=>arr.join(''))
}
export const pieces = Metho.addWithSharedSymbolName(
	target,
	piecesFunc,
	"arrayOrStringPieces"
)

// upper - convert string to upper case
export const upper = Metho.add(target, function upper() {
	return this.toUpperCase()
})

// lower - convert string to lower case
export const lower = Metho.add(target, function lower() {
	return this.toLowerCase()
})

// proper - convert string to proper case
export const proper = Metho.add(target, function proper() {
	return this.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	})
})

// reverse - reverse the string
export const reverse = Metho.addWithSharedSymbolName(
	target,
	function reverse() {
		return [...this].reverse().join("")
	},
	"arrayOrStringReverse"
)

// head - return first character of string
export const head = Metho.addWithSharedSymbolName(
	target,
	function head() {
		return this[0]
	},
	"arrayOrStringHead"
)

// tail - return string without the head
export const tail = Metho.addWithSharedSymbolName(
	target,
	function tail() {
		return this.substr(1)
	},
	"arrayOrStringTail"
)
