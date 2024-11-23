// Seleção dos elementos HTML
var inputText = document.querySelector('#iadd');
var btn = document.querySelector('#btnAdd');
var divTarefas = document.querySelector('.tarefas');
var zeroTarefas = document.querySelector('#titulo_sem_tarefa');

//Adicionar Tarefa

function adicionarTarefa(){
    zeroTarefas.style.display = 'none';
    var geradorTarefa => () {
        geradorCard(inputText.value);
    }
    inputText.value = '';
}

btn.addEventListener('click', adicionarTarefa);


function gereadorCard(inputText){
    var tarefa = document.createElement('div');
    tarefa.className = 'tarefa';

    var btnConcluir = document.createElement('button');
    btnConcluir.id = 'conclude_';
    var iconeCheck = document.createElement('i');
    iconeCheck.className = 'material-symbols-outlined';
    iconeCheck.innerText = 'check';
    btnConcluir.appendChild(iconeCheck);

    var text = document.createElement('p');
    text.innerText = inputText;

    var divOptions = document.createElement('div');
    divOptions.className = 'options';

    var btnEdit = document.createElement('button');
    btnEdit.id = 'edit_';
    var iconeEdit = document.createElement('i');
    iconeEdit.className = 'material-symbols-outlined';
    iconeEdit.innerText = 'edit';
    btnEdit.appendChild(iconeEdit);

    var btnDelete = document.createElement('button');
    btnDelete.className = 'delete_';
    var iconeDelete = document.createElement('i');
    iconeDelete.className = 'material-symbols-outlined';
    iconeCheck.innerText = 'delete';
    btnDelete.appendChild(iconeDelete);

    divOptions.appendChild(btnEdit);
    divOptions.appendChild(btnDelete);



    
    tarefa.appendChild(btnConcluir);
    tarefa.appendChild(text);
    tarefa.appendChild(divOptions);


    divTarefas.appendChild(tarefa);

}