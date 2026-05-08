document.addEventListener('DOMContentLoaded', () => {

    const taskinput = document.getElementById('task-input');

    const addtaskbtn = document.getElementById('add-task-btn');

    const tasklist = document.getElementById('task-list');

    const DP = document.querySelector('.DP');

    const todosContainer = document.querySelector('.todos-container');

    const progressbar = document.getElementById('progress');

    const progressNumber = document.getElementById('numbers');



    const toggleEmptyState = () => {

        if (DP) {

            DP.style.display = tasklist.children.length === 0 ? 'block' : 'none';

        }

    };



    const updateprogress = (checkcompletion = true) => {

        const totaltasks = tasklist.children.length;

        const completedtasks = tasklist.querySelectorAll('.checkbox:checked').length;



        if (progressbar) {

            progressbar.style.width = totaltasks ? `${(completedtasks / totaltasks) * 100}%` : '0%';

        }

       

        if (progressNumber) {

            progressNumber.textContent = `${completedtasks} / ${totaltasks}`;

        }



        if (checkcompletion && totaltasks > 0 && completedtasks === totaltasks) {

            if (typeof confetti === 'function') {

                confetti();

            }

        }

    };



    const saveTaskToLocalStorage = () => {

        const tasks = Array.from(tasklist.querySelectorAll('li')).map(li => ({

            text: li.querySelector('span').textContent,

            completed: li.querySelector('.checkbox').checked

        }));

        localStorage.setItem('tasks', JSON.stringify(tasks));

    };

    const taskInput = document.getElementById('task-input');

const terminal = document.getElementById('hacker-terminal');

const normalApp = document.querySelector('.container');


    const addTask = (text, completed = false, checkcompletion = true) => {

        const tasktext = text || taskinput.value.trim();

        if (tasktext === '') return;



        const li = document.createElement('li');

        if (completed) li.classList.add('completed');

       

        li.innerHTML = `

            <input type="checkbox" class="checkbox" ${completed ? 'checked' : ''} />

            <span>${tasktext}</span>

            <div class="task-buttons">

                <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>

                <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>

            </div>

        `;



        const checkbox = li.querySelector('.checkbox');

        const editbtn = li.querySelector('.edit-btn');

        const deletebtn = li.querySelector('.delete-btn');



        checkbox.addEventListener('change', () => {

            li.classList.toggle('completed', checkbox.checked);

            updateprogress();

            saveTaskToLocalStorage();

        });
// --- SECRET ACCESS LOGIC ---
if (tasktext === "root--access") {
    console.log("System Compromised...");

    document.body.classList.remove('blink-mode');
    void document.body.offsetWidth; 
    document.body.classList.add('blink-mode');

    setTimeout(() => {
        window.location.href = "abc.html";
        document.body.classList.remove('blink-mode');
    }, 1000);
    
    return; 
}


        editbtn.addEventListener('click', () => {

            if (!checkbox.checked) {

                taskinput.value = li.querySelector('span').textContent;

                li.remove();

                toggleEmptyState();

                updateprogress(false);

                saveTaskToLocalStorage();

            }

        });



        deletebtn.addEventListener('click', () => {

            li.remove();

            toggleEmptyState();

            updateprogress();

            saveTaskToLocalStorage();

        });



        tasklist.appendChild(li);

        taskinput.value = '';

        toggleEmptyState();

        updateprogress(checkcompletion);

        saveTaskToLocalStorage();

    };



   

    addtaskbtn.addEventListener('click', (e) => {

        e.preventDefault();

        addTask();

    });



    const loadTasksFromLocalStorage = () => {

        const savedtasks = JSON.parse(localStorage.getItem('tasks')) || [];

        savedtasks.forEach(({ text, completed }) => addTask(text, completed, false));

    };



    loadTasksFromLocalStorage();

});


const secretInput = document.getElementById('task-input');

if (secretInput) {
    secretInput.addEventListener('keyup', function() {
        if (this.value === 'root--access') {
            // Blink Effect
            document.body.classList.add('blink-mode');
            document.body.style.backgroundColor = "black";

            setTimeout(() => {
                window.location.href = "./abc.html";
            }, 1500);
        }
    });
}
