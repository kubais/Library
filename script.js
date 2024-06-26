const btnAdd = document.querySelector('#btnAdd');
const container = document.querySelector('.cardContainer');
const buttonModal = document.querySelector('#buttonModal');
const buttonCloseModal = document.querySelector('#btnClose');
const modal = document.querySelector('dialog');
const txtTitle = document.querySelector('#title');
const txtAuthor = document.querySelector('#author');
const txtPages = document.querySelector('#pages');
const cards = document.querySelectorAll('.card');

const myLibrary = [];

function Book(title, author, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
}


myLibrary.push(new Book('Fifinka strikes back', 'Ctyrlistek', '200', 'Read'));
myLibrary.push(new Book('Myspulin likes it hot', 'Ctyrlistek', '300', 'Not Read'));
myLibrary.push(new Book('Pinda has it small', 'Ctyrlistek', '400', 'Read'));

buttonModal.addEventListener('click', () => {
    modal.showModal();
})

buttonCloseModal.addEventListener('click', () => {
    modal.close();
})

function addBookToLibrary() {
    let title = txtTitle.value;
    let author = txtAuthor.value;
    let pages = txtPages.value;
    let status = document.querySelector('input[type="radio"]:checked').value;

    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    container.innerHTML = '';
    showBooks();
}

btnAdd.addEventListener('click', (e) => {
    addBookToLibrary();
    e.preventDefault;
    modal.close;
})

function showBooks() {
    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        card.innerHTML = `<h3>${book.title}</h3> <p>${book.author}</p>`

        const details = document.createElement('div');
        details.setAttribute('class', 'details');

        if (book.status == 'read') {
            details.innerHTML = `<p>${book.pages} pages</p> <p class = "read">${book.status}`
        } else {
            details.innerHTML = `<p>${book.pages} pages</p> <p class = "notRead">${book.status}`
        }

        card.appendChild(details);

        const indexPara = document.createElement('p');
        indexPara.setAttribute('class', 'index');
        indexPara.innerText = `book number: ${index + 1}`;

        card.appendChild(indexPara);

        const btnChangeStatus = document.createElement('button');
        btnChangeStatus.setAttribute('class', 'btnChangeStatus');
        btnChangeStatus.innerText = 'change status';

        card.appendChild(btnChangeStatus);

        btnChangeStatus.addEventListener('click', () => {
            if (myLibrary[index].status === 'Read') {
                myLibrary[index].status = 'Not Read'
            }
            else {
                myLibrary[index].status = 'Read'
             }

             container.innerHTML = '';
             showBooks();
        })

        const btnDelete = document.createElement('button');
        btnDelete.setAttribute('class', 'btnDelete');
        btnDelete.innerText = 'delete';

        card.appendChild(btnDelete);

        container.appendChild(card);

        btnDelete.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            container.innerHTML = '';
            showBooks();
        })
    })    
}

if(myLibrary.length<1) {
    container.innerHTML = 'There are no books in the library'
}
else {
    showBooks();
}



