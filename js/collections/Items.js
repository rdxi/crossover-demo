import Item from '../models/Item';

var Items = Backbone.Collection.extend({
  model: Item,
  url: '/data.json'
});

export default Items;