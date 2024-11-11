import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { CandidateModule } from './candidate/candidate.module';
import { TrainerModule } from './trainer/trainer.module';
import { CompanyModule } from './company/company.module';
import { TrainingModule } from './training/training.module';
import { TestEvaluationModule } from './test-evaluation/test-evaluation.module';


@Module({
  imports: [UsersModule, DatabaseModule, CandidateModule, TrainerModule, CompanyModule, TrainingModule, TestEvaluationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
