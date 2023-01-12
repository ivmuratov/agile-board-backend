import { GetProjectDto } from 'src/projects/dto/get-project.dto';
import { ProjectDocument } from 'src/projects/schemas/project.schema';

export const toGetProjectDto = ({
  _id,
  name,
  prefix,
  description,
  manager,
  tasks,
}: ProjectDocument): GetProjectDto => ({
  id: _id,
  name,
  prefix,
  description,
  manager,
  countTasks: tasks.length,
});
