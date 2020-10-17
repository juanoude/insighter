import * as mongoose from 'mongoose';
export declare const QuoteSchema: mongoose.Schema<any>;
export interface Quote extends mongoose.Document {
    quote: string;
    author: string;
}
