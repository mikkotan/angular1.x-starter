import angular from 'angular'
import uirouter from 'angular-ui-router'

import homeController from './home.controller.js';
import homeConfig from './home.config.js';

export default angular.module('app.home', [uirouter])
    .config(homeConfig)
    .controller('HomeController', homeController)
    .name;