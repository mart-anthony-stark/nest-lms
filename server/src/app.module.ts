import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
