import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AgileTasksModule } from './agile-tasks/agile-tasks.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    AgileTasksModule,
    ProjectsModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.pft3ck4.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
