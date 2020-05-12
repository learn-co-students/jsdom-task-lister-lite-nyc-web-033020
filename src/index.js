
const newTaskBar = document.getElementById("create-task-form")

newTaskBar.addEventListener("submit", function(event) {
event.preventDefault()
console.log(event.target[0].value)
});
