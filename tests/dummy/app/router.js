import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('resolved');
  this.route('myRoute');
  this.route('myController');
  this.route('myComponent');
});

export default Router;
