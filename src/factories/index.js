import angular from 'angular';

import TodoFactory from './todo.factory.js';

export default angular.module('app.services', [])
    .factory('TodoFactory', TodoFactory)
    .name;