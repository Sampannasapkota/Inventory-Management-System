-- AlterTable
ALTER TABLE "items" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "price" SET DEFAULT 0,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "item_organizations" (
    "item_id" INTEGER NOT NULL,
    "organization_id" INTEGER NOT NULL,

    CONSTRAINT "item_organizations_pkey" PRIMARY KEY ("item_id","organization_id")
);

-- AddForeignKey
ALTER TABLE "item_organizations" ADD CONSTRAINT "item_organizations_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_organizations" ADD CONSTRAINT "item_organizations_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
