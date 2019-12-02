exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

 // seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['./test-spec.js'],
 

 capabilities: { 
    'browserName': 'chrome'
      
/*
    'chromeOptions': { 
      'mobileEmulation' : {       
       'deviceName': "iPhone 4"
      } 
    } 
 */
  },

 jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 25000,
    isVerbose : true,
    includeStackTrace : true
  } 
 
};