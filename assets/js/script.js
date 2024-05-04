
const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");
const addTask = document.getElementById("add-task");



addTask.addEventListener("click", function(){
    const taskText = inputBox.value;

    if(taskText !== ""){
        const listItem = document.createElement("li");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        listItem.appendChild(checkbox);
        
        const p = document.createElement("p");
        p.textContent = taskText;
        listItem.appendChild(p);
        inputBox.value = "";

        const deleteButton = document.createElement("i");
        //deleteButton.type = "button";
        deleteButton.classList.add('fas', 'fa-trash');
        // deleteButton.className = "delete-button";
        //deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        listItem.appendChild(deleteButton);

        deleteButton.addEventListener("click", function(){
            listItem.remove();
            
        });
        

        checkbox.addEventListener("click", function() {
            if (checkbox.checked) {
                p.classList.add("completed");

            } else {
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

    taskList.querySelectorAll("li").forEach(function(task) {
        if (selectedOption === "all") {
        task.classList.remove("hidden");
        } else if (selectedOption === "completed" && task.querySelector("input[type='checkbox']").checked) {
        task.classList.remove("hidden");
        } else if (selectedOption === "not-completed" && !task.querySelector("input[type='checkbox']").checked) {
        task.classList.remove("hidden");
        } else {
        task.classList.add("hidden");
        }
    });
    });


        const taskInput = document.getElementById("input-box");
        const addButton = document.querySelector("button");
        
        addButton.addEventListener("click", function() {
        console.log(taskInput.value);
        const newTask = {
            text: taskInput.value,
        };
        const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
        taskList.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(taskList));
        // clear the input field
        taskInput.value = "";
        });


