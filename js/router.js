import Backbone from 'Backbone';
import rootModel from './models/RootModel';
import $ from 'jquery';


var Router = Backbone.Router.extend({

  routes: {
    "":            "items",
    "home":        "home",
    "about":       "about",
    "items": "items",
    "items/:page": "items"
  },

  home: function() {
    rootModel.set({page: 'home'});
  },

  about: function() {
    rootModel.set({page: 'about'});
  },

  items: function (page) {
    rootModel.set({page: 'items'});
  }
});

export default Router;