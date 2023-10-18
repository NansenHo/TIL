# Creating a Node server

## Creating a basic Node server

Follow these steps to create a basic Node server using TypeScript:

1. create an empty folder.

2. install `ts-node` with the command: `npm i --save @types/node`.

3. create a new TypeScript file and name it `app.ts` or `server.ts`.

4. write the Node.js code into the `app.ts` file.

```typescript
// app.ts
import * as http from "http";

const server = http.createServer((req, res) => {
  console.log(req);
	// process.exit();
});

// listen() starts a process.
// Node.js will not immediately exit our script,
// but it will keep this process running to listen for incoming requests.
server.listen(3000);
```

5. execute `ts-node app.ts` in the terminal.

> The cursor in the terminal doesn't go back in a new line, because this process created by `server.listen(3000)` is now running.

Now, we have an ongoing looping process that will keeps on listening for requests.

6. open `http://localhost:3000/` in your web browser.

Then, you can see the requests being printed in the terminal.

> This is how you create servers in Node.js.
>
> Creating servers maybe sounds super complex, but actually it's just these few lines.

## Node.js program lifecycle

![Node.js Program Lifecycle](../assets/images/nodejs_program_lifecycle.jpeg)

## Understanding requests

The incoming request from `localhost:3000` is a very complex object.

Let's optimize the code to print some more important information about incomint requests.

```typescript
import * as http from "http";

function line() {
  console.log("----------------");
}

const server = http.createServer((req, res) => {
  console.log(req.url);
	line()
  console.log(req.headers);
	line()
  console.log(req.method);
	line()
  // process.exit();
});

server.listen(3000);
```
