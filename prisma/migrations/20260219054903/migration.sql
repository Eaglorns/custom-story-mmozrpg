/*
  Warnings:

  - You are about to drop the column `general_looting` on the `Hero` table. All the data in the column will be lost.
  - You are about to drop the column `stat_per` on the `Hero` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hero" DROP COLUMN "general_looting",
DROP COLUMN "stat_per",
ADD COLUMN     "combat_two_handed" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "general_lore" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "general_medicine" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "general_scavenging" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "general_trading" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "par_focus" DOUBLE PRECISION NOT NULL DEFAULT 100.0,
ADD COLUMN     "par_stamina" DOUBLE PRECISION NOT NULL DEFAULT 100.0,
ADD COLUMN     "stat_cha" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "stat_will" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "stat_str" SET DEFAULT 0,
ALTER COLUMN "stat_end" SET DEFAULT 0,
ALTER COLUMN "stat_agi" SET DEFAULT 0,
ALTER COLUMN "stat_int" SET DEFAULT 0,
ALTER COLUMN "stat_spi" SET DEFAULT 0;
