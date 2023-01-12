import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { AgileTask, AgileTaskDocument } from 'src/agile-tasks/schemas/agile-task.schema';
import { toGetProjectDto } from 'src/utils/dto/toGetProjectDto';
import { CreateProjectDto } from './dto/create-project.dto';
import { GetProjectDto } from './dto/get-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project, ProjectDocument } from './schemas/project.schema';

@Injectable()
export class ProjectsService {
  private readonly logger = new Logger(ProjectsService.name);

  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
    @InjectModel(AgileTask.name) private agileTaskModel: Model<AgileTaskDocument>,
  ) {}

  async getAll(): Promise<GetProjectDto[]> {
    const projects = await this.projectModel.find();
    this.logger.log('get all');
    return projects.map(project => toGetProjectDto(project));
  }

  async getById(id: ObjectId): Promise<GetProjectDto> {
    const project = await this.projectModel.findById(id);
    this.logger.log(`get by id - ${project._id}`);
    return toGetProjectDto(project);
  }

  async create(projectDto: CreateProjectDto): Promise<Project> {
    const created = await this.projectModel.create(projectDto);
    this.logger.log('create');
    return created;
  }

  async update(projectDto: UpdateProjectDto, id: ObjectId): Promise<ObjectId> {
    const updated = await this.projectModel.findByIdAndUpdate(id, projectDto);
    this.logger.log('update');
    return updated._id;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    await this.agileTaskModel.deleteMany({ project: id });
    const deleted = await this.projectModel.findByIdAndDelete(id);
    this.logger.log('delete');
    return deleted._id;
  }
}
