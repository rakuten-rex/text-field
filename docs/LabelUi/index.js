'use strict';

if (process.env.NODE_ENV === 'production') {
  require('./LabelUi.production.min.css');
  module.exports = require('./LabelUi.production.min.js');
} else {
  require('./LabelUi.development.css');
  module.exports = require('./LabelUi.development.js');
}
