import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('parser')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  public async getPdf(@Query('link') link: string) {
    console.log(link);
  }
}
