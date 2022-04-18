let myLibrary = [];
let totalBooks = 0;
let booksRead = 0;
let booksNotRead = 0; 

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBook(book){
    myLibrary.push(this);
}

function openForm(){
    document.querySelector(".form-popup").style.display = "block";
}

function closeForm(){
    document.querySelector(".form-popup").style.display = "none";
}

const add = document.getElementById('add');
add.addEventListener("click", function(){
    openForm();
})



const blist = document.querySelector('.booklist');

function getValues(){
    let bookTitle = document.getElementById('title').value;
    let bookAuthor = document.getElementById('author').value;
    let bookPages = document.getElementById('pages').value;
    if (bookTitle != ''){
        let newBook = new Book(bookTitle, bookAuthor, bookPages);
        myLibrary.push(newBook);
        closeForm();
        let newDOMBook = blist.appendChild(document.createElement('div'));
        newDOMBook.classList.add('book');
        newDOMBook.classList.add(myLibrary.length);
        newDOMBook.innerHTML = bookTitle + '<br>' + bookAuthor + "<br>" + bookPages + " pages"+ "<br>";
        let markAsRead = newDOMBook.appendChild(document.createElement('button'));
        markAsRead.innerHTML = "Mark as Read";
        markAsRead.addEventListener("click", function(){
            if (!markAsRead.classList.contains('readBooks')){
                markAsRead.classList.add('readBooks');
            }
            else{
                markAsRead.classList.remove('readBooks');
            }
            refreshBookCount();
        })
        let removeBook = newDOMBook.appendChild(document.createElement('button'));
        removeBook.classList.add('remove');
        removeBook.classList.add(myLibrary.length);
        removeBook.addEventListener("click", function(){
            myLibrary.pop();
            newDOMBook.remove();
            refreshBookCount();
        })
        removeBook.innerHTML = "Remove Book";
        refreshBookCount();
    }
}

function refreshBookCount(){
    booksRead = document.querySelectorAll('.readBooks').length;
    totalBooks = myLibrary.length;
    booksNotRead = totalBooks - booksRead;
    document.querySelector('#totalCount').innerHTML = totalBooks;
    document.querySelector('#readCount').innerHTML = booksRead;
    document.querySelector('#unreadCount').innerHTML = booksNotRead;
}