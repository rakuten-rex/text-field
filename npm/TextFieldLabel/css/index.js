'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('../TextFieldLabel.production.min.css');
} else {
  module.exports = require('../TextFieldLabel.development.css');
}
