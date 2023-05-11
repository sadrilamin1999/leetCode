function createHelloWorld() {
  return function helloWorld() {
    return "Hello World";
  };
}
const x = createHelloWorld()();
console.log(x);
