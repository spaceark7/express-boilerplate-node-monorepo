/*
  Warnings:

  - You are about to drop the column `orderNumber` on the `SysMenuGroups` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."SysMenuGroups" DROP COLUMN "orderNumber";

-- AlterTable
ALTER TABLE "public"."SysMenus" ADD COLUMN     "orderNumber" INTEGER;
