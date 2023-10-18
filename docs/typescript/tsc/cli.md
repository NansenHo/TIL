# TSC CLI

```bash
# init a tsconfig.json file
tsc --init

# enter the watch mode
tsc fileName watch 
tsc fileName -W 

# this would override whatever is in the tsconfig file
tsc fileName --noEmitOnError -W
```