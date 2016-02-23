import * as angular from 'angular';
//import './example.scss';

var exampleComponent = {
    bindings: {
        name: '='
    },
    templateUrl: './scripts/components/example/example.html',
    controller: ExampleComponent
};

class ExampleComponent {
    constructor () {
        this.init();
    }

    private init(): void {
        console.log('Component initialized');
    }
}

export default angular
    .module('example', [])
    .component('exampleComponent', exampleComponent)
    .name;
