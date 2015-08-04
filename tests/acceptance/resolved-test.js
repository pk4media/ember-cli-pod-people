import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

var application;

module('Acceptance | resolved', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('resolved templates', function(assert) {
  visit('/resolved');

  andThen(function() {
    assert.equal(currentURL(), '/resolved');
    assert.equal(find('h1#resolved-title').text(), 'Resolved correctly');
  });
});

test('resolves routes', function(assert) {
  visit('/myRoute');

  andThen(function() {
    assert.equal(find('#page-content').text(), 'Route resolved');
  });
});

test('resolved controller', function(assert) {
  visit('/myController');

  andThen(function() {
    assert.equal(find('#page-content').text(), 'Controller resolved');
  });
});

test('resolves components', function(assert) {
  visit('/myComponent');

  andThen(function() {
    assert.equal(find('#component-content').text(), 'Component resolved');
  });
});
