import { module } from 'angular';

declare global {
  const PRODUCTION: boolean;
}

if (!PRODUCTION) {
  console.log('this is not production...');
}

const app = module('app', []);

app.component('appRoot', {
  template: '<h1>Hello {{$ctrl.title}}!!!</h1>',
  controller: class AppRootController {
    title = 'World';
    constructor() {
      console.log('Instantiating ctrl', this);
    }
  },
});
