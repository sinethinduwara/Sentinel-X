document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const progressBar = document.getElementById('progress');
    const progressNumber = document.getElementById('numbers');
    const dpImage = document.querySelector('.DP');

    const updateProgress = () => {
        const total = taskList.children.length;
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
                <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
                <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;

        // Checkbox Logic
        li.querySelector('.checkbox').addEventListener('change', () => {
            li.classList.toggle('completed');
            updateProgress();
        });

        // Delete Logic
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
            updateProgress();
        });

        li.querySelector('.edit-btn').addEventListener('click', () => {
            const newText = prompt("Edit your task:", text);
            if (newText !== null && newText.trim() !== "") {
                li.querySelector('span').textContent = newText.trim();
                saveTasks();
            }
        });

        taskList.appendChild(li);
        updateProgress();
    };

    addTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addTask(taskInput.value.trim());
        taskInput.value = '';
    });

    // Load saved data
    const saved = JSON.parse(localStorage.getItem('sentinel_tasks')) || [];
    saved.forEach(t => addTask(t.text, t.completed));
});
