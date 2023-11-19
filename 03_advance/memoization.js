/*
    Memoization can reduce the time and memory complexity of your code,
    especially when dealing with recursive or iterative functions that
    perform heavy computations.
*/

// A very basic example to understand the concept of memoization
const counter = () => {
    const cache = {}
    return (num) => {
        if (num in cache) {
            return cache[num]
        } else {
            let i = num
            let result = 0
            while( i > 0 ){
                result += i
                i--
            }
            cache[num] = result
            console.log(cache)
            return result
        }
    }
}


// Here you can see the results
const myCounter = counter()

console.time()
console.log("1st attempt: ",myCounter(10000))
console.timeEnd()
console.time()
console.log("Recalled: ",myCounter(10000))
console.timeEnd()

console.time()
console.log("1st attempt: ",myCounter(20000))
console.timeEnd()
console.time()
console.log("Recalled: ",myCounter(20000))
console.timeEnd()

console.time()
console.log("1st attempt: ",myCounter(30000))
console.timeEnd()
console.time()
console.log("Recalled: ",myCounter(30000))
console.timeEnd()


console.time()
console.log("1st attempt: ",myCounter(40000))
console.timeEnd()
console.time()
console.log("Recalled: ",myCounter(40000))
console.timeEnd()

console.time()
console.log("1st attempt: ",myCounter(50000))
console.timeEnd()
console.time()
console.log("Recalled: ",myCounter(50000))
console.timeEnd()