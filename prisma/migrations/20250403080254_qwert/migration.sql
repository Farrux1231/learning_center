/*
  Warnings:

  - You are about to drop the column `readingQuetionId` on the `Answer` table. All the data in the column will be lost.
  - Added the required column `studentId` to the `Answer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "readingQuetionId",
ADD COLUMN     "readingQuestionId" INTEGER,
ADD COLUMN     "studentId" INTEGER NOT NULL;
