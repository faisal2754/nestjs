import { Body, Controller, Get, Post } from '@nestjs/common';
import { BruhService } from './bruh.service';
import { BruhDto } from './dto';

@Controller('bruh')
export class BruhController {
  constructor(private bruhService: BruhService) {}

  @Get()
  hello() {
    return this.bruhService.hello();
  }

  @Post()
  createHello(@Body() dto: BruhDto) {
    this.bruhService.createHello(dto);
  }
}
