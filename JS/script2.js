document.addEventListener('DOMContentLoaded', () => {

    const taskInput = document.getElementById('task-input');

    const taskList = document.getElementById('task-list');

    const todoForm = document.getElementById('todo-form');

    const terminal = document.getElementById('hacker-terminal');

    const terminalInput = document.getElementById('terminal-input');

    const terminalOutput = document.getElementById('terminal-output');

    const normalApp = document.querySelector('.container');

    const progress = document.getElementById('progress');

    const numbers = document.getElementById('numbers');

    const canvas = document.getElementById('matrix-canvas');

    const ctx = canvas.getContext('2d');



    // --- 1. Scramble Text Animation ---

    const scramble = (element, text) => {

        const glyphs = "01010101#@$%&*<>?/";

        let iteration = 0;

        const interval = setInterval(() => {

            element.innerText = text.split("").map((char, index) => {

                if(index < iteration) return text[index];

                return glyphs[Math.floor(Math.random() * glyphs.length)];

            }).join("");

            if(iteration >= text.length) clearInterval(interval);

            iteration += 1/3;

        }, 30);

    };

    
    

    const updateStats = () => {

        const total = taskList.children.length;

        const completed = taskList.querySelectorAll('.completed').length;

        const perc = total === 0 ? 0 : (completed / total) * 100;

        progress.style.width = perc + "%";

        numbers.innerText = `${completed} / ${total}`;

    };



const addTask = (text, isDone = false, isNew = true) => {

    if (!text) return;



    const li = document.createElement('li');

    if(isDone) li.classList.add('completed');



    li.innerHTML = `

        <input type="checkbox" class="task-check" ${isDone ? 'checked' : ''}>

        <span></span>

        <button class="del-btn"><i class="fa-solid fa-fire"></i></button>

    `;



    taskList.appendChild(li);

    const span = li.querySelector('span');

    

    if (isNew) {

        scramble(span, text);

    } else {

        span.innerText = text;

    }


    li.querySelector('.task-check').addEventListener('change', (e) => {

        li.classList.toggle('completed', e.target.checked);

        updateStats();

    });



    li.querySelector('.del-btn').addEventListener('click', () => {

        li.classList.add('burn-out');

        setTimeout(() => {

            li.remove();

            updateStats();

            saveData();

        }, 750);

    });



    if (text.includes('--temp')) {

        setTimeout(() => {

            li.classList.add('burn-out');

            setTimeout(() => {

                li.remove();

                updateStats();

                saveData();

            }, 700);

        }, 10000);

    }



    updateStats();

};



    const saveData = () => {

    

    };



    todoForm.addEventListener('submit', (e) => {

        e.preventDefault();

        const val = taskInput.value.trim();

        

        // Secret Commands in normal input

        if (val === ':root --access') {

            activateHackerMode();

        } else {

            addTask(val);

        }

        taskInput.value = '';

    });
    

    



    // ---Matrix Rain Logic ---

    let matrixInterval;

    const startMatrix = () => {

        canvas.width = window.innerWidth;

        canvas.height = window.innerHeight;

        const cols = Math.floor(canvas.width / 20);

        const drops = Array(cols).fill(1);



        const draw = () => {

            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";

            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#00ff41";

            ctx.font = "15px monospace";

            drops.forEach((y, i) => {

                const text = String.fromCharCode(Math.random() * 128);

                ctx.fillText(text, i * 20, y * 20);

                if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;

                drops[i]++;

            });

        };

        matrixInterval = setInterval(draw, 33);

    };



    const triggerBreach = () => {

        canvas.style.zIndex = "100";

        canvas.style.opacity = "1";

        startMatrix();

        setTimeout(() => {

            clearInterval(matrixInterval);

            canvas.style.opacity = "0.3";

            canvas.style.zIndex = "-1";

        }, 2000);

    };



    
    



    startMatrix(); //rain in background

});
