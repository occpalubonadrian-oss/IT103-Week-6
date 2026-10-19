
/*
 * File Name: grading.js
 * Author: Kent Adrian
 * Date: October 19, 2026
 */

// This function checks the student's score.
function assessGrade(score) {
    // Check if the score is invalid.
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid score";
    } else if (score >= 95) {
        // Return Excellent for scores of 95 and above.
        return "Excellent";
    } else if (score >= 85) {
        // Return Very Good for scores of 85 and above.
        return "Very Good";
    } else if (score >= 75) {
        // Return Passing for scores of 75 and above.
        return "Passing";
    } else {
        // Return Failing for scores below 75.
        return "Failing";
    }
}

// These are the scores to test.
const tests = [-5, 0, 74, 75, 84, 85, 94, 95, 100, 120];

// Display the title of the grade assessor tests.
console.log("GRADE ASSESSOR TESTS");

// Check each score in the list.
for (const score of tests) {
    // Display the score and its grade.
    console.log("Score:", score, "Grade:", assessGrade(score));
}

// This function checks the selected menu option.
function menuAction(choice) {
    // Check which menu option was selected.
    switch (choice) {
        case "1":
            // Option 1 adds a new record.
            return "Add a new record";

        case "2":
            // Option 2 displays all records.
            return "View all records";

        case "3":
        case "delete":
            // Both choices ask to confirm deletion.
            return "Confirm deletion";

        case "0":
            // Option 0 exits the program.
            return "Exit the program";

        default:
            // Display a message for an invalid choice.
            return "Invalid option - please choose 0 to 3";
    }
}

// Display the title of the menu selection tests.
console.log("\nMENU SELECTION TESTS");

// Test the menu options.
console.log(menuAction("1"));
console.log(menuAction("delete"));
console.log(menuAction("9"));
