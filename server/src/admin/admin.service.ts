import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from './interfaces/admin.interface';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel('Admin') private readonly adminModel: Model<Admin>,
  ) {}

  async registerAdmin(body: Admin) {
    try {
      return await new this.adminModel(body).save();
    } catch (error) {
      return error;
    }
  }
}
