require('./styles.scss');
import * as angular from 'angular';
import './app/app.module';

declare global {
  const PRODUCTION: boolean;
}

if (!PRODUCTION) {
  console.log('this is not production...');
}

console.log('started');

angular.bootstrap(document, ['app'], {
  strictDi: true,
});
