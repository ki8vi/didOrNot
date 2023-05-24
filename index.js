
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
                            <button>Сделано</button>
                            <button>Удалить</button>
                        </div>
                    </div>`

    taskList.insertAdjacentHTML("beforeend", taskHTML)

    input.value = "";
    input.focus();

};
