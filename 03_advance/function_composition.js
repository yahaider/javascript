/** declaration */
const user = { name: "Zahid Ali", age: 25 }
const getAge = user => user.age;
const isAllowedAge = age => age >= 21;

/** first approach */
const composeTest = function (isAllowedAge, getAge) {
    return function (user) {
        return isAllowedAge(getAge(user));
    }
}

const validUser = composeTest(isAllowedAge, getAge);
console.log("Output from 1st approach: ", validUser(user));

/** second approach */
const compose = (f, g) => x => f(g(x))
const isUserAllowedToDrink = compose(isAllowedAge, getAge);
console.log("Output from 2nd approach: ", isUserAllowedToDrink(user));