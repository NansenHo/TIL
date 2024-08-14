# `runner` function

Calling the `effect` function will return a `runner` function.

Once this runner function is called, the `fn` parameter received by `effect` function will be invoked again, and the `runner` function will also return the value returned by `fn` function. 

> We can get the return value of `fn` function by calling `runner` function.
