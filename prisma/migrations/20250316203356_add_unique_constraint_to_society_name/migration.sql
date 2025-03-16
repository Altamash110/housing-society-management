/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `society` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Society_name_key` ON `society`(`name`);
