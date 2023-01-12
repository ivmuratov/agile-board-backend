import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { GetProjectDto } from './dto/get-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsService } from './projects.service';
import { Project } from './schemas/project.schema';

@Controller('/api/projects')
export class ProjectsController {
  constructor(private readonly projectService: ProjectsService) {}

  @Get()
  getAll(): Promise<GetProjectDto[]> {
    return this.projectService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: ObjectId): Promise<GetProjectDto> {
    return this.projectService.getById(id);
  }

  @Post()
  create(@Body() projectDto: CreateProjectDto): Promise<Project> {
    return this.projectService.create(projectDto);
  }

  @Put(':id')
  update(@Body() projectDto: UpdateProjectDto, @Param('id') id: ObjectId): Promise<ObjectId> {
    return this.projectService.update(projectDto, id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId): Promise<ObjectId> {
    return this.projectService.delete(id);
  }
}
