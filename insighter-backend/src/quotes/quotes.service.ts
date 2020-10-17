import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateQuoteDto } from './dto/create-quote.dto';
import { Quote } from './schemas/quotes.schema';

@Injectable()
export class QuotesService {
  constructor(@InjectModel('Quote') private quoteModel: Model<Quote>) {}

  async getQuotes(): Promise<Quote[]> {
    const quotes = await this.quoteModel.find().exec();
    return quotes;
  }

  async getQuote(id: string): Promise<Quote> {
    try {
      const quote = await this.quoteModel.findById(id).exec();

      return quote;
    } catch (err) {
      throw new HttpException('Quote not found', HttpStatus.NOT_FOUND);
    }
  }

  async createQuote(quoteData: CreateQuoteDto): Promise<any> {
    const quote = new this.quoteModel(quoteData);
    return quote.save();
  }

  async updateQuote(
    id: string,
    updateData: Partial<CreateQuoteDto>
  ): Promise<Quote> {
    const updatedQuote = await this.quoteModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true
      }
    );

    return updatedQuote;
  }

  async deleteQuote(id: string): Promise<void> {
    await this.quoteModel.findByIdAndDelete(id);
  }
}
