Feature('FirstFeature');

Scenario('some clicking around', (I,homepage,header,contact) => {
    homepage.open();
    I.see(header.langauge.spanishLink);
    I.seeElement(header.langauge.spanishLinkElement);
    contact.open();
    I.seeElement(header.utilities.search.inputField);
});
