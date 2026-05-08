document.addEventListener('DOMContentLoaded', () => {
   
    const todoForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const progressBar = document.getElementById('progress');
    const progressNumber = document.getElementById('numbers');
    const dpImage = document.querySelector('.DP');

    const updateProgress = () => {
        const tasks = taskList.querySelectorAll('li');
        const total = tasks.length;
        const completed = taskList.querySelectorAll('.checkbox:checked').length;
        
        progressBar.style.width = total ? `${(completed / total) * 100}%` : '0%';
        progressNumber.textContent = `${completed} / ${total}`;
        
      
        if (dpImage) dpImage.style.display = total === 0 ? 'block' : 'none';

        if (total > 0 && completed === total) {
            if (typeof confetti === 'function') confetti();
        }
        saveTasks();
    };

    const saveTasks = () => {
        const tasks = Array.from(taskList.querySelectorAll('li')).map(li => ({
            text: li.querySelector('span').textContent,
            completed: li.querySelector('.checkbox').checked
        }));
        localStorage.setItem('sentinel_tasks', JSON.stringify(tasks));
    };

    const addTask = (text, completed = false) => {
        if (!text) return;

        // Secret "root--access" logic
        if (text === "root--access") {
            document.body.classList.add('blink-mode');
            setTimeout(() => {
                window.location.href = "abc.html";
            }, 1000);
            return;
        }

        const li = document.createElement('li');
        if (completed) li.classList.add('completed');
        
        li.innerHTML = `
            <input type="checkbox" class="checkbox" ${completed ? 'checked' : ''}>
            <span>${text}</span>
            <div class="task-buttons">
                <button class="edit-btn" title="Edit"><i class="fa-solid fa-pen"></i></button>
                <button class="delete-btn" title="Delete"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;

       
        li.querySelector('.checkbox').addEventListener('change', () => {
            li.classList.toggle('completed');
            updateProgress();
        });

      
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
            updateProgress();
        });


        li.querySelector('.edit-btn').addEventListener('click', () => {
            const span = li.querySelector('span');
            const newText = prompt("Edit your task:", span.textContent);
            if (newText !== null && newText.trim() !== "") {
                span.textContent = newText.trim();
                saveTasks();
            }
        });

        taskList.appendChild(li);
        updateProgress();
    };

    
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        addTask(taskInput.value.trim());
        taskInput.value = ''; 
    });

    
    const saved = JSON.parse(localStorage.getItem('sentinel_tasks')) || [];
    saved.forEach(t => addTask(t.text, t.completed));
});
