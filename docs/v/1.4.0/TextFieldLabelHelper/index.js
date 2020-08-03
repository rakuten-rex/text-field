'use strict';

if (process.env.NODE_ENV === 'production') {
  require('./TextFieldLabelHelper.production.min.css');
  module.exports = require('./TextFieldLabelHelper.production.min.js');
} else {
  require('./TextFieldLabelHelper.development.css');
  module.exports = require('./TextFieldLabelHelper.development.js');
}
