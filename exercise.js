function f(x) {
    x = { a: "5" }
}
let x = { a: "1" }

f(x);
console.log(x.a);