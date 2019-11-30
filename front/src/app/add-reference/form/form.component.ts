import { IScope } from 'angular';
import { ReferenceService } from '../../services/reference.service';
import { Reference } from '../../interfaces/Reference';
import { StateService } from '@uirouter/core';

require('./form.component.scss');

module.exports = {
  template: require('./form.component.html'),
  controller: class FormController {
    data: Reference = {
      label: 'Tournevis',
      category: 'Outils',
      quantity: 123,
      price: 3.20
    };
    f: FormController;
    constructor(private $scope: IScope, private reference: ReferenceService, private $state: StateService) {
      'ngInject';
      $scope.$watch(
        '$ctrl.data',
        () => {
          console.log('$ctrl.data', this.data, this.f);
        },
        true
      );
    }

    submit() {
      this.reference.add(this.data);
      this.$state.go('add-reference-success');
    }
  },
};
