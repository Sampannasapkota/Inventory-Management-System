/*
  Warnings:

  - The primary key for the `item_organizations` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "item_organizations" DROP CONSTRAINT "item_organizations_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "item_organizations_pkey" PRIMARY KEY ("id");
