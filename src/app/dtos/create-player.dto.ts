import { Sports } from "src/domain/models/sports.interface";

export interface CreatePlayerDto {
  readonly name: string;
  readonly email: string;
  readonly mobilePhone: string;
  readonly ranking: number;
  readonly sport: Sports;
  readonly team: string;
}