var Header = function () {

	var self = {

		runSearch: function () { 
			 return browser
                .click('.utility-search-input')
                .setValue('.utility-search-input', 'scarves')
                .keys('Return').buttonPress()

		}

		



	};

	return self;








};

module.exports = Header;