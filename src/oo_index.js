document.addEventListener("DOMContentLoaded", () => {
    // Initializes the taskList class 
    const taskList = new TaskList();
    // Grab all the necessary DOM elements 
    // Form and relevant input fields 
    const newTaskForm = document.getElementById("create-task-form"); 
    const newTaskDescription = document.getElementById("new-task-description"); 
    const newTaskPriority = document.getElementById("new-task-priority"); 

    // ul where new tasks will be on the DOM 
    const taskUl = document.getElementById("tasks");
    const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());

    // Add event listeners 
    newTaskForm.addEventListener("submit", (e) => {
        e.preventDefault(); 
        taskList.createNewTask(newTaskDescription.value); 
        // Reset Form 
        e.target.reset(); 
        renderApp(); 
    });

    taskUl.addEventListener("click", (e) => {
        if (e.target.nodeName === "BUTTON") {
            taskList.deleteTask(e.target.dataset.description);
            renderApp(); 
        }
    });
});