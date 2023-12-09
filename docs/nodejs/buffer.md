# Buffer

## Why we need Buffer

Pure JavaScript is great with Unicode-encoded strings,
but it does not handle binary data very well. It's not problematic when we perform an operation on data at browser level.

But It's required to deal with **pure binary data** at the time of dealing with TCP stream and performing a read-write operation on the file system.

To satisfy this need, Nodejs use Buffer.

## What's Buffer

`Buffer` **objects** are used to represent a **fixed-length sequence of bytes**.

buffers are fixed-length allocations in memory that store binary data.

> Generally, Buffer refers to the particular memory location in memory.

Buffer and Array have some similarities, but the difference is array can be any type and it can be resizable.
Buffer only deal with binary data, and it can not be resizable.

Each integer in a buffer represents a byte (8 bits equal to a byte).

```js
let buf = Buffer.from("hello");
buf[0] = 361;
console.log(buf[0]); // 105
// The binary data of 361 is `(000)1 0110 1001`, which has 9 bits.
// The binary data of 105 is `0110 1001`.
// We can see that the first `1` of `1 0110 1001` was removed.
```

## Creating a Buffer

There are two primary ways to create a buffer object in Node.js.

1. `Buffer.alloc()`
2. `Buffer.from()`

If you are going to **store data in memory that you have yet to receive**, you’ll want to create a new buffer. In Node.js we use the `alloc()` function of the `Buffer` class to do this.

### `Buffer.alloc(size[, fill[, encoding]])`

To create a new buffer, we used the global available `Buffer` class, which has the `alloc()` method.

created a buffer that was 1kB (kilobyte) large, equivalent to 1024 bytes.

```js
const buf_1KB = Buffer.alloc(1024);
console.log(buf_1KB);
```

By default, when you initialize a buffer with `alloc()`, the buffer is filled with binary zeroes as a placeholder for late data.

We can change the default value if we'd like to.

If we would like to created a new buffer filled with `1`s instead of `0`s, we should set the `alloc()` function's second parameter `fill`.

```js
const buf_1 = Buffer.alloc(1, 1);
console.log(buf_1);
```

Byte encoding is the format of the byte.

A buffer in Node.js uses the **UTF-8** encoding scheme by default.

We cloud change the encoding used by our buffer with the `alloc()` function's third argument `encoding`.

```js
const asciiBuf = Buffer.alloc(5, "a", "ascii");
console.log(asciiBuf);
```

