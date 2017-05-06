import Backbone from 'Backbone';

var ContainerModel = Backbone.Model.extend({
  defaults: {
    page: 'items'
  }
});

var containerModel = new ContainerModel();

export default containerModel;