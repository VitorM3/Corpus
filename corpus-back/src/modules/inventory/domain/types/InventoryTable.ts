import { Prisma } from '@prisma/client';

export type InventoryTableType = Prisma.inventoryDelegate<
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation
>;
