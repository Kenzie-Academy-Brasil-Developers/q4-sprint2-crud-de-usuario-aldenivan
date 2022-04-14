import {MigrationInterface, QueryRunner} from "typeorm";

export class initialCommit1649947273012 implements MigrationInterface {
    name = 'initialCommit1649947273012'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createadOn" SET DEFAULT 'Thu Apr 14 2022 11:41:15 GMT-0300 (Brasilia Standard Time)'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updateadOn" SET DEFAULT 'Thu Apr 14 2022 11:41:15 GMT-0300 (Brasilia Standard Time)'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updateadOn" SET DEFAULT 'Thu Apr 14 2022 11:34:57 GMT-0300 (Brasilia Standard Time)'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createadOn" SET DEFAULT 'Thu Apr 14 2022 11:34:57 GMT-0300 (Brasilia Standard Time)'`);
    }

}
