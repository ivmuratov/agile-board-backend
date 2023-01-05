import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { Project, ProjectSchema } from './schemas/project.schema';
import { AgileTask, AgileTaskSchema } from 'src/agile-tasks/schemas/agile-task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AgileTask.name, schema: AgileTaskSchema },
      { name: Project.name, schema: ProjectSchema },
    ]),
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
