import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayersService } from './players.service';
import { Player } from './interfaces/player.interface';

@Controller('api/v1/players')
export class PlayersController {

    constructor(private readonly playersService: PlayersService) {}

    @Post()
    async createOrUpdatePlayer(
        @Body() createPlayerDto: CreatePlayerDto) {
        await this.playersService.createOrUpdatePlayer(createPlayerDto);
    }

    @Get()
    async searchPlayers(@Query('email') email: string): Promise<Player[] | Player > {
        if (email) {
            return await this.playersService.searchPlayersByEmail(email);
        } else {
            return await this.playersService.searchAllPlayers();
        }
    }

    @Delete()
    async deletePlayer(@Query('email') email: string): Promise<void> {
        this.playersService.deletePlayer(email);
    }
}
