import { Reference } from '../interfaces/Reference';
import { ReferenceService } from './reference.service';
import { IHttpService } from 'angular';

export class HttpReferenceService extends ReferenceService {

  constructor(private $http: IHttpService) {
    'ngInject';
    super();
    console.log('http service');
  }

  add(ref: Reference) {
    super.add(ref);
    console.log('about to make an http post');
  }

}
