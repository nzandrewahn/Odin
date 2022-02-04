console.log("bruh");
    
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.logInfo = function() {
        return `${title} by ${author}, ${pages}, ${readStatus}`;
    }
}

let book1 = new Book('hello world', 'ur mother', '69420', false);

console.log(book1.logInfo());
