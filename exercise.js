function foo() { }
const bar = new foo();
console.log(bar.__proto__.constructor);