> UTF-8 is a superset of [ASCII](https://en.wikipedia.org/wiki/ASCII), **the American Standard Code for Information Interchange**.
>
> ASCII can encode bytes with uppercase and lowercase English letters, the number 0-9, and a few other symbols like the exclamation mark(!) or the ampersand sign(&).

> By default, Node.js supports the following character encoding:
>
> 1. ASCII, represented as `ascii`
> 2. UTF-8, represented as `utf-8` / `utf8`
> 3. UTF-16, represented as `utf-16le` / `utf16le`
> 4. UCS-2, represented as `ucs-2` / `ucs2`
> 5. Base64, represented as `base64`
> 6. Hexadecimal, represented as `hex`
> 7. ISO/IEC 8859-1, represented as `latinl` / `binary`
>
> All of these values can be used in Buffer class function that accept an `encoding` parameter.
> Therefore, these values are all valid for the `alloc()` method.

### when do we use `Buffer.allocUnsafe()`

`Buffer.allocUnsafe()` creates a buffer with pre-filled data or old buffers.

In Node.js, `Buffer` is an abstraction over ARM, therefore if you allocate it in an unsafe way, there is a high risk of having even some source code in your buffer instance.

> **Allocation is a synchronous operation** and **single threaded** Node.js doesn't really feel good about synchronous stuff.

Unsafe allocation is much faster than safe, because the buffer santarization step takes times.
Safe allocation is well, safe, but there is a performance trade off.

It's recommended to stick to safe allocation first and if you end up with low performance, you can think of ways to implement unsafe allocation, without exposing private stuff.

> Just keep it in mind that `allocUnsafe` method has the word `Unsafe` for a reason.

### `Buffer.from()`

- `Static method: Buffer.from(array)`
- `Static method: Buffer.from(arrayBuffer[, byteOffset[, length]])`
- `Static method: Buffer.from(buffer)`
- `Static method: Buffer.from(object[, offsetOrEncoding[, length]])`
- `Static method: Buffer.from(string[, encoding])`

Sometimes, we may want to create a buffer from data that already exists, like a string or array.

To create a buffer from a pre-existing data, we use the `from()` method.

We can use `from()` function create a buffer from:

1. An array of integer (The integer values can be between `0` and `255`)
2. An `ArrayBuffer`
3. A string
4. Another buffer
5. Other JavaScript objects that have a `Symbol.toPrimitive` property.

```js
const stringBuf = Buffer.from("My name is nansen");

const asciiBuf = Buffer.alloc(5, "a", "ascii");
const asciiCopy = Buffer.from(asciiBuf);
```

```js
const buf = Buffer.from("h");
console.log(buf); // <Buffer 68>
```

The `h` character corresponds to `104` in the ASCII table.
`68` is the hexadecimal representation for the ASCII encoding `104`.

## Reading From a Buffer

To access one byte of a buffer, we pass the index or location of the byte we want.

Buffer store data sequentially like arrays.
They also index their data like arrays, starting at `0`.

### pass the index or location of a byte

```js
const hiBuf = Buffer.from("Hi!");
console.log(hiBuf[0]); // 72
console.log(hiBuf[1]); // 105
console.log(hiBuf[2]); // 33
// retrieve a byte from an invalid index
// this is just like if we access an element in an array with an incorrect index.
console.log(hiBuf[3]); // undefined
```

The integer `72`, `105` and `33` correspond the UTF-8 representation for `H`, `i` and `!`, respectively.

### `buf.toString([encoding[, start[, end]]])`

- encoding `<string>` The character encoding to use. Default: 'utf8'.
- start `<integer>` The byte offset to start decoding at. Default: 0.
- end `<integer>` The byte offset to stop decoding at (not inclusive). Default: buf.length.
- Returns: `<string>`

The `toString()` method return the entire contents of a buffer in string.

```js
hiBuf.toString(); // Hi!
```

`hiBuf` buffer was created from a string.

What happens if we use the `toString()` on a buffer that was not made from string data.

When the buffer's data is not encoded as a string, the `toString()` method returns the UTF-8 encoding of the bytes.

The `toString()` has an optional parameter, `encoding`.
We can use the parameter to change the encoding of the buffer data that's returned.

```js
const tenZeroes = Buffer.alloc(10);
tenZeroes.toString();
console.log(tenZeroes.toString("hex")); // 00000000000000000000
```

> In Node.js, when user want to convert the encoding of data from one form to another one, they usually put the string in a buffer and call `toString()` with their desired encoding.

```js
const buf = Buffer.from([104, 106])
let str = buf[0].toString(2);
console.log(str); // 1101000
```

The `toString()` can also convert numbers into binary numbers or other numeral systems.

### `buf.toJSON()`

- return `<Object>`

Regardless of whether the buffer was made from a string or not, it always returns the data as the integer representation of the byte.

```js
const tenZeroes = Buffer.alloc(10);
tenZeroes.toJSON();
// output:
// {
//   type: 'Buffer',
//   data: [
//     0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0
//   ]
// }
```

The JSON object has two properties, `type` and `data`.

- `type` property will always be `Buffer`. That's so programs can distinguish these JSON object from other JSON objects.

- `data` property contains an array of the integer representation of the bytes.

## Modifying a Buffer

We can modify buffer bytes individually using the array syntax.
We can also write new contents to a buffer, replacing the existing data.

### change individual bytes of a buffer

```js
const hiBuf = Buffer.from('hi!');
console.log(hiBuf);
// <Buffer 68 69 21>
hiBuf[1] = 101;
console.log(hiBuf.toString());
// he!
console.log(hiBuf.toJSON());
// { type: 'Buffer', data: [ 104, 101, 33 ] }<Buffer 68 69 21>
```

### `buf.write(string[, offset[, length]][, encoding])`

- string `<string>` String to write to buf.
offset `<integer>` Number of bytes to skip before starting to write string. Default: 0.
- length `<integer>` Maximum number of bytes to write (written bytes will not exceed buf.length - offset). Default: buf.length - offset.
- encoding `<string>` The character encoding of string. Default: 'utf8'.
- Returns: `<integer>` Number of bytes written.

The `write()` method can change the contents of the entire buffer.

> UTF-8 uses a byte a each character.
> UTF-8 uses three bytes for a Chinese character.

If you try to write more bytes than a buffer's size, the buffer object will only accept what bytes fit. The buffer is not resizable.

```js
const hiBuf = Buffer.from("hi!");
hiBuf.write("wei!");
console.log(hiBuf.toString()); // wei
```

```js
const hiBuf = Buffer.alloc(3);
hiBuf.write("wei!");
console.log(hiBuf.toString()); // wei
```

```js
const petBuf = Buffer.from("cat");
petBuf.write("hi");
console.log(petBuf.toString()); // hit
```

`cat` => `hit`, the first two characters are overwritten, but the rest of the buffer is untouched.

### `buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])`

- target `<Buffer>` | `<Uint8Array>` A `Buffer` or `Uint8Array` to copy into.
- targetStart `<integer>` The offset within `target` at which to begin writing. Default: `0`.
- sourceStart `<integer>` The offset within `buf` from which to begin copying. Default: `0`.
- sourceEnd `<integer>` The offset within `buf` at which to stop copying (not inclusive). Default: `buf.length`.
- Returns: `<integer>` The number of bytes copied.

```js
const catBuf = Buffer.from("cat");
const dogBuf = Buffer.from("dog");
catBuf.copy(dogBuf);
console.log(dogBuf.toString()); // cat
```

```js
const catBuf = Buffer.from("cats");
const dogBuf = Buffer.from("dogs bird");
catBuf.copy(dogBuf, 5);
console.log(dogBuf.toString()); // dogs cats
```

```js
const catBuf = Buffer.from("cats");
const dogBuf = Buffer.from("dogs bird");
// source buffer is the buffer which calls `copy()` method.
// target buffer is the buffer that is modified.
catBuf.copy(dogBuf, 0, 2, catBuf.length);
console.log(dogBuf.toString()); // tsgs bird
```

## reference

1. [Using Buffer in Node.js](https://www.digitalocean.com/community/tutorials/using-buffers-in-node-js#conclusion)

2. [what is buffer in Node.js](https://www.geeksforgeeks.org/what-is-buffer-in-node-js/)

3. [Node.js buffer docs](https://nodejs.org/dist/latest-v18.x/docs/api/buffer.html)

4. [What is the case of using Buffer.allocUnsafe() and Buffer.alloc()](https://stackoverflow.com/questions/55805843/what-is-the-case-of-using-buffer-allocunsafe-and-buffer-alloc)