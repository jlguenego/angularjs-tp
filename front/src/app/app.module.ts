import { module } from 'angular';
import './layout/layout.module';

module('app', ['layout']).component('appRoot', require('./app.component'));
