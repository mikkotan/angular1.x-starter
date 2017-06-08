import angular from 'angular';
import uirouter from 'angular-ui-router';

import config from './app.config';
import homeModule from './home';
import todosModule from './todos';

export default angular.module('app', [uirouter, homeModule, todosModule])
    .config(config)