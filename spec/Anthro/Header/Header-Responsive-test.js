describe('Anthropologie - Header - Responsive Suite', function () {

it('should check for given a small screen, check that the header displays appropriate', function() {

		return browser
			.windowHandleSize({width: 989, height: 720})
			.url('/')

            .waitForExist('.anthro-modal-close',15000).then(function(){

            	 browser.click('.anthro-modal-close');})

			.isVisibleWithinViewport('.rwd-menu-open').then(function(visibility){
				expect(visibility).toBe(true);

			})
			.windowHandleSize({width: 1300 , height: 900 })
			.isVisibleWithinViewport('div.header-wrap > nav > ul > li:nth-of-type(1)').then(function(visibility){

				expect(visibility).toBe(true);
			})
});

		xit('should check other screen size thing', function(){

			return browser

			.element('.SomeElement')

		})


});