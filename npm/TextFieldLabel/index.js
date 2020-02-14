'use strict';

if (process.env.NODE_ENV === 'production') {
  require('./TextFieldLabel.production.min.css');
  module.exports = require('./TextFieldLabel.production.min.js');
} else {
  require('./TextFieldLabel.development.css');
  module.exports = require('./TextFieldLabel.development.js');
}
