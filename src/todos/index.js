import angular from 'angular';
import uirouter from 'angular-ui-router';

import todosConfig from './todos.config.js';
import todosController from './todos.controller.js';

export default angular.module('app.todos', [uirouter])
    .config(todosConfig)
    .controller('TodosController', todosController)
    .name;