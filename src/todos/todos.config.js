todosConfig.$inject = ['$stateProvider'];

export default function todosConfig($stateProvider) {
    $stateProvider
        .state('todos', {
            url: '/todos',
            template: require('./todos.html'),
            controller: 'TodosController',
            controllerAs: 'todo'
        });
}