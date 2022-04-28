export class Book {
    ID : string;
    name : string;

    constructor(
        id : string,
        name: string) {
        this.ID = id;
        this.name = name;
    }

    getName():string {
        return this.name;
    }

    setName(name:string){
        this.name = name;
    }

    getID():string {
        return this.ID;
    }
}