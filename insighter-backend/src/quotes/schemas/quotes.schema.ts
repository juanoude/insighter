import * as mongoose from 'mongoose';

export const QuoteSchema = new mongoose.Schema({
  quote: {
    type: String,
    required: [true, 'Please enter the quote text']
  },
  author: {
    type: String,
    required: [true, 'Please enter the author']
  }
});

export interface Quote extends mongoose.Document {
  quote: string;
  author: string;
}
