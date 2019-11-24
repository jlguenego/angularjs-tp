import '@uirouter/angularjs';
import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs';
import { ILocationProvider, module } from 'angular';
import 'oclazyload';
import './layout/layout.module';

module('app', ['layout', 'ui.router', 'oc.lazyLoad'])
  .component('appRoot', require('./app.component'))
  .component('appHome', require('./routes/home/home.component'))
  .component('appLegal', require('./routes/legal/legal.component'))
  .config(($locationProvider: ILocationProvider) => {
    'ngInject';
    $locationProvider.html5Mode(true);
  })
  .config(($stateProvider: StateProvider) => {
    'ngInject';
    $stateProvider.state({ name: 'home', url: '/', component: 'appHome' });
    $stateProvider.state({ name: 'legal', url: '/legal', component: 'appLegal' });
    $stateProvider.state({
      name: 'add-reference-form.**',
      url: '/add-reference',
      lazyLoad: async (transition, state) => {
        await import(/* webpackChunkName: "add-reference" */ './add-reference/add-reference.module');
        transition
          .injector()
          .get('$ocLazyLoad')
          .load({ name: 'app.addReference' });
        return {};
      },
    });
  })
  .config(($urlRouterProvider: UrlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/');
  });
