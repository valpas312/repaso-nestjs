/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Task` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "userEmail",
ADD COLUMN     "userId" TEXT NOT NULL;
