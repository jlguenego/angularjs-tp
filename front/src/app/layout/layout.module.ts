import { module } from 'angular';
import '@uirouter/angularjs';

export const layout = module('layout', ['ui.router'])
  .component('layoutLayout', require('./layout/layout.component'))
  .component('layoutHeader', require('./header/header.component'))
  .component('layoutBody', require('./body/body.component'))
  .component('layoutFooter', require('./footer/footer.component'));
