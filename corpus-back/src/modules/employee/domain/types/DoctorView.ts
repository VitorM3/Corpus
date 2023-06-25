import { Prisma } from '@prisma/client';

export type DoctorViewType = Prisma.vw_doctorDelegate<
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation
>;
