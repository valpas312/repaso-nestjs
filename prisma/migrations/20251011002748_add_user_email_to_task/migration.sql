/*
  Warnings:

  - Added the required column `userEmail` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Task" ADD COLUMN     "userEmail" TEXT NOT NULL;
