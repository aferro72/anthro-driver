describe('Anthropologie A15 Header Suite', function () {

	it('should load the homepage', function() {

        return browser 
            .url('http://localhost:9020/')
            .waitForExist('.contain-to-grid',3000).then(function(result){

            	 expect(result).toBe(true);})

            .getTitle().then(function(title) {
				expect(title).toMatch(/Anthropologie POC/);
            })
            // Here I'm going to mouseover the clothing root cat
            .moveToObject('nav > section > ul > li:nth-child(1)')
            .moveToObject('nav > section > ul > li:nth-child(2)')
            .moveToObject('nav > section > ul > li:nth-child(3)')
            .moveToObject('nav > section > ul > li:nth-child(4)')
            .moveToObject('nav > section > ul > li:nth-child(5)')
            .moveToObject('nav > section > ul > li:nth-child(6)')
            .moveToObject('nav > section > ul > li:nth-child(7)')
            .moveToObject('nav > section > ul > li:nth-child(8)')
            .moveToObject('nav > section > ul > li:nth-child(9)')

            .isExisting('#ng-app').then(function(homepageApp){
            expect(homepageApp).toBe(true);
          })
        });


    it('should go to a page in the navigation', function() {
        return browser
            .click('nav > section > ul > li:nth-child(2) > a')
            .pause(1500)
            .waitForExist('body > div.row > div:nth-child(2) > div:nth-child(1) > p', 1000)
            .getText('body > div.row > div:nth-child(2) > div:nth-child(1) > p').then(function(text){
                    expect(text).toMatch(/Romantic and sheer short sleeve top with/);
                    // console.log(text);
                })
        
    });

});