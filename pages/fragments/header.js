
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../../steps_file.js')();
  },

  languageMenu: 'ul[id="language_switchers"]',
  langauge: {
    spanishLink: 'ESPAÑOL',
    spanishLinkElement: 'a[title="Spanish version of ThoughtWorks website"]',
    portugueseLinkElement: 'a[title="Portuguese version of ThoughtWorks website"]',
    englishLinkElement: 'a[title="English version of ThoughtWorks website"]',
    chineseLinkElement: 'a[title="Chinese version of ThoughtWorks website"]',
  },
  utilities: {
    menu: 'ul[id="util_menu"]',
    search: {
      form: 'form[action="/de/search"]',
      inputField: 'input[name="q"]',
      submitButton: 'buttom[class="search-bar__button"]'
    },
    newsLink: 'a[href="/de/news"]',
    contactLink: 'a[href="/de/contact-us"]'
  }

}