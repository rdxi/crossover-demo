import $ from 'jquery';
import _ from 'underscore';
import piechart from 'piechart';

var Items = Backbone.View.extend({

  tagName: 'li',
  className: 'item pure-g',

  events: {
    'click': 'toggleDetails'
  },

  render: function() {
    this.$el.addClass(this.model.get('status'));
    this.$el.html( this.template(this.model.toJSON()) );

    if (this.model.get('details').showPie === true) {
      this.addPieChart();
    } else {
      this.$el.find('.testError').show();
    }

    return this;
  },

  toggleDetails: function (e) {
    var isDetails = $(e.target).closest('.details').length > 0;

    if(!isDetails) {
      var thisEl = $(this.el);
      var otherEls = $(this.el).parents('ul').find('li').not(thisEl);

      thisEl
        .toggleClass('active')
        .find('.details').slideToggle(100);

      otherEls
        .removeClass('active')
        .find('.details').slideUp(100);
    }

  },

  addPieChart: function () {
    var unitCanvas = this.$el.find('.details-unitTest .pie canvas')[0];
    var funcCanvas = this.$el.find('.details-funcTest .pie canvas')[0];

    var unitSlice1 = {
      value: this.model.get('details').unitSlice1,
      color: '#1ab394'
    };

    var unitSlice2 = {
      value: this.model.get('details').unitSlice2,
      color: '#f8ac59'
    };

    var funcSlice1 = {
      value: this.model.get('details').funcSlice1,
      color: '#1ab394'
    };

    var funcSlice2 = {
      value: this.model.get('details').funcSlice2,
      color: '#f8ac59'
    };

    piechart(unitCanvas, [unitSlice1, unitSlice2]);
    piechart(funcCanvas, [funcSlice1, funcSlice2]);

  },

  template: _.template(
            '<div class="changeId pure-u-1 pure-u-md-4-24"><span><%= changeId %></span></div>'+
            '<div class="owner pure-u-1 pure-u-md-3-24"><span><%= owner %></span></div>'+
            '<div class="timeStarted pure-u-1 pure-u-md-5-24"><span><%= timeStarted.date %> <span class="time"><%= timeStarted.time %></span></span></div>'+
            '<div class="timeline pure-u-1 pure-u-md-8-24 <%= status %>">'+
              '<span>'+
                '<div class="build icon <%= build %>"></div>'+
                '<div class="unitTest icon <%= unitTest %>"></div>'+
                '<div class="funcTest icon <%= funcTest %>"></div>'+
                '<div class="line-wrap"><div class="line" style="width: <%= progress %>% ;"></div></div>'+
              '</span>'+
            '</div>'+
            '<div class="status pure-u-1 pure-u-md-4-24">' +
              '<span><%= status %></span>' +
              '<div class="bigstatus"><span>Build <br><%= status %></span></div>' +
            '</div>'+

            '<div class="details pure-g">' +
              '<div class="details-build pure-u-1 pure-u-md-4-24 pure-g">'+
                '<div class="details-title pure-u-1-3 pure-u-md-1-3 <%= details.build %>">'+
                  '<div class="details-text">Build</div>'+
                  '<div class="details-time"><%= timeStarted.time %></div>'+
                '</div>' +
                '<div class="details-link pure-u-1-3 pure-u-md-1-3"><a href="#">debug</a></div>' +
                '<div class="details-link <%= details.build %> pure-u-1-3 pure-u-md-1-3"><a href="#">release</a></div>' +
              '</div>' +
              '<div class="details-unitTest pure-u-1 pure-u-md-8-24 pure-gg">'+
                '<div class="details-title <%= details.unit %> pure-u-1 pure-u-md-1-3">' +
                  '<div class="details-text">Unit Test</div>' +
                  '<div class="percentage">' +
                    '<span><%= details.unitPercent %></span>%' +
                    '<span class="testError">Status: <span><%= details.showError %></span></span>' +
                  '</div>' +
                '</div>' +
                '<div class="pie pure-u-1 pure-u-md-2-3">' +
                  '<canvas width="66" height="66"></canvas>' +
                  '<div class="legend">' +
                    '<div class="passed"><%= details.funcPassed %></div>' +
                    '<div class="pending"><%= details.funcPending %></div>' +
                    '<div class="time"><%= details.funcTime %></div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<div class="details-funcTest pure-u-1 pure-u-md-8-24 pure-g">'+
                '<div class="details-title <%= details.func %> pure-u-1 pure-u-md-1-3">' +
                  '<div class="details-text">Functional Test</div>' +
                  '<div class="percentage">' +
                    '<span><%= details.unitPercent %></span>%' +
                    '<span class="testError">Status: <span><%= details.showError %></span></span>' +
                  '</div>' +
                '</div>' +
                '<div class="pie pure-u-1 pure-u-md-2-3">' +
                  '<canvas width="66" height="66"></canvas>' +
                  '<div class="legend">' +
                    '<div class="passed"><%= details.funcPassed %></div>' +
                    '<div class="pending"><%= details.funcPending %></div>' +
                    '<div class="time"><%= details.funcTime %></div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>')

});

export default Items;