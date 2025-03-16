const students = [];
function addStudent(name, grade) {
    students.push({ name: name, grade: grade });
}
function evaluateStudent(student) {
    return student.grade >= 75 ? "Pass" : "Fail"; 
}
function printResults() {
    students.forEach(student => {
        const result = evaluateStudent(student);
        console.log(`${student.name}: ${result}`);
    });
}
