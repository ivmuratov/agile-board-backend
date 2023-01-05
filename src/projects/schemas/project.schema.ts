import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { AgileTask } from 'src/agile-tasks/schemas/agile-task.schema';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  prefix: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  manager: string;

  /* @Prop()
  team: any[]; */

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AgileTask' }] })
  tasks: AgileTask[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
