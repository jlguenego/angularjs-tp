import { Reference } from '../interfaces/Reference';
import { ReferenceService } from './reference.service';
import { IHttpService, IHttpResponse } from 'angular';

export class HttpReferenceService extends ReferenceService {

  constructor(private $http: IHttpService) {
    'ngInject';
    super();
    console.log('http service');
  }

  add(ref: Reference) {
    super.add(ref);
    console.log('about to make an http post');
    this.$http.post<Reference>('http://localhost:3000/ws/reference', ref).then(response => {
      console.log('post successfull', response.data);
    }).catch((e: IHttpResponse<any>) => console.error('post error', e));
  }

}
