-- CreateTable
CREATE TABLE `Society` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `contactInfo` VARCHAR(191) NOT NULL,
    `registrationNumber` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Society_registrationNumber_key`(`registrationNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `societyId` INTEGER NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Resident` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `flatId` INTEGER NOT NULL,

    UNIQUE INDEX `Resident_userId_key`(`userId`),
    UNIQUE INDEX `Resident_flatId_key`(`flatId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Flat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `societyId` INTEGER NOT NULL,
    `flatNumber` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `ownerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Admin_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CommitteeMember` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `position` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CommitteeMember_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SecurityGuard` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `shiftTimings` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SecurityGuard_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Staff` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `contactInfo` VARCHAR(191) NOT NULL,
    `societyId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MaintenanceBill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `residentId` INTEGER NOT NULL,
    `flatId` INTEGER NOT NULL,
    `amount` DOUBLE NOT NULL,
    `dueDate` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `paymentMethod` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Visitor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `contactInfo` VARCHAR(191) NOT NULL,
    `purpose` VARCHAR(191) NOT NULL,
    `entryTime` DATETIME(3) NOT NULL,
    `exitTime` DATETIME(3) NULL,
    `approvedBy` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Complaint` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `residentId` INTEGER NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `assignedTo` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `organizedBy` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SocietyRule` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `enforcedBy` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ParkingSlot` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `societyId` INTEGER NOT NULL,
    `flatId` INTEGER NULL,
    `slotNumber` VARCHAR(191) NOT NULL,
    `vehicleNumber` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vehicle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ownerId` INTEGER NOT NULL,
    `vehicleNumber` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `residentId` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `assignedStaffId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmergencyAlert` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `raisedBy` INTEGER NOT NULL,
    `alertType` VARCHAR(191) NOT NULL,
    `alertTime` DATETIME(3) NOT NULL,
    `resolvedBy` INTEGER NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VotingPoll` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdBy` INTEGER NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `options` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SocietyDocument` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `uploadedBy` INTEGER NOT NULL,
    `uploadDate` DATETIME(3) NOT NULL,
    `fileLocation` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_societyId_fkey` FOREIGN KEY (`societyId`) REFERENCES `Society`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resident` ADD CONSTRAINT `Resident_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resident` ADD CONSTRAINT `Resident_flatId_fkey` FOREIGN KEY (`flatId`) REFERENCES `Flat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Flat` ADD CONSTRAINT `Flat_societyId_fkey` FOREIGN KEY (`societyId`) REFERENCES `Society`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Flat` ADD CONSTRAINT `Flat_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CommitteeMember` ADD CONSTRAINT `CommitteeMember_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SecurityGuard` ADD CONSTRAINT `SecurityGuard_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Staff` ADD CONSTRAINT `Staff_societyId_fkey` FOREIGN KEY (`societyId`) REFERENCES `Society`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MaintenanceBill` ADD CONSTRAINT `MaintenanceBill_residentId_fkey` FOREIGN KEY (`residentId`) REFERENCES `Resident`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MaintenanceBill` ADD CONSTRAINT `MaintenanceBill_flatId_fkey` FOREIGN KEY (`flatId`) REFERENCES `Flat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Visitor` ADD CONSTRAINT `Visitor_approvedBy_fkey` FOREIGN KEY (`approvedBy`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Complaint` ADD CONSTRAINT `Complaint_residentId_fkey` FOREIGN KEY (`residentId`) REFERENCES `Resident`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Complaint` ADD CONSTRAINT `Complaint_assignedTo_fkey` FOREIGN KEY (`assignedTo`) REFERENCES `Staff`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_organizedBy_fkey` FOREIGN KEY (`organizedBy`) REFERENCES `CommitteeMember`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SocietyRule` ADD CONSTRAINT `SocietyRule_enforcedBy_fkey` FOREIGN KEY (`enforcedBy`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ParkingSlot` ADD CONSTRAINT `ParkingSlot_societyId_fkey` FOREIGN KEY (`societyId`) REFERENCES `Society`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ParkingSlot` ADD CONSTRAINT `ParkingSlot_flatId_fkey` FOREIGN KEY (`flatId`) REFERENCES `Flat`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceRequest` ADD CONSTRAINT `ServiceRequest_residentId_fkey` FOREIGN KEY (`residentId`) REFERENCES `Resident`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceRequest` ADD CONSTRAINT `ServiceRequest_assignedStaffId_fkey` FOREIGN KEY (`assignedStaffId`) REFERENCES `Staff`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmergencyAlert` ADD CONSTRAINT `EmergencyAlert_raisedBy_fkey` FOREIGN KEY (`raisedBy`) REFERENCES `Resident`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmergencyAlert` ADD CONSTRAINT `EmergencyAlert_resolvedBy_fkey` FOREIGN KEY (`resolvedBy`) REFERENCES `SecurityGuard`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VotingPoll` ADD CONSTRAINT `VotingPoll_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `CommitteeMember`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SocietyDocument` ADD CONSTRAINT `SocietyDocument_uploadedBy_fkey` FOREIGN KEY (`uploadedBy`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
