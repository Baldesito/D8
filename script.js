document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const listItem = document.createElement('li');
  
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);
  
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Elimina';
        deleteBtn.classList.add('delete-btn');
        listItem.appendChild(deleteBtn);
  
        taskList.appendChild(listItem);
  
        taskInput.value = '';
      }
    });
  
    taskList.addEventListener('click', (e) => {
      if (e.target.tagName === 'SPAN') {
        e.target.parentElement.classList.toggle('completed');
      } else if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
      }
    });
  });
  