# React Docs

The `export default` keywords specify the main component in the file.

JSX is more stricter than HTML.
You have to close tags like `<br />`.

Curly braces let you "escape back" into JavaScript in JSX.

```jsx
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

{
  /* style={{}} */
}
<img
  className="avatar"
  src={user.imageUrl}
  alt={"Photo of " + user.name}
  style={{
    width: user.imageSize,
    height: user.imageSize,
  }}
/>;
```
In the above example, `style={{}}` is not a special syntax, but a regular `{}` object inside the `style={}` JSX curly braces.

You can only call Hooks at the top of your components (or other Hooks). If you want to use useState in a condition or a loop, extract a new component and put it there.

