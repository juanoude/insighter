import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuotesService } from './quotes.service';
import { Quote } from './schemas/quotes.schema';
export declare class QuotesController {
    private quotesService;
    constructor(quotesService: QuotesService);
    getQuotes(): Promise<Quote[]>;
    getQuote(id: string): any;
    postQuote(quote: CreateQuoteDto): Promise<any>;
    updateQuote(id: string, quoteDto: Partial<CreateQuoteDto>): Promise<Quote>;
    destroyQuote(id: string): Promise<void>;
}
