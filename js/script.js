const allBook = [];
const form = document.forms[0];
const tBody = document.querySelector('.table-section tbody')
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();

    const allInput = form.querySelectorAll(`input[type="text"]`);
    const obj = {};

    allInput.forEach(input => {
        obj[input.name] = input.value;
    });

    allBook.push(obj);
    renderTable(obj);
}

function renderTable(object) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const updateButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    updateButton.innerText = "Update";
    deleteButton.innerText = "Delete"

    updateButton.setAttribute('data-bookId', object.bookId)
    deleteButton.setAttribute('data-bookId', object.bookId)

    updateButton.classList.add('button', 'update-button');
    deleteButton.classList.add('button', 'delete-button');

    updateButton.addEventListener('click', onUpdate);
    deleteButton.addEventListener('click', onDelete);

    td.appendChild(updateButton);
    td.appendChild(deleteButton);

    tr.appendChild(td);

    for (const data in object) {
        const td = document.createElement('td');
        td.innerText = object[data];
        tr.appendChild(td);
    }

    tBody.append(tr);
}

function onUpdate(event) {
    
}

function onDelete(event) {
    if(confirm('Do you want to remove this')) {
        const deleteButton = event.target;
        const bookId = deleteButton.dataset.bookId;

        allBook = allBook.filter(book => book.bookId != bookId);

        
    }   
}