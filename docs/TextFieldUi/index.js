'use strict';

if (process.env.NODE_ENV === 'production') {
  require('./TextFieldUi.production.min.css');
  module.exports = require('./TextFieldUi.production.min.js');
} else {
  require('./TextFieldUi.development.css');
  module.exports = require('./TextFieldUi.development.js');
}
