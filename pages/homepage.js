
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  'uri': '/',
  'logo': 'img[title="ThoughtWorks"]',

  open() {
    I.amOnPage(this.uri);
  }

}