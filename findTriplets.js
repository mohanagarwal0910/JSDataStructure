function findTriplets(arr) {
    let triplets = [];
    let n = arr.length;

    // Check all possible triplets
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }

    return triplets;
}

// Example usage:
let numbers = [0, -1, 2, -3, 1, -2, 3];
let result = findTriplets(numbers);

console.log("Triplets that sum to zero:", result);
