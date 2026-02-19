-- CreateEnum
CREATE TYPE "EquipmentItemSlot" AS ENUM ('head', 'body', 'bracers', 'ring1', 'ring2', 'legs', 'boots', 'hands', 'shield', 'backpack');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('admin', 'moderator', 'vip', 'user');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'user';

-- CreateTable
CREATE TABLE "Hero" (
    "id" SERIAL NOT NULL,
    "money" DECIMAL NOT NULL DEFAULT 0,
    "container_slots" SMALLINT NOT NULL DEFAULT 4,
    "par_hp" DECIMAL NOT NULL DEFAULT 100.0,
    "par_mp" DECIMAL NOT NULL DEFAULT 30.0,
    "par_sat" DOUBLE PRECISION NOT NULL DEFAULT 100.0,
    "stat_str" INTEGER NOT NULL DEFAULT 10,
    "stat_end" INTEGER NOT NULL DEFAULT 10,
    "stat_per" INTEGER NOT NULL DEFAULT 10,
    "stat_agi" INTEGER NOT NULL DEFAULT 10,
    "stat_int" INTEGER NOT NULL DEFAULT 10,
    "stat_spi" INTEGER NOT NULL DEFAULT 10,
    "stat_luck" INTEGER NOT NULL DEFAULT 0,
    "combat_sword" INTEGER NOT NULL DEFAULT 0,
    "combat_dagger" INTEGER NOT NULL DEFAULT 0,
    "combat_bow" INTEGER NOT NULL DEFAULT 0,
    "combat_axe" INTEGER NOT NULL DEFAULT 0,
    "combat_staff" INTEGER NOT NULL DEFAULT 0,
    "combat_shield" INTEGER NOT NULL DEFAULT 0,
    "combat_unarmed" INTEGER NOT NULL DEFAULT 0,
    "combat_dual_wield" INTEGER NOT NULL DEFAULT 0,
    "general_looting" INTEGER NOT NULL DEFAULT 0,
    "general_gathering" INTEGER NOT NULL DEFAULT 0,
    "general_stealth" INTEGER NOT NULL DEFAULT 0,
    "general_survival" INTEGER NOT NULL DEFAULT 0,
    "general_taming" INTEGER NOT NULL DEFAULT 0,
    "general_traps" INTEGER NOT NULL DEFAULT 0,
    "general_persuasion" INTEGER NOT NULL DEFAULT 0,
    "general_intimidation" INTEGER NOT NULL DEFAULT 0,
    "prof_herbalist" INTEGER NOT NULL DEFAULT 0,
    "prof_alchemist" INTEGER NOT NULL DEFAULT 0,
    "prof_blacksmith" INTEGER NOT NULL DEFAULT 0,
    "prof_cartographer" INTEGER NOT NULL DEFAULT 0,
    "prof_jeweler" INTEGER NOT NULL DEFAULT 0,
    "prof_tanner" INTEGER NOT NULL DEFAULT 0,
    "prof_cook" INTEGER NOT NULL DEFAULT 0,
    "prof_enchanter" INTEGER NOT NULL DEFAULT 0,
    "prof_miner" INTEGER NOT NULL DEFAULT 0,
    "prof_scribe" INTEGER NOT NULL DEFAULT 0,
    "prof_merchant" INTEGER NOT NULL DEFAULT 0,
    "prof_fisher" INTEGER NOT NULL DEFAULT 0,
    "prof_architect" INTEGER NOT NULL DEFAULT 0,
    "prof_runemaster" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EquipmentItem" (
    "id" BIGSERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "slot" "EquipmentItemSlot" NOT NULL,

    CONSTRAINT "EquipmentItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContainerItem" (
    "id" BIGSERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "ContainerItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EquipmentItem_user_id_key" ON "EquipmentItem"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "ContainerItem_user_id_key" ON "ContainerItem"("user_id");

-- AddForeignKey
ALTER TABLE "EquipmentItem" ADD CONSTRAINT "EquipmentItem_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContainerItem" ADD CONSTRAINT "ContainerItem_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Hero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
