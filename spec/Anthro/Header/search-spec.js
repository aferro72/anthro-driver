var SearchUtility = require('./searchUtility-PO.js');

searchUtility = new SearchUtility();

describe('Search suite', function () {
	
	it('run a search for a product', function () {

	return browser
		.windowHandleSize({width: 1000, height: 720})
		.url('/index.jsp').then(function(){
			return searchUtility.runSearch();
		})
		.waitForExist('.global-logo', 3000).then(function(result){
			expect(result).not.toBe(null);

		})
		// searchUtility.runSearch();
	});

});