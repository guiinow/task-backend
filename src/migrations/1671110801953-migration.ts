import { MigrationInterface, QueryRunner } from 'typeorm';

export class migration1671110801953 implements MigrationInterface {
  name = 'migration1671110801953';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "task" ALTER COLUMN "active" SET DEFAULT true`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "task" ALTER COLUMN "active" DROP DEFAULT`,
    );
  }
}
