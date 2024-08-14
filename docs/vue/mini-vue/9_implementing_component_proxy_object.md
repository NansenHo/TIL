# Implementing component proxy object

## implementation of $el

1. get the root element

2. mount this element onto instance

3. set get function of proxy

## setupState

1. Create a proxy object to return the value of `setupState`.

2. Mount this proxy object onto `render` function.

Then, we can use `this.key` to get value of `setupState` in `render` function.
