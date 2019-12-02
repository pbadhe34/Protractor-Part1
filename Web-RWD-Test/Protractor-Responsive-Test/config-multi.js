exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

 // seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['./test-spec.js'],
 

 capabilities: { 
    'browserName': 'chrome', 
      
/*
    'chromeOptions': { 
      'mobileEmulation' : {       
       'deviceName': "iPhone 4"
      } 
    } 
 */
  }

/*
multiCapabilities: [
        {
            browserName: 'firefox'
        },
        {
            browserName: 'chrome'
        },
        {
            browserName: 'chrome',
            'chromeOptions': {
                'mobileEmulation': {
                    'deviceName': 'Google Nexus 5'
                }
            }
        },
        {
            browserName: 'chrome',
            'chromeOptions': {
                'mobileEmulation': {
                    'deviceName': 'Apple iPhone 6'
                }
            }
        },
    ]
*/
};