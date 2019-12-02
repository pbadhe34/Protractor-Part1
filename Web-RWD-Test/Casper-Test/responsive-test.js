
var   url = "http://127.0.0.1:8090/app/index1.html/";

var viewportSizes = [
        [300, 480],
        [320, 568],
        [370, 1024],
        [390, 768],
        [1280, 800],
        [1440, 900]
    ];

var links = [
    'http://google.com/',
    'http://yahoo.com/',
    'http://bing.com/'
];


//casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');


casper.userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/536.5');

 /*
casper.on('resource.requested', function(resource) {

    for (var obj in resource.headers) {
        var name = resource.headers[obj].name;
        var value = resource.headers[obj].value;
        if (name == "User-Agent"){
            this.echo("The browser is "+value);
        }
    }

});
*/
  
  

casper.verbose=true;


casper.test.begin('App Test', 12, function mySuite(test) { 

/*
 
         casper.start(url, function() {
test.assertUrlMatch("http://127.0.0.1:8090/app/index1.html/", 'The web url is served in browser');
          test.assertTitle("My App", "The homepage title is opened with browser");
          this.echo("The app page accessed in .");
          
       });
 */

 casper.start();

/*
casper.onPageInitialized(function (page) {
        page.evaluate(function () {
        this.echo("Page Init");
            window.screen = {
                width: 1920,
                height: 1080
            };
        });
    });
*/
 
 
/*
casper.each(viewportSizes, function(self, viewportSize) {
     var width = viewportSize[0];
     var height = viewportSize[1];

//set the browser width and height  
      

  //this.viewport(width, height); 

this.open(url).then(function() {
       this.echo("Page opened with width : " + width + " Height: " + height+"  : "+ this.viewportSize);  

this.wait(2000);


this.viewport(width, height).then(function() {
     this.echo("Page viewport set ");

this.wait(1000);
*/


var width;

var height;

casper.each(viewportSizes, function(casper, viewport) {
  this.then(function() {
     width = viewport[0];
     height = viewport[1];

     this.viewport(width, height);
   
  //});

  this.open(url).then(function() {

  this.wait(1000);


  //this.then(function(){


var w = window.innerWidth;
var h = window.innerHeight;

//console.log("Height==> " + h);
//console.log("Width==> " + w);  
 

 if (width < 375) {
       this.echo("Page opened with width = "+width );
var flag = this.visible(".myclass-toggle");
this.echo("Page Element is visible "+flag);

      test.assertNotVisible(".navbar-toggle","The page menu should NOT be visible when width < 375");

 test.assertNotVisible(".myclass-toggle","The H1 element should NOT be visible when width < 375");
            } 

if (width > 375) {      
             casper.wait(3000);
           this.echo("Page opened with width = "+width );

//this.setContent('<div class="foo" style="display:none>boo</div>');
       // test.assertNotVisible('.foo');

var flag = this.visible(".myclass-toggle");
this.echo("Page Element is visible "+flag);

test.assertVisible(".navbar-toggle","The page menu should be visible when width > 375");


  test.assertVisible(".myclass-toggle","The H1 element should be visible for width > 375");

       
                 }     


    });//open//this.then
  });//viewport//then


}); //each block  
 
     
 
/*
casper.each(links, function(self, link) {
    self.thenOpen(link, function() {
        this.echo(this.getTitle());
    });
});
 */
       
      casper.run(function() {
        test.done();
    });   

  
  });//test block

 

 
 

 
 