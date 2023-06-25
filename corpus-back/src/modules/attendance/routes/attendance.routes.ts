import DeleteAttendanceController from './controllers/DELETE/delete-attendance.controller';
import GetAttendanceController from './controllers/GET/get-attendance.controller';
import PostAttendanceController from './controllers/POST/post-attendance.controller';

const AttendanceRoutes = [GetAttendanceController, PostAttendanceController, DeleteAttendanceController];

export default AttendanceRoutes;
