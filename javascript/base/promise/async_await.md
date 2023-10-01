# Async / Await

## Async function

The word "async" before a function means one thing: 

    a function always return a promise.

Other values are wrapped in a resolved promise automatically.

```js
async function f() {
  return 1
}

f().then(alert) // 1
```

We could explicitly return a promise, which would be the same: 

```js
async function f() {
  return Promise.resolve(1)
}

f().then(alert) // 1
```

`async` ensures that the function returns a promise, and wraps non-promises in it.

## Await

`await` works only inside async functions.

```js
let value = await promise;
```

The keyword `await` makes JavaScript wait until that promise settles and returns its result.

`await` literally suspends the function execution until the promise settles, and then resumes it with the promise result.

That doesn't cost any CPU resources, because the JavaScript engine can do other jobs in the meantime.

> Modern browsers allow top-level `await` in modules
> 
> In modern browsers, `await` on top level works just fine, when we're inside a module. 
> 
> ```js
> // we assume this code runs at top level, inside a module.
> let response = await fetch('/article/promise-chaining/user.json');
> let user = await response.json();
> 
> console.log(user);
> ```
> 
> If we're not using modules, or older browsers must be supported, there's a universal recipe: wrapping into an anonymous async function.
> 
> ```js
> (async () => {
>   let response = await fetch('/article/promise-chaining/user.json');
>   let user = await response.json();
>   ...
> })();
> ```

> Async class methods
> 
> To declare an async class method, just prepend it with `async`: 
> 
> ```js
> class Waiter {
>   async wait() {
>     return await Promise.resolve(1);
>   }
> }
> 
> new Waiter()
>   .wait()
>   .then(alert); // 1 (this is the same as (result => alert(result)))
> ```
> 
> The meaning is the same: it ensures that the returned value is a promise and enables `await`.

## Error handling

If a promise resolves normally, then `await promise` returns the result.

But in the case of a rejection, it throws the error, just as if there were a `throw` statement at that line.

This code

```js
async function f() {
  await Promise.reject(new Error("Whoops!"))
}
```

is the same as this 

```js 
async function f() {
  throw new Error("Whoops!")
}
```

> In real situations, the promise may take some time before it rejects.
> In that case there will be a delay before `await` throws an error.

We can catch that error using `try ... catch`, the same way as a regular `throw`: 

```js
async function f() {
  // we can wrap multiple lines
  try {
    let response = await fetch('http://no-such-url')
    let user = await response.json()
  } catch(err) {
    // catches errors both in fetch and response.json
    alert(err)
  }
}
```

