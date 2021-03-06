exports.config = {
    helpers: {
        WebDriverIO: {
            url: 'http://www.thoughtworks.de',
            browser: 'firefox'
        }
    },
    tests: './*_test.js',
    timeout: 10000,
    output: './output',
    include: {
        I: './steps_file.js',
        homepage: './pages/home/homepage.js',
        contact: './pages/contact/contact.js',
        header: './pages/fragments/header.js',
        footer: './pages/fragments/footer.js'
    },
    bootstrap: false,
    mocha: {},
    name: 'automation_practices'
};