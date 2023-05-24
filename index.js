
const form = document.querySelector("#form");
const input = document.querySelector("#task-input");
const taskList = document.querySelector(".content");


form.addEventListener("submit", addTask);

function addTask(e) {
    e.preventDefault();
    
    const taskText = input.value;
    const taskHTML = `<div class="task">
                        <div class="task-text">${taskText}</div>
                        <div class="buttons">
                            <button data-action="done">Сделано</button>
                            <button data-action="delete">Удалить</button>
                        </div>
                    </div>`
    // if(!taskText) {
    //     return;
    // }
    taskList.insertAdjacentHTML("beforeend", taskHTML)

    input.value = "";
    input.focus();

};

taskList.addEventListener("click", deleteTask);
taskList.addEventListener("click", doneTask);


function deleteTask(event){
    if(event.target.dataset.action === "delete") {
        const parent = event.target.closest(".task");
        parent.remove()
    }
}
function doneTask(event) {
    if(event.target.dataset.action === "done") {
        const parent = event.target.closest(".task")
        parent.classList.toggle("task-done")
    }
}

