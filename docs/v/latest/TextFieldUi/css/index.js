'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('../TextFieldUi.production.min.css');
} else {
  module.exports = require('../TextFieldUi.development.css');
}
