document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded")
  const toDoList = document.querySelector("#tasks");
   console.log(toDoList);

  const taskForm = document.getElementById("create-task-form");
  console.log(taskForm);

  taskForm.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("what is the event?", e);
    const inputValue = document.querySelector('input').value;

    const HTML =  `<li>${inputValue}</li>`;

    toDoList.insertAdjacentHTML("beforeend", HTML);
    
    taskForm.reset()
    const listItem = document.getElementsByTagName('li')
    
    const thing = Array.from(listItem)

    thing.forEach(function(button){
      button.addEventListener("click", function(e){
        e.target.remove();
     })
    });

 
 });

});