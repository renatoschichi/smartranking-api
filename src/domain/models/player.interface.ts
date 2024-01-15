import { Sports } from "./sports.interface";

export interface Player {
  readonly _id: number;
  readonly mobilePhone: string;
  readonly email: string;
  name: string;
  ranking: number;
  sport: Sports;
  team: string;
}