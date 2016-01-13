var ModalWindow = require('./modalClose-PO.js');

modalWindow = new ModalWindow();

describe('Search suite', function () {
	
	it('run a search for a product', function () {

	return browser
		.windowHandleSize({width: 1000, height: 720})
		.url('/index.jsp').then(function(){
			return modalWindow.close();
		})
		.waitForExist('.global-logo', 3000).then(function(result){
			expect(result).not.toBe(null);

		})
		.pause(5000);
		// searchUtility.runSearch();
	});

});