function findRepeatedDigitNumbers() {
    let repeatedNumbers = [];

    for (let i = 10; i < 100; i++) {
        let strNum = i.toString();
        if (strNum[0] === strNum[1]) {
            repeatedNumbers.push(i);
        }
    }

    return repeatedNumbers;
}

// Example usage
let result = findRepeatedDigitNumbers();
console.log("Numbers with repeated digits:", result);
