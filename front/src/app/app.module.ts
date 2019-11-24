import '@uirouter/angularjs';
import { module } from 'angular';
import './add-reference/add-reference.module';
import './layout/layout.module';

module('app', ['layout', 'ui.router', 'app.addReference'])
  .component('appRoot', require('./app.component'))
  .component('appHome', require('./routes/home/home.component'))
  .component('appLegal', require('./routes/legal/legal.component'))
  .config(['$stateProvider', ($stateProvider: any) => {
    const homeState = {
      name: 'home',
      url: '/',
      component: 'appHome',
    };

    const legalState = {
      name: 'legal',
      url: '/legal',
      component: 'appLegal',
    };

    $stateProvider.state(homeState);
    $stateProvider.state(legalState);
  }]);
