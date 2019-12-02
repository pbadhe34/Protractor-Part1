describe('Protractor Demo App', function() {

 beforeEach(function(){
       //disable angular detection for non-angular sites
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:8090/app/index1.html/');

	});

  it('should have a title', function() {
    
   /* browser.executeScript('window.moveTo(20,30);'+
    'window.resizeTo(320, 200);'); */

    expect(browser.getTitle()).toEqual('My App');
   });

      
it("The elements should be visble for larger window width", function() {  
     //browser.driver.manage().window().setSize(width, height);

     //browser.get('http://localhost:8090/app/index1.html/');

      //browser.driver.manage().window().maximize();

      browser.driver.manage().window().setPosition(200, 100);

    //browser.pause();
    var elem = browser.findElement(by.css('.myclass-toggle'));

    expect(elem .isDisplayed()).toBe(true);
   
    var navBar = browser.findElement(by.css('.navbar-toggle'));

    expect(navBar.isDisplayed()).toBe(true);


    //var EC = protractor.ExpectedConditions;
    //Waits for the element with id 'abc' to be visible in the dom.
    //browser.wait(EC.visibilityOf($('#abc')), 5000);
    
  });

it("The elements should NOT be visble for smaller window width", function() {   

     var width = 300;
     var height = 400;

      browser.driver.manage().window().setSize(width, height);
      
      //browser.driver.manage().window().maximize();

      browser.driver.manage().window().setPosition(100, 100);

     var body = browser.findElement(by.tagName('body'));


    // expect(body.getAttribute('class')).toBe('myclass'); 
     

    //browser.pause();
    var elem = browser.findElement(by.css('.myclass-toggle'));

    expect(elem .isDisplayed()).toBe(false);
   
    var navBar = browser.findElement(by.css('.navbar-toggle'));

    expect(navBar.isDisplayed()).toBe(false); 
    
  });

}); 

 