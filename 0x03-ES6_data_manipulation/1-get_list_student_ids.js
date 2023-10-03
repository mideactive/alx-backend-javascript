export default function getListStudentIds(city) {
 if(!Array.isArray(city)) {
    return [];
  }
  return city.map(student => student.id);
}
