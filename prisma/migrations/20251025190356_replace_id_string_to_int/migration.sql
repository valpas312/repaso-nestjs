/*
  Warnings:

  - The primary key for the `Task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `receiverId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `Task` table. All the data in the column will be lost.
  - The `id` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Task" DROP CONSTRAINT "Task_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Task" DROP CONSTRAINT "Task_senderId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP CONSTRAINT "Task_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "receiverId",
DROP COLUMN "senderId",
ADD COLUMN     "userId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Task_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "public"."User";
