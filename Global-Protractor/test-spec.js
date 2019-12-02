describe('Protractor Test Page', function() {
 
 beforeEach(function(){
       //disable angular detection in web page
        browser.ignoreSynchronization = true;
      // browser. waitForAngularEnabled(false)
	});

   //Detect the browser type
  
  it('should have a title', function() {
    //debugger;
    browser.get('http://www.google.com/');


   browser.getCapabilities().then(function(caps) {
                console.log("The test running in  "+caps.get('browserName'));
});
     
     //browser.sleep(10000); 
      

   //Check the title of web page 
     browser.getTitle().then(function(webpagetitle){
           console.log("The page title read is "+webpagetitle);
     });


    //browser.debugger();

  

    //verify the title of web page

    expect(browser.getTitle()).toEqual('Google');   

   
  });
}); 

 