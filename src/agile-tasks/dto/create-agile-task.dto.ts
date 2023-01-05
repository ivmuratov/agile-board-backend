import { PriorityTask, TypeStatusTask, TypeTask } from '../schemas/agile-task.schema';

export class CreateAgileTaskDto {
  readonly name: string;
  readonly description: string;
  readonly category: string;
  readonly author: string;
  readonly executor: string;
  readonly status: TypeStatusTask;
  readonly type: TypeTask;
  readonly priority: PriorityTask;
}
