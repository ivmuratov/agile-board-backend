import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async login() {
    return 'login';
  }

  async registration() {
    return 'registration';
  }

  async getAll() {
    return 'getAll';
  }

  async delete() {
    return 'delete';
  }

  async getOne() {
    return 'getOne';
  }
}
