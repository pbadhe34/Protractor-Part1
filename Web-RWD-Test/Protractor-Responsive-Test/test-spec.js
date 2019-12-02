describe('Protractor Demo App', function() {

 beforeEach(function(){
       //disable angular detection for non-angular sites
        browser.ignoreSynchronization = true;
	});

  it('should have a title', function() {
    browser.get('http://localhost:8090/app/index1.html/');
    browser.pause();
    expect(browser.getTitle()).toEqual('My App');
  });
}); 

 