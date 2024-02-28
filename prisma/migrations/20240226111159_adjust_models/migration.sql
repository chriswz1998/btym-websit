/*
  Warnings:

  - You are about to drop the `application_from_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ApplicationState" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- DropTable
DROP TABLE "application_from_user";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sections" (
    "section_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "sections_pkey" PRIMARY KEY ("section_id")
);

-- CreateTable
CREATE TABLE "subsections" (
    "subsection_id" SERIAL NOT NULL,
    "section_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "subsections_pkey" PRIMARY KEY ("subsection_id")
);

-- CreateTable
CREATE TABLE "articles" (
    "article_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT,
    "publish_date" TIMESTAMP(3) NOT NULL,
    "author" TEXT,
    "summary" TEXT,
    "content" TEXT,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("article_id")
);

-- CreateTable
CREATE TABLE "article_parts" (
    "part_id" SERIAL NOT NULL,
    "article_id" INTEGER NOT NULL,
    "subsection_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "article_parts_pkey" PRIMARY KEY ("part_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "subsections" ADD CONSTRAINT "subsections_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "sections"("section_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_parts" ADD CONSTRAINT "article_parts_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "articles"("article_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "article_parts" ADD CONSTRAINT "article_parts_subsection_id_fkey" FOREIGN KEY ("subsection_id") REFERENCES "subsections"("subsection_id") ON DELETE RESTRICT ON UPDATE CASCADE;
