describe('Anthropologie - Store - Search Functionality', function() {
	it('should not return results for an invalid query', function() {
		return browser
			.url('https://www.anthropologie.com/anthro/category/store+locator/help-store-locator.jsp')
			.waitForExist('.anthro-link', 10000).then(function(isExisting){
				console.log(isExisting);
				expect(isExisting).toBe(false);
			});
		});

});