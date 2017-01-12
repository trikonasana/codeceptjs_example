exports.config = {
    helpers: {
        WebDriverIO: {
            host: 'hub.crossbrowsertesting.com',
            port: 80,
            path: '/wd/hub',
            url: 'http://www.thoughtworks.de',
            browser: 'internet explorer',
            coloredLogs: true,
            desiredCapabilities: {
                name : 'TW Demo',
                build : '0.1',

                browserName : 'internet explorer',
                browser_api_name : 'IE10',
                os_api_name : 'Win7x64-C2',
                screen_resolution : '1280x1024',

                record_video : 'true',
                record_network : 'true',

                username : 'username',
                password : 'authkey'
            }
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