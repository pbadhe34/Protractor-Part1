/*eslint strict:0*/
/*global CasperError, console, phantom, require*/

//require = patchRequire(require);


//var casper = require("casper").create();

/*
var casper = require("casper").create({
    viewportSize: {
        width: 500,
        height: 600
    }
});
*/

var casper = require("casper").create({
    // other options here
    onPageInitialized: function (page) {
        page.evaluate(function () {
            window.screen = {
                width: 1920,
                height: 1080
            };
        });
    }
});


var links = [
    "http://google.com/"     
];

casper.start();

console.log("Starting==> ");


casper.each(links, function(self, link) {
    this.thenOpen(link, function() {
        this.echo(this.getTitle() + " - " + link);
var w = window.innerWidth;
var h = window.innerHeight;

console.log("Height==> " + h);
console.log("Width==> " + w);


    });
});

casper.run();
