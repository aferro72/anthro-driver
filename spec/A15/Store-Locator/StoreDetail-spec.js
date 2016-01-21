describe('Anthropologie - Store Locator - Store Detail Page Tests',function (){

	it('should be able to be accessed through the search results', function()  {
		return browser
            .url('/store-locator#/search')
            .click('#searchQuery')
            .setValue('#searchQuery', 'Boston').then(function(result) {
                browser.click('#submit');
            })
            .waitForExist('div.o-column.o-column > div:nth-of-type(1) > h3 > a', 10000)
			.getText('div.o-column.o-medium--4 > div:nth-child(1) > p:nth-child(5) > a').then(function(text) {
				expect(text).toContain('Full Details');
			})
			.click('div.o-column.o-medium--4 > div:nth-child(1) > p:nth-child(5) > a')
			.waitForText('div.o-column.o-medium--8 > h2 > a', 5000).then(function(text) {
				expect(text).toBe(true);
			})
			.getText('div.o-column.o-medium--8 > h2 > a').then(function(text) {
				expect(text).toBe('Get Directions »')
			});
	});
});