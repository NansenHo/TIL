# Thinking in React

`props` is called one-way data flow because the data flows down from the top-level component to the ones at the bottom of the tree.

React makes data flow explicit, but it requires a little more typing than two-way data binding.

---

The most important principle for **structuring state** is to keep it DRY (Don’t Repeat Yourself).

---

## Props & State

There are two types of "model" data in React: 

1. Props
2. State

The two are very different:

1. **Props are like arguments you pass to a function.**

    They let a parent component pass data to a child component and customize its appearance.

2. **State is like a component's memory.**

    It lets a component keep track of some information and change it in response to interactions.
    For example, a `Button` component might keep track of `isHovered` state.

Props and state are different, but they work together.

A parent component will often keep some information in state (so that it can change it), and pass it down to child components as their props.

---

React uses one-way data flow, passing data down the component hierarchy from parent to child component.

--- 

## Identify where your state should live following these steps:

1. Identify every component that renders something based on that state.

2. Find their closest common parent component

3. Decide where the state should live:

    1. Often, you can put the state directly into their common parent.

    2. You can also put the state into some components above their common parent.

    3. If you can't find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the dierarchy above the common parent component.