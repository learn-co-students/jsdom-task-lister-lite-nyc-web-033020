document.addEventListener("DOMContentLoaded", () => {

  const submitButton = document.querySelectorAll('input')[1];
  submitButton.addEventListener('click', function(e){
    e.preventDefault();

    let textBox = document.getElementById('new-task-description');

    // create an empty li
    let li = document.createElement('li');

    //add text to the li
    const p = document.createElement('p');
    p.innerText = textBox.value;
    li.appendChild(p);

    // color p's text
    const priority = document.getElementById('priority')
    if (priority.value == "high") p.style.color = "red";
    else if (priority.value == "medium") p.style.color = "yellow";
    else p.style.color = "green";

    // add delete button to li
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "delete";
    li.appendChild(deleteButton);
    // add delete functionality to button
    deleteButton.addEventListener('click', function(event) {
      event.target.parentElement.remove();
    });

    // attach the li to the unordered list
    let tasks = document.getElementById('tasks');
    tasks.appendChild(li);
  });
});
