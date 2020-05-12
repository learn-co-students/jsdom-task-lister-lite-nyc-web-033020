document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskInput = document.getElementById('new-task-description')

  let inputButton = document.getElementsByTagName('input')[1]

  let formText = ""
  
  taskInput.addEventListener('input', function(e) {
    let inputText = e.target.value
    formText = inputText
  });
 
  inputButton.addEventListener('click', function(e){
    
    e.preventDefault();

    let li = document.createElement('li')
    let deleteButton = document.createElement('button')
    li.innerText = formText;
    deleteButton.innerText = 'x'
    

    let tasks = document.getElementById('tasks')
    li.appendChild(deleteButton)
    tasks.appendChild(li)
    


    let form = document.getElementById('create-task-form')
    form.reset()

  });

});
