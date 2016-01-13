describe('Homepage Smoke Tests', function() {

    it('should confirm homepage contains links to correct URLs', function() {

        return browser
            .url('/')
            .getAttribute('div.row > div:nth-child(2) > section.group.group-1.an-rwd > div > a', 'href').then(function(url) {
                expect(url).toContain('/category/shop+all+gifts/shopgifts-all.jsp?cm_sp=FEATURES-_-SUB_CATEGORY-_-SHOPGIFTS-ALL');
            })
 			.getAttribute('div.row > div:nth-child(3) > section.group.group-1.an-rwd > div > a', 'href').then(function(url) {
                expect(url).toContain('/category/candles/home-candle.jsp?cm_sp=FEATURES-_-SUB_CATEGORY-_-HOME-CANDLE');
            })
 			.getAttribute('div.row > div:nth-child(4) > section.group.group-1.an-rwd > div > a', 'href').then(function(url) {
                expect(url).toContain('/category/jewelry/accessories-jewelry.jsp?cm_sp=FEATURES-_-SUB_CATEGORY-_-ACCESSORIES-JEWELRY');
            })  
 			.getAttribute('div.row > div:nth-child(5) > section.group.group-1.an-rwd > div > a', 'href').then(function(url) {
                expect(url).toContain('/category/letters++initials/shopgifts-monogram.jsp?cm_sp=FEATURES-_-SUB_CATEGORY-_-SHOPGIFTS-MONOGRAM');
            })
  			.getAttribute('div.row > div:nth-child(6) > section.group.group-1.an-rwd > div > a', 'href').then(function(url) {
                expect(url).toContain('/category/contests.jsp?cm_sp=FEATURES-_-SUB_CATEGORY-_-CONTESTS');
            })
  			.getAttribute('div.row > div.module.module-2 > section > div:nth-child(1) > a', 'href').then(function(url) {
                expect(url).toContain('/category/under+%2425/shopgifts-under-twentyfive.jsp?cm_sp=FEATURES-_-SUB_CATEGORY-_-SHOPGIFTS-UNDER-TWENTYFIVE');
            })
    		.getAttribute('div.row > div:nth-child(8) > section.group.group-1.an-rwd > div > a', 'href').then(function(url) {
                expect(url).toContain('/category/gift+cards/shop-giftcards.jsp?cm_sp=FEATURES-_-SUB_CATEGORY-_-SHOP-GIFTCARDS');
            })
    });
	

	it('Should confirm alt assets are hidden on small screens', function(){

		return browser
			.windowHandleSize({width: 600, height: 720})
			.isVisibleWithinViewport('div.row > div:nth-child(2) > section > div > a > picture > source:nth-child(1)').then(function(visible) {
				expect(visible).toBe(false);
			})
	});

		it('Should confirm mobile assets are shown on small screens', function(){

		return browser
			.windowHandleSize({width: 600, height: 720})
			.isVisibleWithinViewport('body > div.row > div:nth-child(2) > section > div > a > picture > img').then(function(visible) {
				expect(visible).toBe(true);
			})
	});




	it('Should confirm mobile assets are hidden on large screens', function(){
		return browser
			.windowHandleSize({width: 1000, height: 720})
			.element('body > div.row > div:nth-child(2) > section > div > a > picture').then(function(result) {
				console.dir(result);
			})
			// .getAttribute('source', 'src').then(function(attribute) {
				
			// })
			.isVisibleWithinViewport('body > div.row > div:nth-child(2) > section > div > a > picture > img').then(function(visible) {
				expect(visible).toBe(false);
			})
	});

	it('should confirm dual image modules contain two click-thru URLs', function(){
		return browser
			.getAttribute('div.module.module-2 > section > div:nth-child(1) > a', 'href').then(function(url) {
				expect(url).toContain('/category/under+%2425/shopgifts-under-twentyfive.jsp?cm_sp=FEATURES-_-SUB_CATEGORY-_-SHOPGIFTS-UNDER-TWENTYFIVE');
			})
			.getAttribute('div.module.module-2 > section > div:nth-child(2) > a', 'href').then(function(url) {
				expect(url).toContain('/category/under+%2450/shopgifts-under-fifty.jsp?cm_sp=FEATURES-_-SUB_CATEGORY-_-SHOPGIFTS-UNDER-FIFTY');
			})

	});

});
