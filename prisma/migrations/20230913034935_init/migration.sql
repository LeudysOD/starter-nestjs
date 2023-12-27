-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userName" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "indentificationNumber" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phoneNumber" VARCHAR(100) NOT NULL,
    "branchId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Branch" (
    "id" SERIAL NOT NULL,
    "branchName" VARCHAR(100) NOT NULL,
    "address" VARCHAR(200) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "phoneNumber" VARCHAR(20) NOT NULL,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Package" (
    "id" SERIAL NOT NULL,
    "trackingNumber" VARCHAR(100) NOT NULL,
    "description" VARCHAR(100) NOT NULL,
    "weight" DECIMAL(65,30) NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "courierFeed" DECIMAL(65,30) NOT NULL,
    "origin" VARCHAR(100) NOT NULL,
    "destination" VARCHAR(100) NOT NULL,
    "userId" INTEGER NOT NULL,
    "packageStatusId" INTEGER NOT NULL,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PackageStatus" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(100) NOT NULL,

    CONSTRAINT "PackageStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PackageMovement" (
    "id" SERIAL NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "packageId" INTEGER NOT NULL,

    CONSTRAINT "PackageMovement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "question" VARCHAR(200) NOT NULL,
    "answer" VARCHAR(200) NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreAlert" (
    "id" SERIAL NOT NULL,
    "trackingNumber" VARCHAR(100) NOT NULL,
    "supplierName" VARCHAR(100) NOT NULL,
    "contentDescription" VARCHAR(100) NOT NULL,
    "fob" DECIMAL(65,30) NOT NULL,
    "receiptDocument" TEXT NOT NULL,

    CONSTRAINT "PreAlert_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Package" ADD CONSTRAINT "Package_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Package" ADD CONSTRAINT "Package_packageStatusId_fkey" FOREIGN KEY ("packageStatusId") REFERENCES "PackageStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackageMovement" ADD CONSTRAINT "PackageMovement_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
