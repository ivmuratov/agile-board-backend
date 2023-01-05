import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Project, ProjectDocument } from 'src/projects/schemas/project.schema';
import { CreateAgileTaskDto } from './dto/create-agile-task.dto';
import { UpdateAgileTaskDto } from './dto/update-agile-task.dto';
import { AgileTask, AgileTaskDocument } from './schemas/agile-task.schema';

@Injectable()
export class AgileTasksService {
  private readonly logger = new Logger(AgileTasksService.name);

  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
    @InjectModel(AgileTask.name) private agileTaskModel: Model<AgileTaskDocument>,
  ) {}

  async getAll(projectId: ObjectId): Promise<AgileTask[]> {
    const agileTasks = await this.agileTaskModel.find({ project: projectId });
    this.logger.log('get all');
    return agileTasks;
  }

  async getById(projectId: ObjectId, id: ObjectId): Promise<AgileTask> {
    const agileTask = await this.agileTaskModel.findOne({ _id: id, project: projectId });
    this.logger.log('get by id');
    return agileTask;
  }

  async create(agileTaskDto: CreateAgileTaskDto, projectId: ObjectId): Promise<AgileTask> {
    const project = await this.projectModel.findById(projectId);
    const agileTask = await this.agileTaskModel.create({
      ...agileTaskDto,
      createdDate: new Date().toLocaleString(),
      project: project._id,
    });
    project.tasks.push(agileTask._id);
    await project.save();
    this.logger.log('create');
    return agileTask;
  }

  async update(
    agileTaskDto: UpdateAgileTaskDto,
    projectId: ObjectId,
    id: ObjectId,
  ): Promise<ObjectId> {
    const updated = await this.agileTaskModel.findOneAndUpdate(
      { _id: id, project: projectId },
      agileTaskDto,
    );
    this.logger.log('update');
    return updated._id;
  }

  async delete(projectId: ObjectId, id: ObjectId): Promise<ObjectId> {
    const project = await this.projectModel.findById(projectId);
    const deleted = await this.agileTaskModel.findOneAndDelete({ _id: id, project: projectId });
    project.tasks = project.tasks.filter(value => `${value}` !== `${deleted._id}`);
    await project.save();
    this.logger.log('delete');
    return deleted._id;
  }
}
