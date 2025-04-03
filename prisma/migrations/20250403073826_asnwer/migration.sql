/*
  Warnings:

  - You are about to drop the column `readingAnswer` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `readingQuetionId` on the `Exam` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Exam" DROP COLUMN "readingAnswer",
DROP COLUMN "readingQuetionId";

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "readingQuetionId" INTEGER,
    "readingAnswer" TEXT,
    "listeningQuetionId" INTEGER,
    "listeningAnswer" TEXT,
    "writingQuetionId" INTEGER,
    "writingAnswer" TEXT,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);
