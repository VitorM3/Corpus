import DeleteAttendanceController from './controllers/DELETE/delete-attendance.controller';
import GetAttendanceController from './controllers/GET/get-attendance.controller';
import PatchAttendanceController from './controllers/PATCH/patch-attendance.controller';
import PostAttendanceController from './controllers/POST/post-attendance.controller';

const AttendanceRoutes = [
  GetAttendanceController,
  PostAttendanceController,
  DeleteAttendanceController,
  PatchAttendanceController,
];

export default AttendanceRoutes;
