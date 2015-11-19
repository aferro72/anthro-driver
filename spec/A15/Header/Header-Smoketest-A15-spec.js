// to run this test, run jasmine from the Anthro-Driver folder

var Driver = require('./angular-driver.js');

var angulardriver = Driver.createDriver();

describe('Anthropologie A15 Header Suite', function () {

 jasmine.DEFAULT_TIMEOUT_INTERVAL = 99999;

	it('should load the homepage', function (done) {

         angulardriver
            .url('http://localhost:9020')
            .waitForExist('.contain-to-grid',3000).then(function(result){

            	 expect(result).toBe(true);})

            .waitForExist('div.homepage-creative.ng-scope.ng-isolate-scope > div:nth-child(1).ng-scope',2000).then(function(result){
                console.log('controller exists:' + ' ' + result);
            })

            .getTitle().then(function(title) {
				expect(title).toMatch(/Anthropologie POC/);
            })

            .isExisting('#ng-app').then(function(homepageApp){
            expect(homepageApp).toBe(true);
          })
            .then(done);
        });


    it('should go to a page in the navigation', function (done) {
         angulardriver
            .click('nav > section > ul > li:nth-child(2) > a')
            .pause(1500)
            .waitForExist('body > div.row > div:nth-child(2) > div:nth-child(1) > p', 1000)
            .getText('body > div.row > div:nth-child(2) > div:nth-child(1) > p').then(function(text){
                    expect(text).toMatch(/Romantic and sheer short sleeve top with/);
                    // console.log(text);
                })
            .end(done);
        
    });

});