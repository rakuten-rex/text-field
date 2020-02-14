'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('../LabelUi.production.min.css');
} else {
  module.exports = require('../LabelUi.development.css');
}
