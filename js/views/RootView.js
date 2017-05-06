import Backbone from 'Backbone';
import $ from 'jquery';
import ItemContainer from './ItemContainer';

var ContainerView = Backbone.View.extend({

  className: 'container',

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);

    this.itemContainerView = new ItemContainer();

    this.render();
  },

  render: function() {
    var page = this.model.get('page');

    var html = '<h1>' + this.model.get('page') + '</h1>';

    if (page === 'items') {
      html = this.itemContainerView.render().el;
    }

    this.$el.html(html);
    return this;
  }

});

export default ContainerView;