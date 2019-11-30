import { ReferenceService } from '../../services/reference.service';

require('./list.component.scss');

module.exports = {
  template: require('./list.component.html'),
  controller: class ListController {
    constructor(public reference: ReferenceService) {
      'ngInject';
    }
  },
};
