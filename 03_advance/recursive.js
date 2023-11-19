const incrementByOneRecursive = (number) => {

    // condition
    if (number === 11) return;

    // output in console
    console.log(number);

    // calls itself
    incrementByOneRecursive(number + 1)
}

incrementByOneRecursive(1)