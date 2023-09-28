// 1-make_classrooms.js
import ClassRoom from './0-classroom.js';
export default function initializeRooms() {
	const sizes = [19, 20, 34];
	const classrooms = [];
	
	for (const size of sizes) {
		classrooms.push(new ClassRoom(size));
	}
	return classrooms;
}
