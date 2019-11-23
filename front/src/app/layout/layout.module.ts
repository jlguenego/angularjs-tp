import { module } from 'angular';

export const layout = module('layout', [])
  .component('layoutLayout', require('./layout/layout.component'))
  .component('layoutHeader', require('./header/header.component'))
  .component('layoutBody', require('./body/body.component'))
  .component('layoutFooter', require('./footer/footer.component'));
