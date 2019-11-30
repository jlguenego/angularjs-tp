import { StateProvider } from '@uirouter/angularjs';
import { module } from 'angular';

console.log('about to declare app.sellReference');

module('app.sellReference', ['ui.router'])
  .component('appSellReferenceList', require('./list/list.component'))
  .component('appSellReferenceDetail', require('./detail/detail.component'))
  .config(($stateProvider: StateProvider) => {
    'ngInject';
    $stateProvider.state({
      name: 'sell-reference-list',
      url: '/sell-reference/list',
      component: 'appSellReferenceList',
    });
    $stateProvider.state({
      name: 'sell-reference-detail',
      url: '/sell-reference/detail',
      component: 'appSellReferenceDetail',
    });
  });
