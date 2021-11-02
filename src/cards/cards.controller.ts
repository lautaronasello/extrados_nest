import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CardsDto } from 'src/dto/cards.dto';
import { CardsInterface } from 'src/interfaces/card.interface';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Post()
  async create(@Body() card: CardsDto) {
    try {
      this.cardsService.create(card);
      return 'done';
    } catch (error) {
      return 'error';
    }
  }

  @Get()
  async getCards(): Promise<CardsInterface[]> {
    return this.cardsService.findAll();
  }

  @Delete()
  async deleteAllCards() {
    try {
      this.cardsService.deleteAll();
    } catch (e) {
      return e;
    }
  }
}
