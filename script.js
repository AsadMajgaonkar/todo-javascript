let btnAdd = document.getElementById("btnAdd");
let inputTask = document.getElementById("inputTask");
const ul = document.getElementById("ul");

btnAdd.addEventListener('click', addTask);

function addTask(e) {
    if (ul.children[0].id == "initialLi") {
        console.log("dlt");
        let li = document.getElementById("initialLi");
        li.remove();
    }
    let li = document.createElement("li");
    li.setAttribute('class', 'list-group-item d-flex')
    li.innerHTML = `<h5 class="flex-grow-1">${inputTask.value}</h5>
    <button class="btn btn-warning mx-2 " onclick="editTask(this)">Edit</button>
    <button class="btn btn-danger py-0" onclick="removeTask(this)">Remove</button>`;
    ul.appendChild(li);
    inputTask.value = "";

}

function removeTask(element) {
    element.parentElement.remove();
    if (ul.children.length == 0) {
        let li = document.createElement("li");
        li.id = "initialLi";
        li.setAttribute('class', 'list-group-item')
        li.appendChild(document.createTextNode("Nothing To Do"));
        ul.appendChild(li);
    }
}

function editTask(element) {
    let newInput = prompt("Edit Title");
    console.log(element.parentElement.children[0].textContent = newInput);
}

if (ul.children.length == 0) {
    let li = document.createElement("li");
    li.id = "initialLi";
    li.setAttribute('class', 'list-group-item')
    li.appendChild(document.createTextNode("Nothing To Do"));
    ul.appendChild(li);
}

