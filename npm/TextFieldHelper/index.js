'use strict';

if (process.env.NODE_ENV === 'production') {
  require('./TextFieldHelper.production.min.css');
  module.exports = require('./TextFieldHelper.production.min.js');
} else {
  require('./TextFieldHelper.development.css');
  module.exports = require('./TextFieldHelper.development.js');
}
