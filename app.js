//JS Data Types

// 01.String
// 02.Number
// 03.Boolean
// 04.Array
// 05.Object
// 06.Null
// 07.Undefined




function showResult() {
    // 1. String
    let studentName =
        document.getElementById("Stu_name").value;
    document.getElementById("Stu_name_show").innerText = `Student Name: ${studentName}`;


    // 2. Number
    let age = document.getElementById("Stu_age").value;
    document.getElementById("Stu_age_show").innerText = `Student Age: ${age}`;

    let marks =Number( document.getElementById("Stu_marks").value);
// 3. Array
let grades = ["A+", "A", "A-", "B+", "B", "C+", "C", "D+", "D", "E", "F" ];

let grade;
let isPassed;

if(marks >= 90){
    grade = grades[0];
    // 4. Boolean
    isPassed = true;
}
else if(marks >= 85) {
grade = grades[1];
 isPassed = true;
}

else if(marks >= 80) {
grade = grades[2];
 isPassed = true;
}

else if(marks >= 75) {
grade = grades[3];
 isPassed = true;
}

else if(marks >= 70) {
grade = grades[4];
 isPassed = true;
}

else if(marks >= 65) {
grade = grades[5];
 isPassed = true;
}

else if(marks >= 60) {
grade = grades[6];
 isPassed = true;
}

else if(marks >= 55) {
grade = grades[7];
 isPassed = true;
}

else if(marks >= 50) {
grade = grades[8];
 isPassed = true;
}

else if(marks >= 40) {
grade = grades[9];
 isPassed = true;
}

else {
grade = grades[10];
 isPassed = false;
}
 document.getElementById("Stu_marks_show").innerText =`Student Marks:${marks}`; 
 document.getElementById("Stu_grade_show").innerText = `Grade: ${grade} | Status: ${isPassed  ? "Passed" : "Failed"}`
}
// 6. Undefined
let futureGoal;

// 7. Null
let middleName = null;


// 5. Object
let student = {
    name: studentName,
    age: age,
    marks: marks,
    passed: isPassed,
    skills: skills,
    "Future Goal": futureGoal,
    "Middle Name": middleName,
};

// document.getElementById("portal_2nd").innerText = JSON.stringify(student, null, 2);
// Output
// console.log("Student Profile:");
// console.log(student);

// console.log("Name:", student.name);
// console.log("Age:", student.age);
// console.log("Marks:", student.marks);
// console.log("Passed:", student.passed);
// console.log("Skills:", student.skills);

// console.log("Future Goal:", futureGoal);
// console.log("Middle Name:", middleName);


