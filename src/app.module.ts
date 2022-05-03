import { Module } from '@nestjs/common';
import { BruhModule } from './bruh/bruh.module';

@Module({
  imports: [BruhModule],
})
export class AppModule {}
