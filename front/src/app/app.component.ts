require('./app.component.scss');

module.exports = {
  template: require('./app.component.html'),
  controller: class AppRootController {
    title = 'World';
    constructor() {
      console.log('Instantiating ctrl', this);
    }
  },
};
