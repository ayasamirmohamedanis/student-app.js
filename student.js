const fs = require("fs");

const getStudents = () => {
  try {
    const students = JSON.parse(fs.readFileSync("students.json").toString());
    console.log(students);
    return students;
  } catch (e) {
    return [];
  }
};

const saveStudents = (students) => {
  fs.writeFileSync("students.json", JSON.stringify(students));
};

const addStudent = (id, stName, degress, comment) => {
  const students = getStudents();
  const duplicateId = students.find((student) => student.id === id);
  if (!duplicateId) {
    let totalDegrees = 0;
    for (let i = 0; i < degress.length; i++) {
      totalDegrees += degress[i];
    }
    students.push({
      id,
      stName,
      degress,
      comment,
      totalDegrees,
    });
    console.log(students);
    saveStudents(students);
    console.log("added successfully");
  } else {
    console.log("Error: this student is already exist");
  }
};

const deleteStudent = (id) => {
  const students = getStudents();
  const studentsToKeep = students.filter((student) => student.id !== id);
  if (students.length !== studentsToKeep.length) {
    saveStudents(studentsToKeep);
    console.log("deleted successfully");
  } else {
    console.log("this student is not exists");
  }
};

const readStudent = (stName) => {
  const students = getStudents();
  const studentToRead = students.find((student) => student.stName === stName);
  if (studentToRead) {
    console.log(studentToRead.stName, studentToRead.totalDegrees);
  } else {
    console.log("this student is not exists");
  }
};

const getStudentsList = () => {
  const students = getStudents();
  students.forEach((student) => console.log(student.stName));
};

module.exports = {
  addStudent,
  deleteStudent,
  readStudent,
  getStudentsList
};
