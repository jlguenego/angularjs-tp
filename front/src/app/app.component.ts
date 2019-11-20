import { app } from './app.module';

app.component('appRoot', {
  template: '<h1>Hello {{$ctrl.title}}!!!</h1>',
  controller: class AppRootController {
    title = 'World';
    constructor() {
      console.log('Instantiating ctrl', this);
    }
  },
});
