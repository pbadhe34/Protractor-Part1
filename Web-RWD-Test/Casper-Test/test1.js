 /*
var casper = require('casper').create();
casper.start('http://casperjs.org/');

casper.then(function() {
    this.echo('First Page: ' + this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo('Second Page: ' + this.getTitle());
});

casper.run();
 
*/


casper.userAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3)");

 
 /*
In test/test1.js
  Untitled suite in test/test1.js
    error: TypeError: Type error

casper.thenOpen("http://google.com/", function() {
	this.echo("Google accessed using iPhone user-agent.");
});  

*/


/*
casper.test.begin('Hello, Test!', 2, function mySuite(test) {

casper.start("http://www.google.com/", function() {
test.assertTitle("Google", "google homepage title is opened with iPhone like browser");
this.echo("Google accessed using iPhone user-agent.");

         
    });
 casper.then(function() {
         test.assert(true);
    });

 casper.run(function() {
        test.done();
    });   
     });

*/

   casper.test.begin('Second Test!', 1, function mySuite(test) { 

         casper.start("http://www.google.com/", function() {
          test.assertTitle("Google", "google homepage title is opened with iPhone like browser");
          this.echo("Google accessed using iPhone user-agent.");
          
       });

    /*
     casper.run(function() {
        test.done();
    });
   */
      casper.done(); 

  
     });
 

 
 

 
 