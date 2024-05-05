
const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");
const addTask = document.getElementById("add-task");



addTask.addEventListener("click", function(){
    const taskText = inputBox.value;

    if(taskText !== ""){
        const listItem = document.createElement("li");
        const div = document.createElement("div");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        div.appendChild(checkbox);
        
        const p = document.createElement("p");
        p.textContent = taskText;
        div.appendChild(p);
        listItem.appendChild(div);


        const deleteButton = document.createElement("i");
        deleteButton.classList.add('fas', 'fa-trash');
        listItem.appendChild(deleteButton);

        deleteButton.addEventListener("click", function(){
            listItem.remove();
            
        });
        

        checkbox.addEventListener("click", function() {
            if (checkbox.checked) {
                p.classList.add("completed");

            } else if (checkbox !== checked) {
                p.classList.add("incomplete");
            }else {
                p.classList.remove("completed");
            }
            });
            
        taskList.appendChild(listItem);
    }
    else{
        alert("You must add some tasks!");
    }
});

    const filterSelect = document.getElementById("filter-tasks");

    filterSelect.addEventListener("change", function() {
    const selectedOption = this.value;
    const tasks = document.getElementById("task-list").children;

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        if (selectedOption === "all") {
        task.style.display = "";
        } else if (selectedOption === "completed") {
        if (task.querySelector("p").classList.contains("completed")) {
            task.style.display = "";
        } else {
            task.style.display = "none";
        }
        } else if (selectedOption === "incomplete") {
        if (task.querySelector("p").classList.contains("incomplete")) {
            task.style.display = "";
        } else {
            task.style.display = "none";
        }
        }
    }
    });




        // const taskInput = document.getElementById("input-box");
        // const addButton = document.querySelector("button");
        
        // addButton.addEventListener("click", function() {
        // console.log(taskInput.value);
        // const newTask = {
        //     text: taskInput.value,
        // };
        // const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
        // taskList.push(newTask);
        // localStorage.setItem("tasks", JSON.stringify(taskList));
        // // clear the input field
        // taskInput.value = "";
        // });


