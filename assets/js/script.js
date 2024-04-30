
const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");
const addTask = document.getElementById("add-task");



addTask.addEventListener("click", function(){
    const taskText = inputBox.value;

    if(taskText !== ""){
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        inputBox.value = "";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        listItem.appendChild(checkbox);

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "x";
        listItem.appendChild(deleteButton);

        deleteButton.addEventListener("click", function(){
            listItem.remove();
            
        });
        

        checkbox.addEventListener("click", function() {
            if (checkbox.checked) {
                listItem.classList.add("completed");
            } else {
                listItem.classList.remove("completed");
            }
            });
            
        taskList.appendChild(listItem);
    }
    else{
        alert("You must add some tasks!");
    }
});


// const filterSelect = document.getElementById("filter-tasks");

//     filterSelect.addEventListener("change", function() {
//     const selectedOption = this.value;

//     taskList.querySelectorAll("li").forEach(function(task) {
//         if (selectedOption === "all") {
//         task.classList.remove("hidden");
//         } else if (selectedOption === "completed" && task.querySelector("input[type='checkbox']").checked) {
//         task.classList.remove("hidden");
//         } else if (selectedOption === "not-complete" && !task.querySelector("input[type='checkbox']").checked) {
//         task.classList.remove("hidden");
//         } else {
//         task.classList.add("hidden");
//         }
//     });
//     });


        // const taskInput = document.querySelector("#input-box");
        // const addButton = document.querySelector("button");
        
        // addButton.addEventListener("click", function() {
        // const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
        // const newTask = {
        //     text: taskInput.innerHTML
        //     completed: false;
        // };
        // taskList.push(newTask);
        // localStorage.setItem("tasks", JSON.stringify(taskList));
        // // clear the input field
        // taskInput.value = "";
        // });


