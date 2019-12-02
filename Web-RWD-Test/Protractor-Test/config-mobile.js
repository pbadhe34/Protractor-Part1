exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

 // seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['./test-Mobile-Spec.js'],
 
  directConnect:true,

 capabilities: { 
    'browserName': 'chrome' ,    
 
    'chromeOptions': { 
      'mobileEmulation' : {       
       'deviceName': "iPhone 5"
      } 
    } 
  
  } 
 
};