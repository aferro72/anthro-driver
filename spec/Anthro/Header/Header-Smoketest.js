// This is a set of smoke tests that can be run on any environment or localization

describe('Anthropologie - Header - Smoke Test Header Suite', function () {

var randomVariable = 'something';
var cookieValue = 'use this later';

	it('should check navigation functionality', function() {

        return browser
        	.windowHandleSize({width: 1280, height: 720})
            .url('/index.jsp')
            .waitForExist('.anthro-modal-close',15000).then(function(){

            	 browser.click('.anthro-modal-close');})

            .waitForExist('.global-logo',15000)
            .getTitle().then(function(title) {
				expect(title).toMatch(/Welcome to Anthropologie/);
            })
            // Here I'm going to mouseover the clothing root cat
            .moveToObject('div.header-wrap > nav > ul > li:nth-child(3)').then(function(wait){
            	browser.waitForExist('a.half-takeover-close.sn-close.ng-scope.fake-hover',15000).then(function(headermouse){
            		expect(headermouse).toBe(true);
            	})
            	expect(wait.value).toBe(null);
            })
            //here i'm checking that an item in the root cat exists
            .waitForExist('div.header-wrap > nav > ul > li:nth-child(3) > nav > div > div > ul:nth-child(2)', 15000).then(function(navitems){
            	
            	expect(navitems).toBe(true);
                randomVariable = 'somthing else 1 ';
                console.log(randomVariable)
            })

        });



    it('should take you to sign in and update once signed in', function(){

    	return browser
            //.click('.anthro-modal-close')
            .click('.hon_signin')
            .waitForExist('input.button.signinbtn', 15000)
            .getTitle().then(function(title) {
                console.log(randomVariable);
                expect(title).toMatch(/My Account/);

            })
            .setValue('#checkoutEmail', 'globaldomain@mailinator.com')
            .setValue('#checkoutPassword', 'globaldomain')
            .click('input.button.signinbtn')
            .waitForExist('.account-link-wrapper',1000 * 30).then(function(result){

            	expect(result).not.toBe(null);
            })
    });

// Search is broken, if you run this, it'll break your test because it prompts you to login to the
// fred-hopper administrative login... Potential security flaw?

// it('should execute a search', function(){

//             return browser
//             	.pause(1000)
//                 .click('#searchPhrase').then(function(pause){
//                 	browser.pause(2000);
//                 })
//                 .addValue('#searchPhrase', 'tunic')
//                 .keys('Return').buttonPress()
//                 .url().then(function(currentUrl) {
//                     expect(currentUrl.value).toMatch(/tunic/);
//                 });
//     });


    it('should take you to a basket', function(){

    	return browser
    		.click('a.hon_basket')
    		.waitForExist('.checkout-cart-tab',15000).then(function(result){

    			expect(result).not.toBe(null);
    		})


    });


// The below is a flawed test. Will use the .isVisibleWithinViewport function instead.. See viewport example test file

    it('should load the responsive nav on smaller screens', function(){

    	return browser
    		.windowHandleSize({width: 989, height: 720}) // minimum size for responsive nav to appear
    		.url('/index.jsp')
    		.pause(1000)
    		.click('div.rwd-header > div > a')
    		.waitForExist(' div.rwd-main-nav > ul > li:nth-child(3) > a', 15000).then(function(result){
    			expect(result).toBe(true);

    		})
    		.click('div.rwd-main-nav > ul > li:nth-child(3) > a')
    		.waitForExist('li.rwd-nav-top.ng-scope.list-open > ul > li:nth-child(1) > a',4000).then(function(click){
    			browser.click('div.rwd-main-nav > ul > li.rwd-nav-top.ng-scope.list-open > ul > li:nth-child(1) > a');
    		})
    		.waitForExist('div.category-items > div:nth-of-type(1)',15000).then(function(result){
    			expect(result).toBe(true);
    		})
    });
});