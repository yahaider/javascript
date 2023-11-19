/** Array Helper Methods in ES6 */

/** Array */
const cities = [
    "Lahore",
    "Faisalabad",
    "Rawalpindi",
    "Gujranwala",
    "Multan",
    "Bahawalpur",
    "Sargodha",
    "Sialkot",
    "Sheikhupura",
    "Rahim Yar Khan",
    "Jhang"
]

/** Object */
const students = [
    {name:"Zahid Ali",age:40},
    {name:"Mudassar Ali",age:25}
]

/** forEach()
 * Syntax: array.forEach(function(currentValue, index, arr))
 * array.forEach() calls a function on each element in an array.
 * forEach(callbackFn, thisArg)
 */

// cities.forEach(( city, index, citiesList ) => {
//     console.log(`Index: ${index}, City: ${city}`)
// })

/** map()
 * array.map() loop through each item of the array,
 * same as forEach() but map() returns the value of
 * the array.map() calls the function for every element
 * of the array in a particular order.
 * Syntax: array.map(function(currentValue, index, arr))
 * map(callbackFn, thisArg)
 */

/** Let’s start with a simple example */
// let resStudetns = []
// for(let i = 0; i < students.length; i++){
//     resStudetns.push(students[i].name)
// }

// console.log(resStudetns);

/** Now, let’s approach this using array.map() helper method. */
// const mapOutput = students.map((student, index, studentsList) => {
//     return student
// })

// console.log(`Map: `, mapOutput)
// console.log(`Original: `, students)

/** filter()
 * array.filter() contains a boolean condition.filter()
 * returns an array consisting of all the elements that
 * are true inside a function. It does not male any change
 * in the original array. filter() is often used in filtering
 * and sorting a list.
 * Syntax: array.filter(function(currentValue, index, arr))
 * filter(callbackFn, thisArg)
 */

// const filterOutput = students.filter(( student, index, studentsList) => {
//     return student.name === 'Zahid Ali'
// })

// console.log(`Filtered: `, filterOutput)
// console.log(`Original: `, students)

/** find()
 * array.find() find value in the array (only the first value),
 * if an element in the array satisfies the provided testing
 * function else undefined if not found.It is really useful in
 * a situation where we have a massive database and we have to
 * find the ids of people.
 * Syntax: find(callbackFn, thisArg)
 */

const findOutput = students.find((student, index, array)=>{
    return student.name === 'Mudassar Ali'
})

console.log(`Result: `, findOutput)
console.log(`Original: `, students)