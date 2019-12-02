exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

 // seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['test-spec.js'],

 directConnect:true,

capabilities: {
  //'browserName': 'phantomjs',

  browserName: 'chrome',

  chromeOptions: {
     args: [ "--headless", "--disable-gpu", "--window-size=700,500" ]
   }
}
   
};

 