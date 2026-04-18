// =========================
// JavaScript Data Types Demo
// This project uses:
// 1. String
// 2. Number
// 3. Boolean
// 4. Array
// 5. Object
// 6. Null
// 7. Undefined
// =========================


/* =========================
   Function: showResult()
   Purpose:
   - Collect input values from the form
   - Validate empty fields
   - Calculate grade based on marks
   - Determine pass/fail status
   - Show the result inside the table
   - Display the print button
========================= */
function showResult() {

    // =========================
    // Input section
    // Collects values from input fields
    // =========================

    // 1. String data type
    // Get student name from input field
    let studentName = document.getElementById("Stu_name").value;

    // 2. Number data type
    // Convert age input value into number
    let age = Number(document.getElementById("Stu_age").value);

    // 3. Number data type
    // Convert marks input value into number
    let marks = Number(document.getElementById("Stu_marks").value);

    // 4. Array data type
    // Stores all grade labels in order
    let grades = ["A+", "A", "A-", "B+", "B", "C+", "C", "D+", "D", "E", "F"];

    // Variables to store final grade and pass/fail status
    let grade;
    let isPassed;

    // =========================
    // Grade calculation logic
    // Determines grade based on marks
    // Also sets pass/fail using boolean
    // =========================
    if (marks >= 90) {
        grade = grades[0];
        isPassed = true;
    }
    else if (marks >= 85) {
        grade = grades[1];
        isPassed = true;
    }
    else if (marks >= 80) {
        grade = grades[2];
        isPassed = true;
    }
    else if (marks >= 75) {
        grade = grades[3];
        isPassed = true;
    }
    else if (marks >= 70) {
        grade = grades[4];
        isPassed = true;
    }
    else if (marks >= 65) {
        grade = grades[5];
        isPassed = true;
    }
    else if (marks >= 60) {
        grade = grades[6];
        isPassed = true;
    }
    else if (marks >= 55) {
        grade = grades[7];
        isPassed = true;
    }
    else if (marks >= 50) {
        grade = grades[8];
        isPassed = true;
    }
    else if (marks >= 40) {
        grade = grades[9];
        isPassed = true;
    }
    else {
        grade = grades[10];
        isPassed = false;
    }

    /* =========================
       Empty field validation
       Purpose:
       - Prevents blank input submission
       - Stops function if any input is empty
    ========================= */
    if (
        document.getElementById("Stu_name").value === "" ||
        document.getElementById("Stu_age").value === "" ||
        document.getElementById("Stu_marks").value === ""
    ) {
        alert("Please fill up all fields first");
        return;
    }

    // =========================
    // Output section
    // Places calculated values into table cells
    // =========================

    // Show student name in result table
    document.getElementById("Stu_name_show").innerText = `${studentName}`;

    // Show student age in result table
    document.getElementById("Stu_age_show").innerText = `${age}`;

    // Show student marks in result table
    document.getElementById("Stu_marks_show").innerText = `${marks}`;

    // Show grade in result table
    document.getElementById("Stu_grade_show").innerText = `${grade}`;

    // Show pass/fail status in result table
    document.getElementById("Stu_Status_show").innerText = `${isPassed ? "Passed" : "Failed"}`;

    // =========================
    // Make the result table visible
    // This was hidden initially in CSS
    // =========================
    document.getElementById("result_table").style.display = "table";

    // Show the print button after result is generated
    document.getElementById("print_btn").style.display = "block";
}


/* =========================
   Function: resetPortal()
   Purpose:
   - Clears all input fields
   - Clears all output fields
   - Hides result table
   - Hides print button
========================= */
function resetPortal() {

    // Clear input values
    document.getElementById("Stu_name").value = "";
    document.getElementById("Stu_age").value = "";
    document.getElementById("Stu_marks").value = "";

    // Clear displayed result values
    document.getElementById("Stu_name_show").innerText = "";
    document.getElementById("Stu_age_show").innerText = "";
    document.getElementById("Stu_marks_show").innerText = "";
    document.getElementById("Stu_grade_show").innerText = "";
    document.getElementById("Stu_Status_show").innerText = "";

    // Hide the table again after reset
    document.getElementById("result_table").style.display = "none";

    // Hide the print button again after reset
    document.getElementById("print_btn").style.display = "none";
}


/* =========================
   Function: printResult()
   Purpose:
   - Opens browser print dialog
   - Allows user to print or save as PDF
========================= */
function printResult() {
    window.print();
}
