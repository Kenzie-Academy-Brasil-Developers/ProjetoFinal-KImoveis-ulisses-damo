import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1688653680906 implements MigrationInterface {
    name = 'InitialMigration1688653680906'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_abf14fbae3ff6c176aa202b848e"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "REL_abf14fbae3ff6c176aa202b848"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "realEstateId"`);
        await queryRunner.query(`ALTER TABLE "realEstate" ADD "addressId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstate" ADD CONSTRAINT "UQ_8137b7f715382ad34dc87367d21" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "realEstate" ALTER COLUMN "value" TYPE numeric(12,2)`);
        await queryRunner.query(`ALTER TABLE "realEstate" ADD CONSTRAINT "FK_8137b7f715382ad34dc87367d21" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstate" DROP CONSTRAINT "FK_8137b7f715382ad34dc87367d21"`);
        await queryRunner.query(`ALTER TABLE "realEstate" ALTER COLUMN "value" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "realEstate" DROP CONSTRAINT "UQ_8137b7f715382ad34dc87367d21"`);
        await queryRunner.query(`ALTER TABLE "realEstate" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "realEstateId" integer`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "REL_abf14fbae3ff6c176aa202b848" UNIQUE ("realEstateId")`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_abf14fbae3ff6c176aa202b848e" FOREIGN KEY ("realEstateId") REFERENCES "realEstate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
