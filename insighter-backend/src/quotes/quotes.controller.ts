import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuotesService } from './quotes.service';
import { ApiTags } from '@nestjs/swagger';
import { Quote } from './schemas/quotes.schema';

@ApiTags('quotes')
@Controller('quotes')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  @Get()
  async getQuotes(): Promise<Quote[]> {
    const quotes = await this.quotesService.getQuotes();
    return quotes;
  }

  @Get(':id')
  getQuote(@Param('id') id: string): any {
    return this.quotesService.getQuote(id);
  }

  @Post()
  async postQuote(@Body() quote: CreateQuoteDto): Promise<any> {
    try {
      return this.quotesService.createQuote(quote);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  @Put(':id')
  async updateQuote(
    @Param('id') id: string,
    @Body() quoteDto: Partial<CreateQuoteDto>
  ): Promise<Quote> {
    const quote = await this.quotesService.updateQuote(id, quoteDto);
    return quote;
  }

  @Delete(':id')
  async destroyQuote(@Param('id') id: string): Promise<void> {
    return this.quotesService.deleteQuote(id);
  }
}
