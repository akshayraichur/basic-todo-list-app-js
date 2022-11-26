const todoInput = document.querySelector('.add-new-todo');
const todoContainer = document.querySelector('.todos');

const handleTodoInput = (e) => {
  if (e.keyCode === 13) {
    // append that todo here.
    const inputValue = e.target.value.trim();

    if (inputValue === '') {
      return;
    }

    const todoListTemplate = document.querySelector('#template-todo-list-item');

    const liElement = document.createElement('li');
    liElement.appendChild(todoListTemplate.content.cloneNode(true));

    const todoTitle = liElement.querySelector('.todo-text');
    todoTitle.textContent = inputValue;

    todoContainer.appendChild(liElement);

    e.target.value = '';
  }
};

const handleEditTodoList = (e) => {
  const todoTitle = e.target.parentNode.previousElementSibling;
  todoTitle.setAttribute('contenteditable', 'true');
  todoTitle.focus();
};

const handleDeleteTodoList = (e) => {
  const liElement = e.target.parentNode.parentNode.parentNode;

  todoContainer.removeChild(liElement);
};

const handleClickListener = (e) => {
  if (e.target.classList.contains('edit-btn')) {
    handleEditTodoList(e);
  }

  if (e.target.classList.contains('delete-btn')) {
    handleDeleteTodoList(e);
  }
};

// this we can do for storing the stuff in local storage
const updateTodoList = () => {};

const handleUpdateInput = (e) => {
  if (e.target.classList.contains('todo-text')) {
    // console.log('Crazy dude! :', e.target);
  }
};

const App = () => {
  todoInput.addEventListener('keyup', handleTodoInput);
  document.addEventListener('click', handleClickListener);
  document.addEventListener('input', handleUpdateInput, false);
};

App();
