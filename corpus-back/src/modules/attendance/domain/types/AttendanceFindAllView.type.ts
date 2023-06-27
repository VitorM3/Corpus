import { Prisma } from '@prisma/client';

export type AttendanceFindAllViewType = Prisma.vw_attendance_find_allDelegate<
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation
>;
