-- AlterTable
ALTER TABLE "PackageMovement" ADD COLUMN     "statusId" INTEGER;

-- AddForeignKey
ALTER TABLE "PackageMovement" ADD CONSTRAINT "PackageMovement_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "PackageStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
