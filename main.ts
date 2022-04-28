import {Book} from "./Book";
let book1 = new Book("Rung Nauy","unknow", true);
let book2 = new Book("Co giao Thao", "someone else", false)

let books: Book[] = [];
books.push(book1,book2);

for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = book.title + " by " + book.author;
    if (book.alreadyRead) {
        console.log("You already read this book " + bookInfo);
    } else {
        console.log("you still need to read this " + bookInfo);
    }
}
