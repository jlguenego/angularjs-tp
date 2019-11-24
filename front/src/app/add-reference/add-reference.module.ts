import { StateProvider } from '@uirouter/angularjs';
import { module } from 'angular';

console.log('about to declare app.addReference');

module('app.addReference', ['ui.router'])
  .component('appAddReferenceForm', require('./form/form.component'))
  .component('appAddReferenceSuccess', require('./success/success.component'))
  .config([
    '$stateProvider',
    ($stateProvider: StateProvider) => {
      $stateProvider.state({
        name: 'add-reference-form',
        url: '/add-reference/form',
        component: 'appAddReferenceForm',
      });
      $stateProvider.state({
        name: 'add-reference-success',
        url: '/add-reference/success',
        component: 'appAddReferenceSuccess',
      });
    },
  ]);
