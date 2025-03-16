-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_societyId_fkey`;

-- DropIndex
DROP INDEX `User_societyId_fkey` ON `user`;

-- AlterTable
ALTER TABLE `user` MODIFY `societyId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_societyId_fkey` FOREIGN KEY (`societyId`) REFERENCES `Society`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
