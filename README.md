# ember-cli-pod-people
Alternate ember-cli pod resolver using /application as a base for all route related paths

## Usage
```
# app/app.js

import Ember from 'ember';
import Resolver from 'ember-cli-pod-people/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
```
