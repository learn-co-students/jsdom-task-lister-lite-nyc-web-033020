document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
// Get New Task Form
let newTaskForm = document.getElementById('create-task-form');
​
// Get New Task Input Field
let newTaskField = newTaskForm.querySelector('#new-task-description');
​
// Get the task list ul
let taskList = document.getElementById('tasks');
​
// Append seletion menu to newTaskForm
const prioritySelection = document.createElement("select");
newTaskForm.appendChild(prioritySelection);
prioritySelection.id = 'priority-selection';
​
// Create menu options
const prioritySelectOptions = [
	{
		name: "High",
		number: 2
	},{
		name: "Medium",
		number: 1
	},{
		name: "Low",
		number: 0
	}
];
prioritySelectOptions.forEach(option => {
	const newOption = document.createElement('option');
	newOption.value = option.name;
	newOption.innerHTML = option.name;
	newOption.setAttribute("number", String(option.number))
	prioritySelection.appendChild(newOption);
})
​
// Create function to handle submit
const logNewTask = event => {
	// Get value from input field
	const task = {
		name: newTaskField.value,
		priorityName: prioritySelection.value,
		priorityNumber: prioritySelection.number
	};
​
	debugger;
	// Pass input text to addTask Function
	addTask(task);
	// Prevent page reload on submit	
	event.preventDefault();
};
​
// Create function to add list item
const addTask = (task) => {
	const priority = task.priorityName;
	const taskName = task.name;
	const priorityNumber = task.priorityNumber;
​
	// Determine font color based on value from prioritySelection
	const getPriorityColor = (priority) => {
		if (priority === "High" ) { return "#FF0000"; }
		else if ( priority === "Medium" ) { return "#FFFF00"; }
		else if ( priority === "Low" ) { return "#00FF00" }
		// Handle unexpected values
		else { return "#000000" }
	}
	
​
	// Create empty <li>
	const newTaskListItem = document.createElement("li")
	// Add <li> to dom within list's <ul>
	taskList.appendChild(newTaskListItem);
	// Give it a class
	newTaskListItem.classList.add('task-list-item');
	// Assign the passed in argument to the inner html of li
	newTaskListItem.innerHTML = taskName + "  ";
​
	// Give item a style color
	newTaskListItem.style.color = getPriorityColor(priority);
​
	// Give the li a priority number
	newTaskListItem.setAttribute("priority", priorityNumber)
​
	createDeleteButton(newTaskListItem);
​
};
​
// Add Delete Button by creating a child node for <li>
const createDeleteButton = listItem => {
	// Create button
	const deleteButton = document.createElement("button");
	// Append button to parent LI
	listItem.appendChild(deleteButton);
	deleteButton.classList.add('delete-button');
	deleteButton.innerHTML = 'DELETE';
	
	// Give button click event listener
	deleteButton.addEventListener('click', event => {
		event.target.parentElement.remove();
	})
}
​
// Create function to sort list by priority
const sortList = listArray => {
	
}
​
// Add Event Listener for New Task Submit
newTaskForm.addEventListener('submit', logNewTask);