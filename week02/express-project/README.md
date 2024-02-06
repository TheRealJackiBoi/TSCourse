# Express

## Run

I changed the run config for nodemon to:

```json
    "exec": "tsc -p . && node ./dist/server.js"
```

In package.json I also added 

```json
"type": "module"
```

otherwise, the compiler wouldn't recognise that it's a module, and therefore throw a compiletime error.
