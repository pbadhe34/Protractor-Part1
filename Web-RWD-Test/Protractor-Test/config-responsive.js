exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

 // seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['./test-responsive.js'],
 

 capabilities: { 
    'browserName': 'chrome',
   
  chromeOptions: {
        args: ['--window-size=490,400']  
    }     
 
  },

 jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 25000,
    isVerbose : true,
    includeStackTrace : true
  } 
 
};