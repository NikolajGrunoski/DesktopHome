//oneTwoThree - camel case //variabli i funkcii
//OneTwoThree - pascal  //klasi

function Library(libraryName) {

    this.name = libraryName;
    this.books = [];

    this.populateBooks = function () {

        for (var i = 0; i < 10; i++) {
            if (i % 2 === 0) {
                var firstBook = new Book(i, true);
                this.books.push(firstBook);
            } else {
                var secondBook = new Book(i, false);
                this.books.push(secondBook);
            }

        }
    }

    this.printBooks = function(){
        for(var i = 0; i < this.books.length; i++){
            if(!this.books[i].isTaken ){
                console.log(this.books[i].name);
            }
        }
    }
}