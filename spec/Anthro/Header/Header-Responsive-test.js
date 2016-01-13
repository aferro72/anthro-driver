describe('Anthropologie - Header - Responsive Suite', function () {

it('should confirm given a small screen, the responsive menu displays', function() {

		return browser
			.setViewportSize({width: 970, height: 720}, false)   // width < 989 will update the header navigation to small screen version
			.url('/')
            .waitForExist('.anthro-modal-close',15000).then(function(){
            	 browser.click('.anthro-modal-close');  // Close the email signup modal
            })
			.isVisible('.stitch1').then(function(visibility){ // Confirm if an element in the small screen navigation is visible
				console.log(visibility);
				expect(visibility).toBe(true);
			})
			.isVisible('.sn-ACCESSORIES').then(function(visibility) { // Confirm an element in the large screen nav is not visible
				console.log(visibility);
				expect(visibility).toBe(false);
			})
			
});

it('should check given a large screen, appropriate header displays', function(){

	return browser
		.windowHandleSize({width: 1300 , height: 900 })
		.isVisible('div.header-wrap > nav > ul > li:nth-of-type(1)').then(function(visibility){
				expect(visibility).toBe(true);
			})
		.isVisible('.rwd-menu-open').then(function(visibility) {
			expect(visibility).toBe(false);
			
		})
})


});