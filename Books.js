class Bookcase {
    constructor(size){
        this.shelves = new.array(size).fill([]);

    }
}


class Shelf{
    constructor(){
        this.books = [];
    }
    add(book) {
        this.books.push(book);
    }
    find(title){

    }
    remove(){

    }

}

class Book {}
constructor(title, author, genre){
this.title = title;
this.author = author;
this.genre = genre;
}

