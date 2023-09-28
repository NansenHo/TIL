# Render and Commit

Any screen update in a React app happens in three steps:

1. Trigger
2. Render
3. Commit

---

There are two reasons for a component to render:

1. It's the component's **inital render**.

2. The component's (or one of its ancestors') **state has been updated**.

---

When your app starts, you need to trigger the initial render.

It's done by calling `createRoot` with the target DOM node, and then calling its `render` method with your component.

---

On initial renders, React will call the root component.

For subsequent renders, React will call the function component whose state update triggered the render.

---

This process is recursive: 

if the updated component returns some other component, React will render that component next, and if that component also returns something, it will render that component next, and so on.

The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.

---

The default behavior of rendering all components nested within the updated component is not optimal for performance if the updated component is very high in the tree.

**Don't optimize prematurely!**

---

After rendering (calling) your components, React will modify the DOM:

- **For the initial render**

    React will use the `appendChild()` DOM API to put all the DOM nodes it has created on screen.

- **For re-render**

    React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.

---

React only changes the DOM nodes if there's a difference between renders.
