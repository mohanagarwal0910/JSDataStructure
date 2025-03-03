function getRandomThreeDigitNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        // Finding the largest and second largest
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        // Finding the smallest and second smallest
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

// Generate 10 random 3-digit numbers and store them in an array
let numbers = Array.from({ length: 10 }, getRandomThreeDigitNumber);
console.log("Generated numbers:", numbers);

let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(numbers);
console.log("Second Largest:", secondLargest);
console.log("Second Smallest:", secondSmallest);

