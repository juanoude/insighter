import { Model } from 'mongoose';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { Quote } from './schemas/quotes.schema';
export declare class QuotesService {
    private quoteModel;
    constructor(quoteModel: Model<Quote>);
    getQuotes(): Promise<Quote[]>;
    getQuote(id: string): Promise<Quote>;
    createQuote(quoteData: CreateQuoteDto): Promise<any>;
    updateQuote(id: string, updateData: Partial<CreateQuoteDto>): Promise<Quote>;
    deleteQuote(id: string): Promise<void>;
}
