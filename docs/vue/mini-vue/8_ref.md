# `ref`

In Vue, `ref` is a simple reactive data wrapper used to make an ordinary JavaScript value reactive.
It has only one key, which is `value`, and it is used to store the wrapped value.

Since `ref` has only one key, it requires only one dependency(`dep`) to track the dependencies related to this key.

When the `value` of `ref` changed, this `dep` notifies the relevant observers, which triggers updates to the views associated with the `ref` or performs other side effects.

Therefore, for a `ref`, only one `dep` is needed to manage its dependencies and ensure that it triggers updates or side effects correctly.
