/*
  Warnings:

  - A unique constraint covering the columns `[code,corporate_name]` on the table `tb_companies` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "tb_companies_corporate_name_key";

-- DropIndex
DROP INDEX "tb_companies_code_key";

-- CreateIndex
CREATE UNIQUE INDEX "tb_companies_code_corporate_name_key" ON "tb_companies"("code", "corporate_name");
