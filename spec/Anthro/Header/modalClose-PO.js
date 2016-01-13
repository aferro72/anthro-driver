var modalWindow = function () {

	var self = {

		close: function () { 
			 return browser
			 	.waitForExist('.anthro-modal-close', 3000).then(function(result){
                    browser.click('.anthro-modal-close');
                    expect(result).toBe(true);
                })
            }
};

	return self;
};
module.exports = modalWindow;
