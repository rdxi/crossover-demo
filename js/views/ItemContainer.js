import $ from 'jquery';
import _ from 'underscore';
import ItemView from './Item';
import ItemsCollection from '../collections/Items';

var Items = Backbone.View.extend({

  tagName: 'ul',
  className: 'item-container',

  initialize: function () {
    this.collection = new ItemsCollection();
    this.collection.fetch({reset: true});

    this.listenTo(this.collection, 'reset', this.render);
  },

  render: function() {
    var self = this;

    this.$el.html('');
    this.$el.append(this.tableHeader);

    this.collection.each(function (item) {
      var itemView = new ItemView({model: item});
      itemView.render().$el.appendTo(self.el);
    });

    this.$el.html(this.html);

    return this;
  },

  tableHeader:
          '<li class="item item-header pure-g">' +
            '<div class="changeId pure-u-1 pure-u-md-4-24"><span>Changelist</span></div>'+
            '<div class="owner pure-u-1 pure-u-md-3-24"><span>Owner</span></div>'+
            '<div class="timeStarted pure-u-1 pure-u-md-5-24"><span>Time Started</span></div>'+
            '<div class="timeline pure-u-1 pure-u-md-8-24">'+
              '<span>'+
                '<div class="build icon">Build</div>'+
                '<div class="unitTest icon">Unit Test</div>'+
                '<div class="funcTest icon">Functional Test</div>'+
              '</span>'+
            '</div>'+
            '<div class="status pure-u-1 pure-u-md-4-24"><span>Status</span></div>' +
          '</li>'

});

export default Items;