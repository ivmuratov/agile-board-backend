import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('/users')
export class UserController {
  login() {
    return 'login';
  }

  registration() {
    return 'registration';
  }

  @Get()
  getAll() {
    return 'getAll';
  }

  delete() {
    return 'delete';
  }

  getOne() {
    return 'getOne';
  }
}
