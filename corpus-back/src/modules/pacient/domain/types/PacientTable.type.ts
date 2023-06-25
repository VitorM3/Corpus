import { Prisma } from '@prisma/client';

export type PacientViewType = Prisma.vw_pacientDelegate<
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation
>;
