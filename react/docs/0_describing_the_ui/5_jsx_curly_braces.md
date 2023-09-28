# JavaScript in JSX with Curly Braces

Sometimes, you will want to 

1. add a little JavaScript logic or

2. reference a dynamic property inside that markup.

In this situation, you can use curly braces in your JSX to open a window to JavaScript.

---

Any JavaScript expression will work between curly braces, including functions calls like `{ handleSomething() }`.

---

## Where to use curly braces

1. **As text directly inside a JSX file**

    `<h1>{name}'s to do list` works, but `<{tag}>Nansen's to do list</{tag}>` will not.

2. **As attribute immediately following the `=` sign**

    `src={avatar}` will read the `avatar` variable, but `src="{avatar}"` will pass the string `"{avatar}"`.

---

`{{ ... }}` in JSX is nothing more than an object inside the JSX curlies.

---

