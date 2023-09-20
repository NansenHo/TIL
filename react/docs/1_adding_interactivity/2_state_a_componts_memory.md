# State: A Component's Memory

Components need to "remember" things: the current input value, the current image, the shopping cart. 

In React, this kind of component-specific memory is called state.

---

- **Local variables don't persist between renders.**

    When React renders this component a second time, it renders it from scratch —— it doesn't consider any changes to the local variables.

- **Changes to local variables won't trigger renders.**

    React doesn't realize it needs to render the component again with the new data.

---

Hooks are special functions that are only available while React is rendering.

--- 

Hooks can only be called at the top level of your components or your own Hooks.

You can't call Hooks inside conditions, loops, or other nested functions.

---

If you render the same component twice, each copy will have completely isolated state!

---

Unlike props, state is fully private to the component declaring it.
