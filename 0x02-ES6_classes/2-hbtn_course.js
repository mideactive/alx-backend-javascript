// 2-hbtn_course.js
export default class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the type of attributes during object creation
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    // Store attributes in underscore attribute version
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Implement a getter for the name attribute
  get name() {
    return this._name;
  }

  // Implement a setter for the name attribute
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Implement a getter for the length attribute
  get length() {
    return this._length;
  }

  // Implement a setter for the length attribute
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Implement a getter for the students attribute
  get students() {
    return this._students;
  }

  // Implement a setter for the students attribute
  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
