import { StateParams, StateService } from '@uirouter/core';
import { ReferenceService } from '../../services/reference.service';
import { Reference } from '../../interfaces/Reference';

require('./detail.component.scss');

module.exports = {
  template: require('./detail.component.html'),
  controller: class DetailController {
    r: Reference;
    constructor(private $stateParams: StateParams, private reference: ReferenceService, private $state: StateService) {
      'ngInject';
      console.log('$stateParams: ', $stateParams);
      const id = $stateParams.myIndex;
      this.r = reference.references.find(r => r.id === id);
      if (this.r === undefined) {
        $state.go('home');
      }
    }
  },
};
