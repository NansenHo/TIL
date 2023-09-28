# NodeJS

## What's NodeJS

NodeJS is an open-source, cross-platform JavaScript runtime environment.

> V8 takes your javascript code and compiles it to machine code.

> V8 is written in C++.

## Starting and stopping the REPL

> What is REPL: 
>
> - Read - Read user input
> - Eval - Evaluate user input
> - Print - Print output (result)
> - Loop - Wait for new input

```bash
# starting
node
```

> To exit, press ^C twice or ^D or type `.exit`.

### The REPL vs Using files

- The REPL
  - a great playground
  - execute code as you write it

- Using files
  - used for real apps
  - predictable sequence of steps

## Understanding the role & usage of Node.js

1. **Run Server**
   
	 - Create Server
	 - Listen to Incoming Requests

With Node.js, you don't just write the code that is running on your server, you also write the server yourself.

> In PHP, you have extra tools like apache or nginx which run the servers which listen to incoming requests and then execute your PHP code.
> 
> Here, Node.js does both.

2. **Your Business Logic**

	- Handle Requests
	- Validate Input
	- Connect to Database
	- Authentication
	- ...

> The browser can always be tricked, users can even edit their browser side code.

> Everything our users shouldn't see which takes too much time to run in the browser.

3. **Responses**
   
	 - Return Responses (rendered HTML, JSON, XML, Files, ...) 

We can use Node.js for more than just Server-side Code. Node.js is also a great tool for writing **utility scripts** and **building tools** and so on.

