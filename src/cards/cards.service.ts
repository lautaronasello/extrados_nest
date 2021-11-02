/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CardsInterface } from 'src/interfaces/card.interface';

@Injectable()
export class CardsService {
  private cards: CardsInterface[] = [];

  create(card: CardsInterface) {
    this.cards.push(card);
  }

  findAll(): CardsInterface[] {
    return this.cards;
  }

  deleteAll() {
    this.cards = [];
  }
}
