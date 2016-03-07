import * as angular from 'angular';
import exampleComponent from '../../components/example/example-component';
import './home.scss';
import routing from './home-routes';


class HomeComponent {
    exampleName: String;

    constructor () {
        this.init();
    }

    private init(): void {
        this.exampleName = '';
    }
}

let homeComponent = {
    template: require('./home.html'),
    controller: HomeComponent
};

export default angular
    .module('app.homeComponent', [ exampleComponent ])
    .config(routing)
    .component('homeComponent', homeComponent)
    .name;
