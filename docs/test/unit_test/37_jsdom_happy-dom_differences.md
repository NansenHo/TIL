# The Differences between `jsdom` and `happy-dom`

By default, you can use these environments with Vitest:

- `node` is default environment.
- `jsdom` emulates browser environment by providing Browser API, uses [`jsdom`](https://www.npmjs.com/package/jsdom) package.
- `happy-dom` emulates browser environment by providing Browser API, uses [`happy-dom`](https://www.npmjs.com/package/happy-dom) package.
  **`happy-dom` considered to be faster than `jsdom`, but lacks some APIs.**
- `edge-runtime` emulates Vercel's `edge-runtime`, uses `@edge-runtime/vm` package.
