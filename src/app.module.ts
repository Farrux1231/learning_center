import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CenterModule } from './center/center.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { ReadingModule } from './reading/reading.module';
import { LestiningModule } from './lestining/lestining.module';
import { WritingModule } from './writing/writing.module';
import { SpeakingModule } from './speaking/speaking.module';
import { ExamModule } from './exam/exam.module';
import { ResultModule } from './result/result.module';
import { GroupModule } from './group/group.module';
import { AnswerModule } from './answer/answer.module';

@Module({
  imports: [PrismaModule, CenterModule, TeacherModule, StudentModule, ReadingModule, LestiningModule, WritingModule, SpeakingModule, ExamModule, ResultModule, GroupModule, AnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
