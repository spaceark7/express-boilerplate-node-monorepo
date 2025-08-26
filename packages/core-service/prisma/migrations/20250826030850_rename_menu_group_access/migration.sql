/*
  Warnings:

  - You are about to drop the `MenuGroupAccess` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."MenuGroupAccess" DROP CONSTRAINT "MenuGroupAccess_accessLevelId_fkey";

-- DropForeignKey
ALTER TABLE "public"."MenuGroupAccess" DROP CONSTRAINT "MenuGroupAccess_menuGroupId_fkey";

-- DropTable
DROP TABLE "public"."MenuGroupAccess";

-- CreateTable
CREATE TABLE "public"."SysMenuGroupAccess" (
    "id" SERIAL NOT NULL,
    "menuGroupId" INTEGER NOT NULL,
    "accessLevelId" INTEGER NOT NULL,

    CONSTRAINT "SysMenuGroupAccess_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SysMenuGroupAccess_menuGroupId_accessLevelId_key" ON "public"."SysMenuGroupAccess"("menuGroupId", "accessLevelId");

-- AddForeignKey
ALTER TABLE "public"."SysMenuGroupAccess" ADD CONSTRAINT "SysMenuGroupAccess_menuGroupId_fkey" FOREIGN KEY ("menuGroupId") REFERENCES "public"."SysMenuGroups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SysMenuGroupAccess" ADD CONSTRAINT "SysMenuGroupAccess_accessLevelId_fkey" FOREIGN KEY ("accessLevelId") REFERENCES "public"."SysAccessLevels"("id") ON DELETE CASCADE ON UPDATE CASCADE;
