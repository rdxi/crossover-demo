import $ from 'jquery';
import Router from './router.js';
import RootView from './views/RootView';
import rootModel from './models/RootModel';

console.log('app.js start');

var rootView = new RootView({model: rootModel});
$('body').append(rootView.$el);

var router = new Router();
Backbone.history.start();