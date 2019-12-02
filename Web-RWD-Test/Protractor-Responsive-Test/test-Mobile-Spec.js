describe('Protractor Demo App', function() {

 beforeEach(function(){
       //disable angular detection for non-angular sites
        browser.ignoreSynchronization = true;
	});

  it('should have a title', function() {
    browser.get('http://localhost:8090/app/index1.html/');
   // browser.pause();
    expect(browser.getTitle()).toEqual('My App');
  });

it("The elements should NOT be visble for smaller window width", function() {   

     var width = 300;
     var height = 400;

      browser.driver.manage().window().setSize(width, height);
      
      //browser.driver.manage().window().maximize();

      browser.driver.manage().window().setPosition(100, 100);

     var body = browser.findElement(by.tagName('body'));

    // expect(body.getAttribute('class')).toBe('myclass');      

    
    var elem = browser.findElement(by.css('.myclass-toggle'));

    expect(elem .isDisplayed()).toBe(false);
   
    var navBar = browser.findElement(by.css('.navbar-toggle'));

    browser.pause();
    expect(navBar.isDisplayed()).toBe(false); 
    
  });

}); 

 