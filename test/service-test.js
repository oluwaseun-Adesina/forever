/*
 * forever-test.js: Tests for forever module
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 *
 */

var assert = require('assert'),
    path = require('path'),
    vows = require('vows'),
    forever = require('../lib/forever');

vows.describe('forever/service').addBatch({
  "When using forever": {
    "the service module": {
      "should have the correct exports": function () {
        assert.isObject(forever.service);
        assert.isFunction(forever.service.Service);
        assert.isObject(forever.service.adapters);
        assert.isFunction(forever.service.adapters.initd)
      }
    }
  }
}).export(module);