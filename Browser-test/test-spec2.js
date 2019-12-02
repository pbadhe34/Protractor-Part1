describe('Protractor Demo App', function() {

   
    beforeEach(()=> {
       //disable angular detection for non-angular sites     
        browser.waitForAngularEnabled(false)
    })



  it('should have a title', function()  {    
    
    browser.get('https://www.google.co.in/');
    expect(browser.getTitle()).toEqual('Google');
    //browser.pause();
  });
}); 

 