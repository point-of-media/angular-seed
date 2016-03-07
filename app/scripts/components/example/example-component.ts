import * as angular from 'angular';
import './example.scss';


class ExampleComponent {
    name: String;

    constructor () {
        this.init();
    }

    private init(): void {
        this.name = '';
        console.log('Component initialized');
    }
}

let exampleComponent = {
    template: require('./example.html'),
    controller: ExampleComponent
};

export default angular
    .module('app.exampleComponent', [])
    .component('exampleComponent', exampleComponent)
    .name;
