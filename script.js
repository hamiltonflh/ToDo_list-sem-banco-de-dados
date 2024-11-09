var textInput = document.querySelector('#iadd');
var btn = document.getElementById('btnAdd');
var toDoList = document.querySelector('#lista');
var list = [];
textInput.focus();

function adicionarTarefa(){
    list.push(textInput.value);
    var checkbox = document.createElement("input");
    var item = document.createElement("li");
    var label = document.createElement("label");
    item.setAttribute("class", "item");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "imark");
    label.setAttribute("for", "imark");
    label.textContent = list[list.length-1];
    toDoList.appendChild(item);
    item.appendChild(checkbox);
    item.appendChild(label);
    textInput.value = ""
}

btn.addEventListener("click", adicionarTarefa);

textInput.addEventListener("keydown", function(event) {
    if(event.keyCode === 13) {
        adicionarTarefa();
    }
});