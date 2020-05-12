document.addEventListener("DOMContentLoaded", () => {

  const submitButton = document.querySelectorAll('input')[1];
  submitButton.addEventListener('click', function(e){
    e.preventDefault();

    // get the text box
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
    else if (priority.value == "medium") p.style.color = "orange";
    else p.style.color = "green";

    // add delete button to li
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "delete";
    li.appendChild(deleteButton);
    // add delete functionality to button
    deleteButton.addEventListener('click', function(event) {
      event.target.parentElement.remove();
    });

    // add text field
    const textField = document.createElement('input');
    textField.className = "editb";
    textField.type = "text";
    li.appendChild(textField);

    // add edit button
    const editButton = document.createElement('button');
    editButton.innerText = "edit";
    li.appendChild(editButton);
    editButton.addEventListener('click', function(e) {
      console.log(e);
      const newText = document.getElementsByClassName('editb')[0].value;
      p.innerText = newText;
    });

    // order tasks
    // saved into red, orange, green seperate lists
    if (priority.value == "high") {

      let redTasks = document.getElementById("red-tasks");
      redTasks.appendChild(li);

    } else if (priority.value == "medium") {

      let orangeTasks = document.getElementById("orange-tasks");
      orangeTasks.appendChild(li);

    } else if (priority.value == "low") {

      let greenTasks = document.getElementById("green-tasks")
      greenTasks.appendChild(li);

    }
  });
});
