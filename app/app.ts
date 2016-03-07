import * as angular from 'angular';

import homeComponent from './scripts/views/home/home-component';
import routing from './app-routes';
import 'angular-ui-router';

angular
    .module('app', [
        'ui.router',
        homeComponent
    ])
    .config(routing);

angular.bootstrap(document.documentElement, ['app']);
