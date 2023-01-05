import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Project } from 'src/projects/schemas/project.schema';

export type AgileTaskDocument = AgileTask & Document;
export type TypeStatusTask = 'To do' | 'In progress' | 'In review' | 'Done';
export type TypeTask = 'Task' | 'Error';
export type PriorityTask = '0' | '1' | '2';

@Schema()
export class AgileTask {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  category: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  executor: string;

  @Prop({ required: true })
  createdDate: string;

  @Prop()
  updatedDate: string;

  @Prop()
  finishedDate: string;

  @Prop({
    required: true,
    enum: ['To do', 'In progress', 'In review', 'Done'],
    default: 'To do',
  })
  status: TypeStatusTask;

  @Prop({ required: true, enum: ['Task', 'Error'] })
  type: TypeTask;

  @Prop({ required: true, enum: ['0', '1', '2'] })
  priority: PriorityTask;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Project' })
  project: Project;
}

export const AgileTaskSchema = SchemaFactory.createForClass(AgileTask);
