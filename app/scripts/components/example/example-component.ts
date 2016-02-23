import * as angular from 'angular';
//import './example.scss';
//import template from './example.html';

var ExampleComponent = {
    bindings: {
        name: '='
    },
    templateUrl: './scripts/components/example/example.html'
};

export default angular
    .module('example', [])
    .component('exampleComponent', ExampleComponent)
    .name;
