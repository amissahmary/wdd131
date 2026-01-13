const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');
const li = document.createElement('li'); // creates a new list called li 
const deleteButton = document.createElement('button'); // creates a new button called deleteButton

li.textContent = input.value; // now makes the textcontent of the list an input, so the user inputs something.
deleteButton.textContent = 'X'; // now the textcontent of the delete button is X, that means x is placed inside the box.
li.append(deleteButton); // now the deletebutton is added to the items in the new li list
list.append(li); // now the new li list is added to existing list.

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const input = document.querySelector('#favchap');
        const button = document.querySelector('button');
        const list = document.querySelector('list');
        const li = document.createElement('li'); // creates a new list called li 
        const deleteButton = document.createElement('button'); // creates a new button called deleteButton

        li.textContent = input.value; // now makes the textcontent of the list an input, so the user inputs something.
        deleteButton.textContent = 'X'; // now the textcontent of the delete button is X, that means x is placed inside the box.
        li.append(deleteButton); // now the deletebutton is added to the items in the new li list
        list.append(li); // now the new li list is added to existing list.

    }
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});

input.value = '';

input.focus();