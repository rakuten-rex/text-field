'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('../TextFieldHelper.production.min.css');
} else {
  module.exports = require('../TextFieldHelper.development.css');
}
