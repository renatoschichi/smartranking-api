import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from '../../app/dtos/create-player.dto';
import { Player } from '../models/player.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PlayersService {

    private players: Player[] = []; 

    private readonly logger = new Logger(PlayersService.name);

    async createOrUpdatePlayer(createPlayerDto: CreatePlayerDto): Promise<void> {
        const { email } = createPlayerDto;
        const playerFounded = this.players.find(player => player.email === email);

        if (playerFounded) {
            await this.update(playerFounded, createPlayerDto);
        } else {
            await this.create(createPlayerDto);
        }
    }

    async searchAllPlayers(): Promise<Player[]> {
        return await this.players;
    }

    async searchPlayersByEmail(email: string): Promise<Player> {
        const playerFounded = this.players.find(player => player.email === email);
        if (!playerFounded) {
            throw new NotFoundException(`Player with email ${email} was not found.`);
        } 
        return playerFounded;
    }

    async deletePlayer(email): Promise<void> {
        const playerFounded = this.players.find(player => player.email === email);
        this.players = this.players.filter(player => player.email !== playerFounded.email);
    }

    private create(createPlayerDto: CreatePlayerDto): void {
        const { name, mobilePhone, email, ranking, sport, team } = createPlayerDto;
        const player: Player = {
            _id: uuid(),
            name,
            mobilePhone,
            email,
            ranking,
            sport,
            team
        };
        this.logger.log(`createPlayerDto: ${JSON.stringify(player)}`);
        this.players.push(player);
    }

    private update(playerFounded: Player, createPlayerDto: CreatePlayerDto): void {
        const { name } = createPlayerDto;
        playerFounded.name = name;
    }
}
