import '@uirouter/angularjs';
import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs';
import { module } from 'angular';
import 'oclazyload';
import './layout/layout.module';

module('app', ['layout', 'ui.router', 'oc.lazyLoad'])
  .component('appRoot', require('./app.component'))
  .component('appHome', require('./routes/home/home.component'))
  .component('appLegal', require('./routes/legal/legal.component'))
  .config([
    '$stateProvider',
    ($stateProvider: StateProvider) => {
      $stateProvider.state({ name: 'home', url: '/', component: 'appHome' });
      $stateProvider.state({ name: 'legal', url: '/legal', component: 'appLegal' });
      $stateProvider.state({
        name: 'add-reference-form.**',
        url: '/add-reference-form',
        lazyLoad: async (transition, state) => {
          await import(/* webpackChunkName: "add-reference" */ './add-reference/add-reference.module');
          transition
            .injector()
            .get('$ocLazyLoad')
            .load({ name: 'app.addReference' });
          return {};
        },
      });
    },
  ])
  .config([
    '$urlRouterProvider',
    ($urlRouterProvider: UrlRouterProvider) => {
      $urlRouterProvider.otherwise('/');
    },
  ]);
