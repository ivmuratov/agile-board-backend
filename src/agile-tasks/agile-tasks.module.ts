import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from 'src/projects/schemas/project.schema';
import { AgileTasksController } from './agile-tasks.controller';
import { AgileTasksService } from './agile-tasks.service';
import { AgileTask, AgileTaskSchema } from './schemas/agile-task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AgileTask.name, schema: AgileTaskSchema },
      { name: Project.name, schema: ProjectSchema },
    ]),
  ],
  controllers: [AgileTasksController],
  providers: [AgileTasksService],
})
export class AgileTasksModule {}
