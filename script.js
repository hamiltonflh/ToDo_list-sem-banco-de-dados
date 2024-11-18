var textInput = document.querySelector('#iadd');
var btn = document.getElementById('btnAdd');
var toDoList = document.querySelector('#lista');

var list = [];
textInput.focus();

function adicionarTarefa(){
    list.push(textInput.value);
    var item = criarItemDeTarefa(textInput.value, list);
    toDoList.appendChild(item);
    textInput.value = ""
}

btn.addEventListener("click", adicionarTarefa);

textInput.addEventListener("keydown", function(event) {
    if(event.keyCode === 13) {
        adicionarTarefa();
    }
});

function criarItemDeTarefa(textInput, list){
    var checkbox = document.createElement("input");
    var item = document.createElement("li");
    var label = document.createElement("label");
    var editImg = document.createElement("img");
    var deleteImg = document.createElement("img");

    editImg.setAttribute("src", "imagens/edit_16dp_E8EAED_FILL0_wght400_GRAD0_opsz20.png");
    editImg.setAttribute("class", "options");
    deleteImg.setAttribute("src", "imagens/delete_forever_16dp_E8EAED_FILL0_wght400_GRAD0_opsz20.png");
    deleteImg.setAttribute("class", "options");
    editImg.id = "editImg_" + list.length;
    deleteImg.id = "deleteImg" + list.length;
    item.setAttribute("class", "item");
    checkbox.setAttribute("type", "checkbox");
    var idCheckbox = "imark_" + list.length;
    checkbox.id = idCheckbox;
    label.setAttribute("for", idCheckbox);
    label.textContent = list[list.length-1];
    item.appendChild(checkbox);
    item.appendChild(label);
    item.appendChild(deleteImg);
    item.appendChild(editImg);


    checkbox.addEventListener("change", () => {
        if(!(checkbox.checked)){
            label.style.textDecoration = "none";
        } else{
            label.style.textDecoration = "line-through"; 
        }     
    });
    return item;
}