import { Module } from '@nestjs/common';
import { DbConfigModule } from './interfaces/db-config/db-config.module';

@Module({
  imports: [DbConfigModule]
})
export class DatabaseModule {}
