import * as angular from 'angular';
import './example.scss';
import people, {IPeople} from '../../services/people';


class ExampleComponent {
    name: String;
    stars: any[];
    people: IPeople;

    constructor (people: IPeople) {
        this.init();
        this.people = people;
        this.fetchStars();
    }

    private init(): void {
        console.log('Example Component initialized');
    }

    private fetchStars() {
        this.people.all().then((response) => {
            this.stars = response;
            return this.stars;
        });
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
    .module('app.exampleComponent', [people])
    .component('exampleComponent', exampleComponent)
    .name;
