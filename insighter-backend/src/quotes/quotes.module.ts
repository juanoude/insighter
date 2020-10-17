import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { QuoteSchema } from './schemas/quotes.schema';

import { QuotesController } from './quotes.controller';
import { QuotesService } from './quotes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Quote', schema: QuoteSchema }])
  ],
  controllers: [QuotesController],
  providers: [QuotesService]
})
export class QuotesModule {}
