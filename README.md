<h1 align="left">
  <img src="https://github.com/user-attachments/assets/a7206eeb-b554-47c3-8a5c-e93708d9a1e5" width="50" height="50" style="vertical-align:middle">
  <span>SENTINEL-X</span>
</h1>

**A Hacker themed To-Do App for Developers & Cool Hackers.**


> *"Because why use a boring to-do list when you can feel like a hacker in a movie?"* ⚡

[Visit my Website](https://sinethinduwara.github.io/Sentinel-X)
---
<img width="1408" height="768" alt="Sentinel-X" src="https://github.com/user-attachments/assets/be69e82f-faa4-40b5-92cf-20409fd24b45" />


### Sentinel-X Overview
**Sentinel-X** is a minimalist, cyber-themed productivity tool. I really wanted to build this because I live by that "Student by Day, Developer by Night" 🚀 motto. I use a normal desktop for my studies, but I wanted to capture a specific vibe when working in virtualBox or the WSL terminal. working late at night under bright lights hurts my eyes so I developed this with a "hacker" aesthetic—blending hidden elements with a visible interface to get into that flow.

---

### 🛠️ Features
*  **Task Management :** Not only regular tasks, but you can edit and "Burn" (delete) tasks at any time & There are separate status checkboxes for each task
*  **System Status :** The progress bar updates as you work.
*  **No Data Loss :**  Because it uses the LocalStorage API, your data is not deleted even if you close or refresh the browser. The data is safe until you delete it.
*  **Easter Egg :** root--access
*  **Mission Accomplished:** Once you complete all the tasks, celebrate with a Confetti rain. This is done using custom logic and the Confetti API.
* **Multi-Domain Tracking :** Whether it’s **Cisco Networking**, **Physics**, or **Hardware Engineering**, Sentinel-X handles it all.

---

### 🕵️‍♂️ classified: The Secret Command
There are rumors of a hidden diagnostic layer within the system. We can neither confirm nor deny its existence. 

However, if you find yourself at the **To-Do input terminal**, you might try entering the forbidden cipher:
`rood--access`

**BOOM!** ...something *puduma sahagatha* will happen. Just don't say I didn't warn you! 

---

### 🚀 Setup Instructions
*   **Web:** Just open the link in your browser and you're in.
*   **Desktop:** Open in **Chrome** -> **Settings** -> **Install Sentinel-X**. Now it's a real app!
*   **Mobile:** 
    *   **Android:** Chrome Menu -> **Install App**.
    *   **iOS:** Safari Share -> **Add to Home Screen**. 

---

### 🏗️ The "Bug" Cemetery (What I Fixed)
*   **The Matrix Rain:** It wasn't raining... it was just broken. Now it's fully operational.
*   **Syntax Errors:** Found 2 errors hiding in the shadows and terminated them.
*   **The Overflow:** Fixed the text that was trying to escape the boxes using some CSS `word-break` magic.

---
### 💻Tech Stack

*   **LocalStorage -** This is the "memory" of the app. Normally, data is deleted when a web page is refreshed, but this does not happen. **(Saving)** When you add a task or click a checkbox, the entire task list is taken as an Array and converted to a string using JSON.stringify(). It is then saved in the browser using localStorage.setItem('tasks', ...)
  
*   **Loading :When the page loads, localStorage.getItem('tasks') takes that string, converts it back into an Array using JSON.parse(), and brings the data to the screen**
  
*   **Maths(MY <3)** The progress bar and the score inside that circle (0/5) work with a simple mathematical equation: The app always looks at the total number of tasks from tasklist.children.length. The checkbox gets the count of those that are "checked" (Completed count) separately & The resulting value is given to the progress bar as the CSS width.
  
*   **The Secret Mode : (MY <3)** This is my *"Special feature"*. It works with an if condition inside the addTask function : when you type something in the input box and press the "Add" button, it checks if that text is "root--access". **(If true)** instead of adding a normal task, it glitches the screen via document.body.classList.add('blink-mode') and switches the page to abc.html after a second with a setTimeout.

### Matrix Rain Logic

* **The Drops Array :** An array containing one drop for each column on the screen (this has the 'y' coordinate).
  
* **The Fading Effect :** The special thing about this is that it fades away the old text without erasing it (Trail effect). It does this by drawing a very thin transparent black layer (rgba(0, 0, 0, 0.05)) instead of completely blackening the screen every frame.
  
* **Randomization :** When the letters are finished falling down, Math.random() is used to make them go up again. That's why the letters fall at random times like rain.



*   **HTML5**
*   **CSS3**
*   **JavaScript**
---

### ❤️ Special Thanks
*   **My Parents:** For the power supply and the food that kept me alive.
*   **Hack Club:** For the inspiration to keep shipping.
*   **MyComputer:** For not giving up on me during the long renders.

**Sentinel-X: Mission Accomplished.** 🛡️✨
