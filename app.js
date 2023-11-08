console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) {
        console.log("Count should be a non-negative number.");
        return;
    }

    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    if (typeof userName === "undefined" || typeof age === "undefined") {
        console.log("Please provide a valid name and age.");
    } else {
        const aboveSixteen = `Congrats ${userName}, you can drive!`;
        const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

        if (age < 16) {
            console.log(belowSixteen);
        } else {
            console.log(aboveSixteen);
        }
    }
}
// Exercise 3 Section
console.log("EXERCISE 3: \n==========\n");
function quadrantCheck(x, y) {
    if (x === 0 && y === 0) {
        console.log("(0, 0) is the origin.");
    } else if (x === 0) {
        console.log(`(${x}, ${y}) is on the y axis.`);
    } else if (y === 0) {
        console.log(`(${x}, ${y}) is on the x axis.`);
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3.`);
    } else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
}
// Exercise 4 Section
console.log("EXERCISE 4: \n==========\n");
function triangleType(side1, side2, side3) {
    if (
        side1 + side2 > side3 &&
        side1 + side3 > side2 &&
        side2 + side3 > side1
    ) {
        if (side1 === side2 && side2 === side3) {
            return "Equilateral: all side lengths are equal.";
        } else if (side1 === side2 || side1 === side3 || side2 === side3) {
            return "Isosceles: only two side lengths are equal.";
        } else {
            return "Scalene: all different side lengths.";
        }
    } else {
        return "Invalid triangle: the side lengths do not form a valid triangle.";
    }
}
// Exercise 5 Section
console.log("EXERCISE 5: \n==========\n");
function dataUsageFeedback(planLimit, day, usage) {
    const daysLeft = 30 - day; // Calculate the remaining days in the 30-day period
    const averageDailyUsage = usage / day; // Calculate the average daily usage so far
    const remainingData = planLimit - usage; // Calculate the remaining data

    if (usage >= planLimit) {
        console.log("You've run out of data for this 30-day period.");
    } else {
        const averageDailyAllowance = remainingData / daysLeft;

        if (averageDailyUsage > averageDailyAllowance) {
            console.log("You are using too much data per day.");
        } else if (averageDailyUsage < averageDailyAllowance) {
            console.log("You can afford to use more data per day.");
        } else {
            console.log("You are right on track with your data usage.");
        }

        console.log(
            `You have ${remainingData} MB of data left, and you can use an average of ${averageDailyAllowance.toFixed(
                2
            )} MB per day for the remaining ${daysLeft} days.`
        );
    }
}
