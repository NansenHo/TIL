# Additional Flags For `npm install` 

[NPM DOCS - npm install](https://docs.npmjs.com/cli/v8/commands/npm-install)

`npm install` saves any specified packages into `dependencies` by default.

Additionally, you can control where and how they get saved with some additional flags:

### `-P` / `--save-prod` 

Package will appear in your `dependencies`.

This is the default unless `-D` or `-O` are present.

### `-D` / `--save-dev`

Package will appear in your `devDependencies`.

### `-O` / `--save-optional`

Package will appear in your `optionalDependencies`.

### `--no-save`

Prevents saving to `dependencies`.
