-- CreateTable
CREATE TABLE "public"."SysUsers" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "groupId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "SysUsers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SysGroups" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    CONSTRAINT "SysGroups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SysProfiles" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(50),
    "lastName" VARCHAR(50),
    "phone" VARCHAR(15),
    "emailSecondary" VARCHAR(50),
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SysProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SysMenuGroups" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "menuId" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "orderNumber" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "SysMenuGroups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SysMenus" (
    "id" SERIAL NOT NULL,
    "parentId" INTEGER,
    "description" VARCHAR(80),
    "name" VARCHAR(50) NOT NULL,
    "label" VARCHAR(50) NOT NULL,
    "path" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "deletedBy" TEXT,

    CONSTRAINT "SysMenus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SysAccessLevels" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "description" VARCHAR(80),

    CONSTRAINT "SysAccessLevels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SysMenuAccessLevels" (
    "id" SERIAL NOT NULL,
    "menuId" INTEGER NOT NULL,
    "accessLevelId" INTEGER NOT NULL,

    CONSTRAINT "SysMenuAccessLevels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MenuGroupAccess" (
    "id" SERIAL NOT NULL,
    "menuGroupId" INTEGER NOT NULL,
    "accessLevelId" INTEGER NOT NULL,

    CONSTRAINT "MenuGroupAccess_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SysUsers_uuid_key" ON "public"."SysUsers"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "SysUsers_email_key" ON "public"."SysUsers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SysGroups_name_key" ON "public"."SysGroups"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SysProfiles_userId_key" ON "public"."SysProfiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SysMenuGroups_groupId_menuId_key" ON "public"."SysMenuGroups"("groupId", "menuId");

-- CreateIndex
CREATE INDEX "SysAccessLevels_code_idx" ON "public"."SysAccessLevels"("code");

-- CreateIndex
CREATE UNIQUE INDEX "SysMenuAccessLevels_menuId_accessLevelId_key" ON "public"."SysMenuAccessLevels"("menuId", "accessLevelId");

-- CreateIndex
CREATE UNIQUE INDEX "MenuGroupAccess_menuGroupId_accessLevelId_key" ON "public"."MenuGroupAccess"("menuGroupId", "accessLevelId");

-- AddForeignKey
ALTER TABLE "public"."SysUsers" ADD CONSTRAINT "SysUsers_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "public"."SysGroups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SysProfiles" ADD CONSTRAINT "SysProfiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."SysUsers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SysMenuGroups" ADD CONSTRAINT "SysMenuGroups_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "public"."SysGroups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SysMenuGroups" ADD CONSTRAINT "SysMenuGroups_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "public"."SysMenus"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SysMenus" ADD CONSTRAINT "SysMenus_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."SysMenus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SysMenuAccessLevels" ADD CONSTRAINT "SysMenuAccessLevels_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "public"."SysMenus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SysMenuAccessLevels" ADD CONSTRAINT "SysMenuAccessLevels_accessLevelId_fkey" FOREIGN KEY ("accessLevelId") REFERENCES "public"."SysAccessLevels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MenuGroupAccess" ADD CONSTRAINT "MenuGroupAccess_menuGroupId_fkey" FOREIGN KEY ("menuGroupId") REFERENCES "public"."SysMenuGroups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MenuGroupAccess" ADD CONSTRAINT "MenuGroupAccess_accessLevelId_fkey" FOREIGN KEY ("accessLevelId") REFERENCES "public"."SysAccessLevels"("id") ON DELETE CASCADE ON UPDATE CASCADE;
