exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

 // seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: ['./test-spec.js'],

  capabilities: {
    browserName: 'chrome'   
  }
};