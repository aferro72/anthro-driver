var searchUtility = function () {

	var self = {

		runSearch: function () { 
			 return browser
			 	.click('.anthro-modal-close')
                .click('.utility-search-input')
                .setValue('.utility-search-input', 'scarves')
                .keys('Return').buttonPress()
                .click('#searchPhrase').then(function(pause){
                	browser.pause(2000);
                })
                .addValue('.utility-search-input', 'scarves');
            }
};

	return self;




};

module.exports = searchUtility;
