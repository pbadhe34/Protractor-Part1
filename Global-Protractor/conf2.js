exports.config = {
//No initial running selenim  server:
// Protractor will start the selenium server

//Protractor uses selenium browser driver to connect to browsers 

  
 //Run without selenium
  directConnect: true,

  specs: ['test-spec.js'],
  

  capabilities: {
    browserName: 'chrome'     
  }
};