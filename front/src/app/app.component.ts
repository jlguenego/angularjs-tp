import { app } from './app.module';

require('./app.component.scss');

app.component('appRoot', {
  template: require('./app.component.html'),
  controller: class AppRootController {
    title = 'World';
    constructor() {
      console.log('Instantiating ctrl', this);
    }
  },
});
