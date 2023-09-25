const book = {
    name : 'Bhagavad Gita',
    author : 'Vyasa',
    summary : function () {
        console.log(`The book name is ${this.name}`);
        console.log(`The author name is ${this.author}`)
    }
}

book.summary();

