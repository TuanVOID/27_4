"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var book1 = new Book_1.Book("Rung Nauy", "unknow", true);
var book2 = new Book_1.Book("Co giao Thao", "someone else", false);
var books = [];
books.push(book1, book2);
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + " by " + book.author;
    if (book.alreadyRead) {
        console.log("You already read this book " + bookInfo);
    }
    else {
        console.log("you still need to read this " + bookInfo);
    }
}
