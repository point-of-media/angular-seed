import angular from 'angular';

import exampelComponent from './scripts/components/example/example-component';

angular.module('app', ['example']);

angular.bootstrap(document.documentElement, ['app']);
