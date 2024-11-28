// Seleção dos elementos HTML
var inputText = document.querySelector('#iadd');
var btn = document.querySelector('#btnAdd');
var divTarefas = document.querySelector('.tarefas');
var zeroTarefas = document.querySelector('#titulo_sem_tarefa');




//Funções para as Tarefas...
function geradorCard(inputText){
    var tarefa = document.createElement('div');
    tarefa.className = 'tarefa';

    var btnConcluir = document.createElement('button');
    btnConcluir.id = 'conclude_';
    var iconeCheck = document.createElement('i');
    iconeCheck.className = 'material-symbols-outlined';
    iconeCheck.innerHTML = 'check';
    btnConcluir.appendChild(iconeCheck);

    var text = document.createElement('p');
    text.innerHTML= inputText;

    var divOptions = document.createElement('div');
    divOptions.className = 'options';

    var btnEdit = document.createElement('button');
    btnEdit.id = 'edit_';
    var iconeEdit = document.createElement('i');
    iconeEdit.className = 'material-symbols-outlined';
    iconeEdit.innerHTML = 'edit';
    btnEdit.appendChild(iconeEdit);

    var btnDelete = document.createElement('button');
    btnDelete.className = 'delete_';
    var iconeDelete = document.createElement('i');
    iconeDelete.className = 'material-symbols-outlined';
    iconeDelete.innerHTML = 'delete';
    btnDelete.appendChild(iconeDelete);

    divOptions.appendChild(btnEdit);
    divOptions.appendChild(btnDelete);

    tarefa.appendChild(btnConcluir);
    tarefa.appendChild(text);
    tarefa.appendChild(divOptions);

    btnConcluir.addEventListener('click', function(event) {
        if(tarefa.className == "tarefa"){
            tarefa.className = "tarefa_done";
        } else{
            tarefa.className = "tarefa";
        }
    });


    return tarefa;
}

function adicionarTarefa(){
    if(inputText.value !== ''){
        zeroTarefas.style.display = 'none';
        divTarefas.appendChild(geradorCard(inputText.value));
        inputText.value = '';
        inputText.placeholder = 'Adicione uma tarefa';
    } else{
        inputText.placeholder = 'Digite uma tarefa!!';
    }

}

btn.addEventListener('click', adicionarTarefa);

inputText.addEventListener('keypress', function(event) {
    if(event.key === 'Enter'){
        adicionarTarefa();
    }
})

