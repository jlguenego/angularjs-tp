import '@uirouter/angularjs';
import { module } from 'angular';

module('app.addReference', ['ui.router'])
  .component('appAddReferenceForm', require('./form/form.component'))
  .component('appAddReferenceSuccess', require('./success/success.component'))
  .config([
    '$stateProvider',
    ($stateProvider: any) => {
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
