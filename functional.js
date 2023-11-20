/**
 * Example One
 * example of non pure / impure function
 * and its side effects
 */

let users = [
    { name: "James", score: 30, tries: 1 },
    { name: "Mary", score: 110, tries: 4 },
    { name: "Henry", score: 80, tries: 3 }
]

let currentUser = 2;

let updateScore = newAmt => users[currentUser].score += newAmt;
let returnUsers = () => users;
let updateTries = () => users[currentUser].tries++;
let updateUser = newUser => currentUser = newUser;

console.log(returnUsers())
console.log('Current user has been updated: ', updateUser(0))
console.log(updateScore(10));

/**
 * Example Two
 * function with side effect
 */

let cnt = 0;
let incrementExampleOne = function() {
    cnt++;
    return cnt;
}

/**
 * function without side effect
 * this is called a pure function
 */

let incrementExampleTwo = function(num) {
    return ++num
}

console.log('Increment Example Two: ', incrementExampleTwo(1))

/**
 * an other example of pure function
 */

let average = scores => {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    console.clear()
    console.log('Total of given numbers: ', total);
    console.log('Total numbers are: ', scores.length);

    return total / scores.length;
};

console.log(average([10,20]))