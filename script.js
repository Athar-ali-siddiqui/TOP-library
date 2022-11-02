
const addBookBtn = document.getElementById('addBookBtn');
const close_modal = document.getElementById('close-modal');
const modal_bg = document.getElementById('modal-bg');

const modal = document.getElementById('add-book-modal');
const submit_modal = document.getElementById('submit');

const book_form = document.getElementById('add-book-form');
const container = document.getElementById('container');

const new_title = document.getElementById('title');
const new_author = document.getElementById('author');
const new_page = document.getElementById('page');
const new_read = document.getElementById('read');

addBookBtn.addEventListener("click" , showModal);
close_modal.addEventListener("click" , closeModal);

book_form.addEventListener("submit" , addBook);

function Book(name , author , pages , readed){
    this.name = name ;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
}
let library = [];

function addBook(e){
    e.preventDefault()
    // console.log("herer")
    // console.log(new_title.value);
    // console.log(new_author.value);
    // console.log(new_page.value);
    // console.log(new_read.checked);
    const book = new Book(new_title.value,new_author.value,new_page.value,new_read.checked) ;
    library.push( book);
    book_form.reset();
    closeModal();

    console.log(library);
    addBookToGrid(book);
}

function addBookToGrid(book){
    const card = document.createElement('div');
    card.classList.add('book-card');
    const name = document.createElement('h2');
    name.classList.add('book-name');
    name.innerText = book.name ; 
    const author = document.createElement('h3');
    author.classList.add('book-author');
    author.innerText = book.author ; 
    const pages = document.createElement('h4');
    pages.classList.add('book-pages');
    pages.innerText = book.pages + " Pages";

    const readed = document.createElement('div');
    readed.classList.add('book-readed');
    if(book.readed){
        readed.innerText = 'Readed';
        readed.classList.add('read');
    }
    else {
        readed.innerText = 'Not Readed';
    }
    

    const btn = document.createElement('button');
    btn.type = "button";
    btn.id = "book-remove";
    btn.innerText = 'Remove' ;

    card.appendChild(name);card.appendChild(author);
    card.appendChild(pages);card.appendChild(readed);
    card.appendChild(btn);
    container.appendChild(card);
}
function showModal(){
    // console.log("show")
    modal_bg.classList.add('show');
    modal.classList.add('show');
}

function closeModal(){   
    // console.log("close")
        modal_bg.classList.remove('show');
        modal.classList.remove('show');
}
