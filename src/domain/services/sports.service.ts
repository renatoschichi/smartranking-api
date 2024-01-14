import { Injectable } from '@nestjs/common';
import { Sports } from '../models/sports.interface';

@Injectable()
export class SportsService {

  getAllSports(): Sports[] {
    const sportsList = [
      { id: 1, name: 'Swimming' },
      { id: 2, name: 'Soccer' },
      { id: 3, name: 'Tennis' },
      { id: 4, name: 'Golf' },
      { id: 5, name: 'Basketball' },
      { id: 6, name: 'Volleyball' },
      { id: 7, name: 'Muay Thai' },
      { id: 8, name: 'Jiu Jitsu' },
      { id: 9, name: 'Karate' },
      { id: 10, name: 'Cycling' },
    ];

    return sportsList;
  }
}