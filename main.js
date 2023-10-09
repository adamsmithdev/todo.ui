import { generateGuid } from './util/generateGuid.js';

const todoInputElement = document.getElementById('todoInput');
const listElement = document.getElementById('todoList');

window.onload = () => {
    main();
};

const main = () => {
    todoInputElement.addEventListener('keydown', (e) => handleAddTodo(e.key));
};

const handleDoneClick = (itemId) => {
    const todoItem = document.getElementById(itemId);
    listElement.removeChild(todoItem);
};

const handleAddTodo = (key) => {
    if (key != 'Enter' || todoInputElement.value === '') return;

    const itemElement = createItemElement(todoInputElement.value);
    listElement.append(itemElement);

    todoInputElement.value = '';
};

const createItemElement = (inputValue) => {
    const itemElement = document.createElement('li');
    const itemId = generateGuid();
    const itemText = document.createTextNode(inputValue);

    itemElement.setAttribute('id', itemId);
    itemElement.classList.add('todoItem');
    itemElement.appendChild(itemText);

    const buttonElement = createButtonElement(itemId);
    itemElement.appendChild(buttonElement);

    return itemElement;
};

const createButtonElement = (itemId) => {
    const buttonElement = document.createElement('button');

    buttonElement.textContent = '✅';
    buttonElement.classList.add('doneButton');
    buttonElement.addEventListener('click', () => handleDoneClick(itemId));

    return buttonElement;
};
