/*
  Warnings:

  - You are about to drop the column `CreatedAt` on the `Package` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `PackageMovement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Package" DROP COLUMN "CreatedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "PackageMovement" DROP COLUMN "CreatedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "PreAlert" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
