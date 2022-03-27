import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDTO } from './dto/createAdminDTO';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('/register')
  registerAdmin(@Body() createAdminDto: CreateAdminDTO) {
    return this.adminService.registerAdmin(createAdminDto);
  }
}
