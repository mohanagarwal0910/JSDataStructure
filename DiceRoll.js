function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Random number between 1-6
}

function simulateDiceRolls() {
    let rollCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }; // Dictionary to store counts
    let maxRolls = 10;
    let maxReached = false;

    while (!maxReached) {
        let roll = rollDie();
        rollCounts[roll]++;

        // Check if any number has reached 10 times
        if (rollCounts[roll] === maxRolls) {
            maxReached = true;
        }
    }

    console.log("Final Dice Roll Counts:", rollCounts);

    // Finding the number that appeared the most and least times
    let maxNumber = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] > rollCounts[b] ? a : b);
    let minNumber = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] < rollCounts[b] ? a : b);

    console.log(`Number that appeared **most**: ${maxNumber} (${rollCounts[maxNumber]} times)`);
    console.log(`Number that appeared **least**: ${minNumber} (${rollCounts[minNumber]} times)`);
}

// Run the simulation
simulateDiceRolls();
