import { Module } from '@nestjs/common';
import { PlayersController } from '../../app/controllers/players.controller';
import { PlayersService } from '../services/players.service';
import { SportsController } from '../../app/controllers/sports.controller';
import { SportsService } from '../services/sports.service';

@Module({
  controllers: [
    PlayersController,
    SportsController
  ],
  providers: [
    PlayersService,
    SportsService
  ]
})

export class PlayersModule {}