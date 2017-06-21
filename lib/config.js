System.config({
  defaultJSExtensions: true,
  transpiler: 'typescript',
  typescriptOptions: {
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  },
  baseURL: 'src',
  map: {
    typescript: 'https://cdnjs.cloudflare.com/ajax/libs/typescript/1.9.0/typescript.min.js'
  }
});