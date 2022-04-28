"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var BookManager_1 = require("./BookManager");
var book1 = new Book_1.Book("B01", "Java");
var book2 = new Book_1.Book("B02", "PHP");
var book3 = new Book_1.Book("B03", "Typescript");
var bookManager = new BookManager_1.BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
// bookManager.update("B01", "Co Giao Thao")
// bookManager.update("B04", "code learn")
// bookManager.delete("B04")
console.log(bookManager.findbook("B03"));
console.log(bookManager.getList());
