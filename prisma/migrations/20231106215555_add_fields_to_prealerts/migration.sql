/*
  Warnings:

  - Added the required column `userId` to the `PreAlert` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PreAlert" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PreAlert" ADD CONSTRAINT "PreAlert_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
