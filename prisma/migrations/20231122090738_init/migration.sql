/*
  Warnings:

  - You are about to drop the `rquestPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "rquestPost";

-- CreateTable
CREATE TABLE "application_from_user" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "application_from_user_pkey" PRIMARY KEY ("id")
);
