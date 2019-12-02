
//Run the command in seperate window as to start-selenium to start the selenimum server

 

exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

  seleniumAddress: 'http://localhost:4444/wd/hub',

   specs: ['./test-spec.js'], 
    
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