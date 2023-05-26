
const form = document.querySelector("#form");
const input = document.querySelector("#task-input");
const taskList = document.querySelector(".content");
let tasks = [];

// const delComplete = document.querySelector("#delCom");
// delComplete.addEventListener("click", removeCompleted);
// function removeCompleted() {
//     tasks = tasks.filter(t => t.done !== true)
//     saveToLocalStrg()
// }


if(localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(el => renderTask(el));
}


form.addEventListener("submit", addTask);

function addTask(e) {
    e.preventDefault();
    
    const taskText = input.value;
    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false
    };
    tasks.push(newTask);
    saveToLocalStrg();
    renderTask(newTask);
    input.value = "";
    input.focus();
};

taskList.addEventListener("click", deleteTask);
taskList.addEventListener("click", doneTask);


function deleteTask(event){
    if(event.target.dataset.action !== "delete") return;
    const parent = event.target.closest(".task");
    const id = +parent.id;
    const index = tasks.findIndex(t => t.id === id) 
    tasks.splice(index, 1)
    parent.remove()
    
    saveToLocalStrg();
}
function doneTask(event) {
    if(event.target.dataset.action !== "done") return;
    const parent = event.target.closest(".task");
    const id = +parent.id;
    const index = tasks.findIndex(t => t.id === id);
    tasks[index].done = !tasks[index].done;
    parent.classList.toggle("task-done");
    saveToLocalStrg();
}

function saveToLocalStrg() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}


function renderTask(tasks) {
    const cssClass = tasks.done ? "task task-done" : "task";
    
    const taskHTML = `<div id="${tasks.id}"class="${cssClass}">
                        <div class="task-text">${tasks.text}</div>
                        <div class="buttons">
                            <button data-action="done">Сделано</button>
                            <button data-action="delete">Удалить</button>
                        </div>
                    </div>`
    
    taskList.insertAdjacentHTML("beforeend", taskHTML);
}



