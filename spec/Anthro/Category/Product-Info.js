describe('Anthropologie - Category - Product Info', function() {

	it('should check total products appears in the category', function () {
		return browser
			.url('/category/new+arrivals/home-new2.jsp?cm_sp=TOPNAV-_-HOME-_-NEW2#/')
			.waitForExist('div.category-items > div:nth-child(1) > .item-description > a', 10000).then(function(result) {
				expect(result).toBe(true);	
			})
			.getText('.item-total').then(function(text) {
				expect(text).toContain('items');
				expect(text).toMatch(/\d+./);
			});
	});

	xit('should confirm that each product contains a name', function() {
	    return browser
	        .execute(function() {
	            i = 1;
	            try {
	                for (var i = 1; i < 121; i++) {
	                    document.querySelector('div.category-items > div:nth-child(' + i + ') > .item-description > a').textContent;
	                }
	                if (i = 121) {
	                    return document.querySelector('div.category-items > div:nth-child(' + i + ') > .item-description > a').textContent;
	                }
	            } 
	            catch(err) {
	                return false;
	            }
	        }).then(function(result) {
	            console.dir(result);
	            expect(result.value).not.toBe(null);
	            expect(result.value).not.toBe(false);
	        });
	});


});