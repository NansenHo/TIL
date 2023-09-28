# Writing Markup with JSX

## What's JSX

JSX is a extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

> Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.

JSX is a syntax extension, while React is a JavaScript library.

JSX is stricter and has a few more rules than HTML!

> Most of the time, React's on-screen error messages will help you find where the problem is.

## The Rules of JSX

1. **Return a single tag element**

    > Why do multiple JSX tags need to be wrapped?
    > 
    > JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects.
    > You can't return two objects from a function without wrapping them into an array.

2. **Close all the tags**

3. **camelCase most of things**

    JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects.

    > Why does React use `className` instead of a `class` attribute?
    >
    > Because `class` is  a reserved keyword in JavaScript and since React uses JSX, which is a JavaScript extension, we must use `className` rather than `class`.
