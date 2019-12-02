
//Run the command in seperate window as npm run start-selenium to start the selenimum server

//then open another cmd window and run 'npm run test'

exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

 // seleniumAddress: 'http://localhost:4444/wd/hub',

//In absence of above selinium server, Local server will be starrted with following options of driver path
 
 
localSeleniumStandaloneOpts: {
    jvmArgs: [
      '-Dwebdriver.chrome.driver=./node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver32.exe'
    ]
  },
 
   specs: ['./test-spec.js'],

   // directConnect: true,
    
  capabilities: {
    browserName: 'chrome'   
  },
   // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000,
        isVerbose: true,
        includeStackTrace: true

    }

};