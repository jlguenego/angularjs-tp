import { IScope } from 'angular';

require('./form.component.scss');

interface AddReferenceFormData {
  label?: string;
  category?: string;
  quantity?: number;
  price?: number;
}

module.exports = {
  template: require('./form.component.html'),
  controller: class FormController {
    data: AddReferenceFormData = {};
    constructor($scope: IScope) {
      'ngInject';
      $scope.$watch(
        '$ctrl.data',
        () => {
          console.log('$ctrl.data', this.data);
        },
        true
      );
    }
  },
};
