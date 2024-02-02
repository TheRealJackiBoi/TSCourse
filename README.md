# TSCourse
This is the exercises for our typescript course for Datamatiker at CPH Business

## Default tsconfig
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "rootDirs": ["./"],
    "outDir": "./dist",
    "lib": ["es2020", "dom"],
    "target": "es2020",
    "module": "esnext",
    "moduleResolution": "node",
    "esModuleInterop": true,
  },
  "ts-node": {
    "esm": true,
    "experimentalSpecifierResolution": "node"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```
