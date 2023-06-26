import { Module } from '@nestjs/common';
import DatabaseModule from './database/database.module';
import AttendanceModule from 'src/modules/attendance/attendance.module';
import PacientModule from 'src/modules/pacient/pacient.module';
import EmployeeModule from 'src/modules/employee/employee.module';
import ExerciseModule from 'src/modules/exercise/exercise.module';
import RoomModule from 'src/modules/room/room.module';
import InventoryModule from 'src/modules/inventory/inventory.module';

@Module({
  imports: [
    DatabaseModule,
    AttendanceModule,
    PacientModule,
    EmployeeModule,
    ExerciseModule,
    RoomModule,
    InventoryModule,
  ],
})
export default class AppModule {}
