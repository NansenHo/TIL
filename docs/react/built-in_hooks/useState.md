# useState

## What's state

State is reserved only for interactivity, that is, data that changes over time.

State is any piece of information that can change over time across renders in React.

## Identify that these data do not belong to the state

1. Does it **ramain unchange** over time? if so, it isn't satate.
2. Is it **passed in from a parent** via props? if so, it isn't state.
3. **Can you compute it** based on existing state or props in your component? if so, it definitely isn't state.


