document.addEventListener("DOMContentLoaded", () => {
  
  const todoForm = document.getElementById('create-task-form') 
  const todoInput = document.getElementById('new-task-description')
  const list = document.querySelector('#tasks')
  let userInput
  const dropDown = document.querySelector('#priority')
  const priority = document.querySelectorAll('option')

  todoForm.addEventListener('submit', function(event){
    
    event.preventDefault()

    let taskItem = document.createElement('li')

    if(dropDown.value==='low'){
      taskItem.style.color = "green"
    } else if (dropDown.value==='medium'){
      taskItem.style.color = "yellow"
    } else if (dropDown.value==='high'){
      taskItem.style.color = "red"
    }

    userInput = todoInput.value
    taskItem.textContent = userInput
    list.appendChild(taskItem)
    todoForm.reset()
    
    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = '&times;'
    taskItem.appendChild(deleteButton)

    deleteButton.className = 'delete'
    const deleteButtons = document.getElementsByClassName("delete")
    const deleteArray = Array.from(deleteButtons)
  
    deleteArray.forEach(function(button){
      button.addEventListener('click', function(event){
        event.target.parentElement.remove()
      })
    })    
  });
});