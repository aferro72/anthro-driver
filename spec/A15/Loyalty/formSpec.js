describe('Anthropologie Loyalty Form Suite', function() {


    it('Should confirm we are on the homepage', function() {

        return browser
            .url('/')
         // Confirm we're on the homepage by checking for a homepage element 
            .waitForExist('div.creative-container.module-1', 5000).then(function(elemFound) {
                expect(elemFound).toBe(true);
            });

    });


    it('Should navigate to the loyalty page', function() {

        return browser
            .url('/loyalty')
        // Check for an element that existed on our start url, but not Loyalty page.
        // We are checking in this weird way because the loyalty form is currently also on the homepage.
            .isExisting('div.creative-container.module-1').then(function(wrongPage) {
                expect(wrongPage).toBe(false);
            })
    });


    it('Should confirm that each input field exists and input text into those fields', function() {

        return browser
            .isExisting('#loyalty-first').then(function(elemFound) {
                browser.setValue('input#loyalty-first', 'Johnny');
                expect(elemFound).toBe(true);
            })
            .isExisting('#loyalty-last').then(function(elemFound) {
                browser.setValue('input#loyalty-last', 'Tester');
                expect(elemFound).toBe(true);
            })
            .isExisting('#loyalty-country').then(function(elemFound) {
                browser.setValue('input#loyalty-country', 'United States');
                expect(elemFound).toBe(true);
            })
            .isExisting('#loyalty-address').then(function(elemFound) {
                browser.setValue('input#loyalty-address', '7 Test Street');
                expect(elemFound).toBe(true);
            })
            .isExisting('#loyalty-city').then(function(elemFound) {
                browser.setValue('input#loyalty-city', 'Lawreneceville');
                expect(elemFound).toBe(true);
            })
            .isExisting('#loyalty-phone').then(function(elemFound) {
                browser.setValue('input#loyalty-phone', '6095583844');
                expect(elemFound).toBe(true);
            })
            .isExisting('#loyalty-birthday').then(function(elemFound) {
                browser.selectByIndex('#loyalty-birthday', 2);
                browser.selectByIndex('div.form-item.clearfix > div.adjunct > div > select', 15);
                expect(elemFound).toBe(true);
            })
    });
	

	it('Should confirm correct images and links are on the page', function() {

		return browser
			.isExisting('#loyaltyHeader > h1 > picture > img').then(function(elemFound){
				expect(elemFound).toBe(true);
			})
			.isExisting('#loyaltyHeader > div:nth-child(5) > div > p > a > img').then(function(elemFound){
				expect(elemFound).toBe(true);
			})
			.isExisting('#confirmLoyalty > img').then(function(elemFound){ 
				expect(elemFound).toBe(true);
			})
			.getAttribute('#fullForm > div > form > p.info-text > a', 'href').then(function(url){
				expect(url).toMatch(/\/category\/contact\+us\/help-contact-us\.jsp/);
			})
			.getAttribute('#confirmLoyalty > p:nth-child(3) > a', 'href').then(function(url){
				expect(url).toContain("/anthro/loyalty/index.jsp");
			})
	});


});
