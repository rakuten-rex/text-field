'use strict';

if (process.env.NODE_ENV === 'production') {
  require('./HelperUi.production.min.css');
  module.exports = require('./HelperUi.production.min.js');
} else {
  require('./HelperUi.development.css');
  module.exports = require('./HelperUi.development.js');
}
