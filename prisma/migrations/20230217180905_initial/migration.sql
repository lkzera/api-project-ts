-- CreateTable
CREATE TABLE "tb_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "group_id" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "tb_users_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "tb_groups" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tb_companies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "corporate_name" TEXT NOT NULL,
    "fantasy_name" TEXT,
    "itr" TEXT,
    "registration_number" TEXT,
    "address" TEXT,
    "district" TEXT,
    "state" TEXT,
    "zip_code" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "tb_users_companies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "company_id" INTEGER NOT NULL,
    CONSTRAINT "tb_users_companies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tb_users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tb_users_companies_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "tb_companies" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tb_groups" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_users_email_key" ON "tb_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tb_companies_code_key" ON "tb_companies"("code");

-- CreateIndex
CREATE UNIQUE INDEX "tb_companies_corporate_name_key" ON "tb_companies"("corporate_name");
