const user = { name: "Zahid Ali", age: 25 }
const compose = (f, g) => x => f(g(x))

const getAge = user => user.age;
const isAllowedAge = age => age >= 22;

const isUserAllowedToDrink = compose(isAllowedAge, getAge);

console.log(isUserAllowedToDrink(user));

// console.log(getAge(user))
// console.log(isAllowedAge(getAge(user)))