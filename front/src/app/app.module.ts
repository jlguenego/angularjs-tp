import { module } from 'angular';
import './layout/layout.module';
import '@uirouter/angularjs';

module('app', ['layout', 'ui.router'])
  .component('appRoot', require('./app.component'))
  .component('appHome', require('./routes/home/home.component'))
  .component('appLegal', require('./routes/legal/legal.component'))
  .config(['$stateProvider', function($stateProvider: any) {
    var homeState = {
      name: 'home',
      url: '/',
      component: 'appHome',
    };

    var legalState = {
      name: 'legal',
      url: '/legal',
      component: 'appLegal',
    };

    $stateProvider.state(homeState);
    $stateProvider.state(legalState);
  }]);
