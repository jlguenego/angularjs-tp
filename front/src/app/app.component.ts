import { app } from './app.module';

app.component('appRoot', {
  template: require('./app.component.html'),
  controller: class AppRootController {
    title = 'World';
    constructor() {
      console.log('Instantiating ctrl', this);
    }
  },
});
