# Metho String

String prototype extensions using the [Metho](https://github.com/jonrandy/metho) library:

## Usage

```js
import { chunk, pieces, upper, lower, proper, reverse, head, tail } from 'metho-string'

// chunk (if already imported from metho-array, it will also work with strings)
"123456"[chunk(2)] // ["12", "34", "56"]
"12345"[chunk(3)] // ["123", "45"]

// pieces (if already imported from metho-array, it will also work with strings)
// > balanced - attempt to balance the number of items in each piece
"1111111111"[pieces(4)] // ["111", "111", "11", "11"]
// > not balanced
"1111111111"[pieces(4, false)] // ["111", "111", "111", "1"]

// upper
"Hello World"[upper] // "HELLO WORLD"

// lower
"Hello World"[lower] // "hello world"

// proper
"HELLO WORLD"[proper] // "Hello World

// reverse (if already imported from metho-array, it will also work with strings)
"123"[reverse] // "321"

// head (if already imported from metho-array, it will also work with strings)
"1234"[head] // "1"

// tail (if already imported from metho-array, it will also work with strings)
"1234"[tail] // "234"

```
