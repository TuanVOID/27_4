import {Book} from "./Book";
import {BookManager} from "./BookManager";

let book1 = new Book("B01","Java")
let book2 = new Book("B02","PHP");
let book3 = new Book("B03","Typescript");

let bookManager = new BookManager();

bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
// bookManager.update("B01", "Co Giao Thao")
// bookManager.update("B04", "code learn")
// bookManager.delete("B04")

console.log(bookManager.findbook("B03"));
console.log(bookManager.getList());

