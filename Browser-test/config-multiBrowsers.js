exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

  //seleniumAddress: 'http://localhost:4444/wd/hub',

  //directConnect: true,

  specs: ['./test-spec2.js'],

localSeleniumStandaloneOpts: {
    jvmArgs: [
      '-Dwebdriver.ie.driver=./IEDriverServer3.4.0.exe'
    ]
  },


 multiCapabilities: [{
  'browserName': 'internet explorer'
}, {
  'browserName': 'chrome'
}]
};