import * as angular from 'angular';
import './example.scss';


class ExampleComponent {
    constructor () {
        this.init();
    }

    private init(): void {
        console.log('Example Component initialized');
    }
}

let exampleComponent = {
    bindings: {
        name: '='
    },
    template: require('./example.html'),
    controller: ExampleComponent
};

export default angular
    .module('app.exampleComponent', [])
    .component('exampleComponent', exampleComponent)
    .name;
