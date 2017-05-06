var Item = Backbone.Model.extend({
  defaults: {
    changeId: null,
    owner: null,
    timeStarted: null,
    build: null,
    unitTest: null,
    funcTest: null,
    status: null
  }
});

export default Item;