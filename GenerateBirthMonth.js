function generateBirthMonths() {
    let birthdays = {};
  
    // Generate 50 random birth months (1 to 12)
    for (let i = 1; i <= 50; i++) {
      let month = Math.floor(Math.random() * 12) + 1; // Random month (1 to 12)
      
      // If month key doesn't exist, create an array for it
      if (!birthdays[month]) {
        birthdays[month] = [];
      }
  
      // Store individual in that month's array
      birthdays[month].push(`Person${i}`);
    }
  
    return birthdays;
  }
  
  // Generate birthdays
 // console.log(generateBirthMonths())
  let birthMonthGroups = generateBirthMonths();
  
  // Print the results
  console.log("Individuals grouped by birth month:");
  for (let month in birthMonthGroups) {
    console.log(`Month ${month}: ${birthMonthGroups[month].join(", ")}`);
  }
  