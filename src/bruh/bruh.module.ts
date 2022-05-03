import { Module } from '@nestjs/common';
import { BruhService } from './bruh.service';
import { BruhController } from './bruh.controller';

@Module({
  providers: [BruhService],
  controllers: [BruhController],
})
export class BruhModule {}
