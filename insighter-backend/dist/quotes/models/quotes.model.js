"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteSchema = void 0;
const mongoose = require("mongoose");
exports.QuoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});
//# sourceMappingURL=quotes.model.js.map