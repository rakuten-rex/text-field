'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('../TextFieldLabelHelper.production.min.css');
} else {
  module.exports = require('../TextFieldLabelHelper.development.css');
}
