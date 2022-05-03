import { Injectable } from '@nestjs/common';
import { BruhDto } from './dto';

@Injectable()
export class BruhService {
  hello() {
    return { msg: 'bruh' };
  }

  createHello(dto: BruhDto) {
    console.log(dto);
    return { msg: 'bruh' };
  }
}
