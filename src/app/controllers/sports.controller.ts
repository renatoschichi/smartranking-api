import { Controller, Get } from '@nestjs/common';
import { SportsService } from '../../domain/services/sports.service';
import { Sports } from '../../domain/models/sports.interface';

@Controller('api/v1/sports')
export class SportsController {

  constructor(private readonly sportsService: SportsService) {}

  @Get()
  getAllSports(): Sports[] {
    return this.sportsService.getAllSports();
  }
}