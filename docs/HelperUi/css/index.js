'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('../HelperUi.production.min.css');
} else {
  module.exports = require('../HelperUi.development.css');
}
