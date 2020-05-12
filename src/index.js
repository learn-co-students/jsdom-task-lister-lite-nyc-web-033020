document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let k = document.querySelector("#create-task-form")
  let ok = k.getElementsByTagName("input")
  let submit = ok[1]
  let tasks = document.querySelector("#tasks")
  submit.addEventListener('click', function(event){
    let newli = document.createElement("li")
    let newtaskfield = document.querySelector("#new-task-description")
    newli.innerText = newtaskfield.value  
    // let deletebutton = document.createElement("button")
    // deletebutton.setAttribute('id',`dbutton-${newtaskfield.value}`)
    // newli.appendChild(deletebutton)
    tasks.appendChild(newli)
    event.preventDefault()
  });
  let d = document.getElementById("delete")
  d.addEventListener('click', function(event){
    let remove = document.querySelector("#new-task-description")
    let xli = remove.value
    let li = document.querySelectorAll("li")
    for(let i = 0; i < li.length; i++) { 
      console.log(li[i])
      console.log(xli)
      if (li[i].textContent === xli) {
      li[i].remove()
      }
    }
    event.preventDefault()
    // let lists = Array.from(document.querySelectorAll("li"))
    // let dbuttons = lists.querySelector("button")
    // dbuttons.addEventListener('click', function(event){
    //   event.target.remove()
    // });


  });
});

