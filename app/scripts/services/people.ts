import * as angular from 'angular';

export interface IPeople {
    all(): angular.IPromise<any[]>;
}

class People implements IPeople {
    private baseUrl: string = './scripts/services/people.json';

    constructor(
        private $http: angular.IHttpService
    ) {}

    public all() {
        return this.$http.get(this.baseUrl)
            .then(response => response.data);
    }
}

export default angular.module('app.people', [])
    .service('people', People)
    .name;
