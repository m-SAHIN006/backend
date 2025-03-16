const students = [
    { name: "Ali", mark: 85 },
    { name: "ahmed", mark: 45 },
    { name: "Mohammad", mark: 60 },
    { name: "omar", mark: 30 },
    { name: "khattab", mark: 90 }
];

let successStudents = [];
let failedStudents = [];

for (let i = 0; i < students.length; i++) {
    if (students[i].mark >= 50) {
        successStudents.push(students[i]);
    } else {
        failedStudents.push(students[i]);
    }
}
console.log("Successful Students:");
for (let i = 0; i < successStudents.length; i++) {
    console.log(successStudents[i].name + " - Grade: " + successStudents[i].mark);
}

console.log("\nFailed Students:");
for (let i = 0; i < failedStudents.length; i++) {
    console.log(failedStudents[i].name + " - Grade: " + failedStudents[i].mark);
}
