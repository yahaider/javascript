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

console.log(average([10,20]));

/**
 * copy of object with new memory reference
 */

const clonedUsersList = JSON.parse(JSON.stringify(users));
console.log('Original users list: ', users);

clonedUsersList[0].name = "Jhon Doe";
clonedUsersList[0].score += 10;
console.log('Cloned users list: ', clonedUsersList);

/**
 * Exercise
 * 1) - any scores that are below 10 needs to be multiplied by 10 and
 *      the new value included.
 * 2) - remove any scores that are over 100.
 * 3) - remove nay scores that are 0 or below.
 * 4) - provide a count for the number of scores still remaining.
 */

/** scores */
const scores = [50, 6, 100, 5, 10, 55, 8, 60, 90, 80, 0, 30, 110, -3];

/** Solution 01 */
const newScores = scores.map((score, index, array) => {
    return (score < 10 && score > 0) ? score * 10 : score;
})

console.log('----- Solution 01 -----');
console.log('New scores: ', newScores);

/** Solution 02 */
const removeOverHundred = scores.filter((score) => {
    return score > 100;
})

console.log('----- Solution 02 -----');
console.log('List of scores > 100: ', removeOverHundred);

/** Solution 03 */
const removeZeroAndBelow = scores.filter((score) => {
    return score > 0;
})

console.log('----- Solution 03 -----');
console.log('List of scores > 0: ', removeZeroAndBelow);

/** Solution 04 - a
 * sum of scores
*/

const sumOfScores = scores.reduce((accumulator, score, index, array) => {
    return accumulator +=score;
})

console.log('----- Solution 04 - a -----');
console.log('Sum of scores: ', sumOfScores);

/** Solution 04 - b
 * provide a count for the number of scores.
*/

const scoresCount = scores.reduce((accumulator, score, index, array) => {
    // return array.length;
    return accumulator + 1;
}, 0)

console.log('----- Solution 04 - b -----');
console.log('Scores count: ', scoresCount);