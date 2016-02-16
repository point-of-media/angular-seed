import angular from 'angular';
import './example.scss';

var ExampleComponent = {
    bindings: {
        name: '='
    },
    templateUrl: require('./example.html')
};

export default angular
    .module('example', [])
    .component('exampleComponent', ExampleComponent)
    .name;
