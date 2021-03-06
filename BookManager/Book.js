"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(id, name) {
        this.ID = id;
        this.name = name;
    }
    Book.prototype.getName = function () {
        return this.name;
    };
    Book.prototype.setName = function (name) {
        this.name = name;
    };
    Book.prototype.getID = function () {
        return this.ID;
    };
    return Book;
}());
exports.Book = Book;
