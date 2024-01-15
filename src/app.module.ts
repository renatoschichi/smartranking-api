import { Module } from '@nestjs/common';
import { PlayersModule } from './domain/players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PlayersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'smartrankingdb',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}