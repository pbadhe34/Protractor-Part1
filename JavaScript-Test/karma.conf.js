module.exports = function(config){
  config.set({

    basePath : '.',

    files : [
      'lib/angular/angular.js',
      'lib/angular/angular-mocks.js',  
       'src/uiApp.js',      
      'src/*.js',
      'spec/*.js'      
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

     plugins : [            
            'karma-jasmine',             
            'karma-chrome-launcher',
            'karma-firefox-launcher',            
            'karma-junit-reporter' , 
            'karma-htmlfile-reporter' ,
            'karma-spec-reporter'                               
            ],

    
reporters: ['progress','dots','spec','junit', 'html'],

specReporter: {
       maxLogLines: 25,
       suppressPassed: false,
       suppressFailed: false,
       suppressSkipped: false
    },
 
 
    htmlReporter: {
      outputFile: 'testReport/unitTests.html',            
      
      pageTitle: 'Unit Tests',
      subPageTitle: 'AngularJS Unit test report'
    },

    junitReporter : {
      outputFile: 'tests/unitTests.xml',
      suite: 'unit'
    }

  });
};
