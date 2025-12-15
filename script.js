document.addEventListener("DOMContentLoaded",()=>{
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let form = document.getElementById("container_taskForm");
    let view = document.getElementById("container_taskView");

    const loadTasks = () => {
        view.innerHTML = "";

        tasks.forEach((task,index) => {
            const div = document.createElement("div");
            const span = document.createElement("span");
            const button = document.createElement("button");
            const hr = document.createElement("hr");


            div.className = "taskView_block";
            span.textContent = task;
            span.className = "taskView_task"
            button.textContent = "Eliminar";
            button.className = "taskView_eraseButton";
            button.addEventListener("click", () => {
                tasks.splice(index,1);
                localStorage.setItem("tasks",JSON.stringify(tasks));
                loadTasks();
            });

            div.appendChild(span);
            div.appendChild(button);
            view.appendChild(div);
            view.appendChild(hr);
        });
    };

    loadTasks();

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
       const newTask = e.target.task.value.trim();
       if (!newTask) return;

       tasks.push(newTask);

       localStorage.setItem("tasks", JSON.stringify(tasks));

       e.target.reset();
       loadTasks();
    });
});
