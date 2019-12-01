import { Reference } from '../interfaces/Reference';
import { ReferenceService } from './reference.service';
import { IHttpService, IHttpResponse } from 'angular';

export class HttpReferenceService extends ReferenceService {
  ws = new WebSocket('ws://localhost:3000/my/websocket/path');
  constructor(private $http: IHttpService) {
    'ngInject';
    super();
    console.log('http service');
    this.refresh();
    this.webSocketInit();
  }

  webSocketInit() {
    this.ws.onopen = event => {
      this.ws.send('Hi!');
    };
  }

  refresh() {
    this.$http
      .get<Reference[]>('http://localhost:3000/ws/reference')
      .then(response => {
        console.log('get successfull', response.data);
        this.references = response.data;
        this.setReferences();
      })
      .catch((e: IHttpResponse<any>) => console.error('get error', e));
  }

  add(ref: Reference) {
    super.add(ref);
    console.log('about to make an http post');
    this.$http
      .post<Reference>('http://localhost:3000/ws/reference', ref)
      .then(response => {
        console.log('post successfull', response.data);
      })
      .catch((e: IHttpResponse<any>) => console.error('post error', e));
  }
}
