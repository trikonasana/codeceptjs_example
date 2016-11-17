Feature('FirstFeature');

Scenario('some clicking around', (I,homepage,contact) => {
    homepage.open();
    I.see(homepage.logo);
    contact.open();
    I.see(homepage.logo);
});
