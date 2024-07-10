# Debug of Vitest

## JavaScript debug terminal

This can be used to **read source code**.

We can configure the JavaScript debug terminal in `yourProject/.vscode/setting.json` file.

```json
// setting.json of VSCode
{
  "debug.javascript.terminalOptions": {
    "skipFiles": ["<node_internals>/**"]
  }
}
```

This file closely resembles `launch.json`.

## launch.json

[debugging of Vitest](https://vitest.dev/guide/debugging.html)

To debug a test file in VSCode, You can add a dedicated launch configuration in `.vscode/launch.json`:

```js
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Current Test File",
      "autoAttachChildProcesses": true,
      "skipFiles": ["<node_internals>/**", "**/node_modules/**"],
      // execute this script file.
      "program": "${workspaceRoot}/node_modules/vitest/vitest.mjs",
      "args": ["run", "${relativeFile}"],
      "smartStep": true,
      "console": "integratedTerminal"
    }
  ]
}
```

Then in the debug tab, ensure 'Debug Current Test File' is selected.

Finally we can open the test file, and press F5 to start debugging.

## Vitest for VSCode plugin

Test-related Shortcuts in VSCode:

- debug all tests: `command + ;`, `command + A`
- debug test at cursor: `command + ;`, `command + C`
- debug last run: `command + ;`, `command + L`

- run all tests: `command + ;`, `A`
- run test at cursor: `command + ;`, `C`
- run last run: `command + ;`, `L`

## vitest --ui

This function is comparable to `vue-cil --ui`.

We can add an npm script `test:ui`:

```json
{
  "scripts": {
    "test:ui": "vitest --ui"
  }
}
```
