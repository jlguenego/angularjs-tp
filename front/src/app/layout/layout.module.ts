import '@uirouter/angularjs';
import { module } from 'angular';

module('layout', ['ui.router'])
  .component('layoutLayout', require('./layout/layout.component'))
  .component('layoutHeader', require('./header/header.component'))
  .component('layoutBody', require('./body/body.component'))
  .component('layoutFooter', require('./footer/footer.component'));
