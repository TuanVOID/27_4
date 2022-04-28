import {Book} from "./Book";

export class BookManager {
    books: Book[] = [];

    constructor(){}

    add( book: Book) {
            this.books.push(book)
        }

    getList() : Book[] {
        return this.books;
    }


    delete(ID:string):void {
        let indexBookDelete = this.findbook(ID);
        if (indexBookDelete != -1)  {
            this.books.splice(indexBookDelete,1);
        } else {
            throw new Error("deleted error")
        }
    }

    update (ID:string, name:string) {
        let indexBookUpdate = this.findbook(ID);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        } else {
            throw new Error ("Update error")}
    }

    findbook ( ID:string)  {
        let i = -1;
        this.books.forEach((book,index) => {
            if (book.ID === ID) {
                i = index;
            }
        })
        return i;
    }
}
