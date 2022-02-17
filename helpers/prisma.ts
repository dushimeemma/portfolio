import { PrismaClient } from '@prisma/client';

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  globalThis.prisma ||
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

if (!IS_PRODUCTION) {
  globalThis.prisma = prisma;
}

export default prisma;
