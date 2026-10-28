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


const arrTest = ["a", "b", "c"];
console.log(arrTest[3]);

// console.log(arrTest.splice(-1, 1));


// console.log(Math.floor(Math.random() * ((-2 + 1) - 0) + 0));

