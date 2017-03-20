
// criamos nosso aplicativo angular
var app = angular.module("listaTarefasApp", []);

// vamos então, definir um controlador (controller)
// para nossa view (a pagina) do nosso aplicativo
app.controller("listaTarefasController", listaTarefasController);

/**
 * Controlador da nossa aplicação
 * @param {Object} $log logger padrão do Angular
 */
function listaTarefasController(
    $log
) {
    //uma referência para ajudar no entendimento
    var vm = this;

    //lista de tarefas
    vm.tarefas = [];

    var teste = criarTarefa();
    teste.editando = true;
    teste.titulo = "Hello world!";
    vm.tarefas.push(teste);

    //objeto para criação de novas tarefas
    vm.tarefaObj = criarTarefa();

    /**
     * Cria um novo objeto de tarefa
     * @returns {Tarefa}
     */
    function criarTarefa() {
        return new Tarefa(vm.tarefas.length);
    }

    /**
     * Adiciona uma nova tarefa a lista
     */
    function novaTarefa() {
        $log.debug("Criando nova tarefa.");

        vm.tarefas.push(vm.tarefaObj);

        vm.tarefaObj = criarTarefa();
    }
    //desta forma, expomos essa função ao objeto gerado pelo nosso controller
    //diferentemente da função criarTarefa que não é exibida publicamente 
    vm.novaTarefa = novaTarefa;

    /**
     * Finaliza a edição da tarefa
     * @param {Tarefa} tarefa 
     */
    function salvar(tarefa) {
        $log.debug("Salvando item: %s.", tarefa.titulo);
        tarefa.editando = false;
    }
    vm.salvar = salvar;

    /**
     * Finaliza a edição da tarefa
     * @param {Tarefa} tarefa 
     */
    function remover(tarefa) {
        $log.debug("Removendo item: %s.", tarefa.titulo);

        vm.tarefas = vm.tarefas.filter(function (t) {
            return t.id !== tarefa.id;
        });
    }
    vm.remover = remover;

    /**
     * Coloca uma tarefa em edição
     * @param {Tarefa} tarefa 
     */
    function editar(tarefa) {
        $log.debug("Iniciando edição do item: %s.", tarefa.titulo);
        tarefa.editando = true;
    }
    vm.editar = editar;

    //retornamos o nosso objeto do controller
    return vm;
}

listaTarefasController.$inject = [
    "$log"
];




/**
 * Nosso construtor do nosso objeto de tarefa
 * @param {number} id Id da tarefa
 */
function Tarefa(id) {
    this.id = id;
    this.titulo = '';
    this.editando = false;

    return this;
}
