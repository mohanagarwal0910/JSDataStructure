function getRandomThreeDigitNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

// Generate 10 random 3-digit numbers and store them in an array
let numbers = Array.from({ length: 10 }, getRandomThreeDigitNumber);
console.log("Generated numbers:", numbers);

// Sorting the array in ascending order
let sortedNumbers =numbers.sort((a, b) => a - b);
console.log("Sorted numbers:", sortedNumbers);

// Finding the 2nd smallest and 2nd largest elements
let secondSmallest = sortedNumbers[1];
let secondLargest = sortedNumbers[sortedNumbers.length - 2];

console.log("Second Smallest (Sorted):", secondSmallest);
console.log("Second Largest (Sorted):", secondLargest);
