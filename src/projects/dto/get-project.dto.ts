export class GetProjectDto {
  readonly id: string;
  readonly name: string;
  readonly prefix: string;
  readonly description: string;
  readonly manager: string;
  readonly countTasks: number;
}
