import * as angular from 'angular';

import exampleComponent from './scripts/components/example/example-component';

angular.module('app', ['exampleComponent']);

angular.bootstrap(document.documentElement, ['app']);
