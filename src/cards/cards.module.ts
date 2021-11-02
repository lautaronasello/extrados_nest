import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';

@Module({})
@Module({
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
