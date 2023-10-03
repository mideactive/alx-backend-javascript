export default function getListStudentIds(stdentId = new Array()) {
 if(!Array.isArray(studentId)) {
    return [];
  }
  return studentId.map(student => student.id);
}
