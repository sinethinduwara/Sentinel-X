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
        
        // Toggle Logo visibility
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

        // Secret Access Logic
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
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        `;

        li.querySelector('.checkbox').addEventListener('change', () => {
            li.classList.toggle('completed');
            updateProgress();
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
            updateProgress();
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
