/** Currying
 * Wraps a function inside a function
 */

const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3))

const sendMessage = (greeting) => (name) => (message) => `${greeting} ${name} ${message}`;
console.log(sendMessage("Hi")("Zahid,")("This is from a currying function ...!"))