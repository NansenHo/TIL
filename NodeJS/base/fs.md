# file system module {ignore=true}

[toc]

## fs

In Node.js, you can programmatically manipulate files with the built-in fs module.

The module contains all the functions you need to read, write, and delete files on the local machine.

This unique aspect of Node.js makes JavaScript a useful language for back-end or CLI tool programming.

The `fs` module supports interacting with files synchronously, asynchronously, or via streams.

## usage of fs

### fs.writeFile(file, data[, options], callback)

- file `<string>` | `<Buffer>` | `<URL>` | `<integer>` filename or file descriptor
- data `<string>` | `<Buffer>` | `<TypedArray>` | `<DataView>` | `<Object>`
- options `<Object>` | `<string>`
  - encoding `<string>` | `<null>` Default: 'utf8'
  - mode `<integer>` Default: 0o666
  - flag `<string>` See support of file system flags. Default: 'w'.
  - signal `<AbortSignal>` allows aborting an in-progress writeFile
- callback `<Function>`
  - err `<Error>` | `<AggregateError>`

```js
const fs = require('fs')

fs.writeFile('./hello.md', 'hello', err => {
	// if failed, return Error object.
})
```

### fs.writeFileSync(file,  )
