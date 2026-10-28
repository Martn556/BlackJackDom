function getRandomArbitrary(min, max) {

    let rndNumb = Math.floor(Math.random() * ((max + 1) - min) + min);
    while (rndNumb != min) {
        rndNumb = Math.floor(Math.random() * ((max + 1) - min) + min);
    }
    while (rndNumb != max) {
        rndNumb = Math.floor(Math.random() * ((max + 1) - min) + min);
    }
    return rndNumb;
}

// console.log(getRandomArbitrary(100, 200));

// make a slot machine too


// console.log(arrTest[3]);

// console.log(arrTest.splice(-1, 1));


// console.log(Math.floor(Math.random() * ((-2 + 1) - 0) + 0));



function carSolution(array, end) {
    let allElms = 0;


    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(array[i]);
    }

    let i = 0;
    while (allElms < end) {
        allElms += output[i];
        if (allElms < end) {
            output.splice(i, 1);
        }
    }
    return output;
}

console.log(carSolution([4, 6, 7, 8], 12));

// const arrTest = ["a", "b", "c"];
// arrTest.splice(1, 1);
// console.log(arrTest);

