import angular from 'angular';
import './example.scss';
import template from './example.html';

var ExampleComponent = {
    bindings: {
        name: '='
    },
    template: template
};

export default angular
    .module('example', [])
    .component('exampleComponent', ExampleComponent)
    .name;
