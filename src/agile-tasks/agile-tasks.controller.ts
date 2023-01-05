import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { AgileTasksService } from './agile-tasks.service';
import { CreateAgileTaskDto } from './dto/create-agile-task.dto';
import { UpdateAgileTaskDto } from './dto/update-agile-task.dto';
import { AgileTask } from './schemas/agile-task.schema';

@Controller('/api/projects/:projectId/tasks')
export class AgileTasksController {
  constructor(private readonly service: AgileTasksService) {}

  @Get()
  getAll(@Param('projectId') projectId: ObjectId): Promise<AgileTask[]> {
    return this.service.getAll(projectId);
  }

  @Post()
  create(
    @Body() agileTaskDto: CreateAgileTaskDto,
    @Param('projectId') projectId: ObjectId,
  ): Promise<AgileTask> {
    return this.service.create(agileTaskDto, projectId);
  }

  @Get(':id')
  getOne(@Param('projectId') projectId: ObjectId, @Param('id') id: ObjectId): Promise<AgileTask> {
    return this.service.getById(projectId, id);
  }

  @Put(':id')
  update(
    @Body() agileTaskDto: UpdateAgileTaskDto,
    @Param('projectId') projectId: ObjectId,
    @Param('id') id: ObjectId,
  ): Promise<ObjectId> {
    return this.service.update(agileTaskDto, projectId, id);
  }

  @Delete(':id')
  delete(@Param('projectId') projectId: ObjectId, @Param('id') id: ObjectId): Promise<ObjectId> {
    return this.service.delete(projectId, id);
  }
}
