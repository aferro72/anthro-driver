describe('Anthropologie - Store Locator - Search Tests', function() {

    it('should search for City and return results', function() {
        return browser
            .url('/store-locator#/search')
            .click('#searchQuery')
            .setValue('#searchQuery', 'Boston').then(function(result) {
                browser.click('#submit');
            })
            .waitForExist('div.o-column.o-column > div:nth-of-type(1) > h3 > a', 10000)
            .getText('div.o-column.o-column > div:nth-child(1) > h3 > a').then(function(text) {
                expect(text).toContain('Boston');
            })
            .getText('div.o-column.o-medium--4 > div:nth-child(1) > p.ng-binding').then(function(text) {
                expect(text).toContain('203 Newbury St');
            })
            .getHTML('div.o-column.o-medium--4 > div:nth-child(1) > div > div:nth-child(1) > p > a').then(function(html) {
                expect(html).toContain('href="tel:(617) 262-0545"');
            })
            .waitForExist('svg#Layer_1.store-beauty-icon.store-icon', 2000).then(function(result) {
                expect(result).toBe(true);
            });
    });

    it('should search for State and return results', function() {
        return browser
            .url('/store-locator#/search')
            .click('#searchQuery')
            .setValue('#searchQuery', 'Massachusetts').then(function(result) {
                browser.click('#submit');
            })
            .waitForExist('div.o-column.o-column > div:nth-of-type(1) > h3 > a', 10000)
            .getText('div.o-column.o-column > div:nth-child(1) > h3 > a').then(function(text) {
                expect(text).toContain('Natick Mall');
            })
            .getText('div.o-column.o-medium--4 > div:nth-child(1) > p.ng-binding').then(function(text) {
                expect(text).toContain('1245 Worcester St #4012');
            })
            .getHTML('div.o-column.o-medium--4 > div:nth-child(1) > div > div:nth-child(1) > p > a').then(function(html) {
                expect(html).toContain('href="tel:(508) 647-4711"');
            });
    });

    it('should not return results for invalid search terms', function() {
        return browser
            .url('/store-locator#/search')
            .click('#searchQuery')
            .setValue('#searchQuery', 'asdfasdfasdf').then(function(result) {
                browser.click('#submit');
            })
            .waitForExist('div.o-row.ng-scope > h2', 3000)
            .getText('div.o-row.ng-scope > h2').then(function(text) {
                expect(text).toContain('No results found within 25 miles. Please search again.');
            })
            .isVisible('div.o-column.o-medium--8.no-results > div:nth-child(2) > img').then(function(visibility) {
                expect(visibility).toBe(true);
            });
    });

    it('should not list results for a location without stores', function(){
    	return browser
    		.url('/store-locator#/search')
    		.click('#searchQuery')
    		.setValue('#searchQuery', 'North Dakota').then(function(result) {
    			browser.click('#submit');
    		})
    		.waitForExist('div.o-row.ng-scope > h2', 3000)
            .getText('div.o-row.ng-scope > h2').then(function(text) {
                expect(text).toContain('No results found within 25 miles. Please search again.');
            });
    })

    it('should search for an international store and return results', function() {
        return browser
            .url('/store-locator#/search')
            .click('#searchQuery')
            .setValue('#searchQuery', 'London').then(function(result) {
                browser.click('#submit');
            })
            .waitForExist('div.o-column.o-medium--4 > div:nth-child(1) > h3 > a', 5000)
            .getText('div.o-column.o-medium--4 > div:nth-child(1) > h3 > a').then(function(text) {
                expect(text).toContain('Regent Street');
            });
    });

    it('should update results upon distance change', function() {
        return browser
            .selectByValue('#searchDistance', 'number:50')
            .pause(3000)
            .getValue('#searchDistance').then(function(value) {
                console.log(value);
                expect(value).toBe('number:50');
            })
            .getText('div.o-row.ng-scope > h2 > span').then(function(text) {
                expect(text).toContain('within 100 miles');
                console.log(text);
            });
    });

    it('should select a distance, then input a query and return results', function() {
        return browser
            .url('/store-locator#/search')
            .selectByValue('#searchDistance', 'number:50')
            .click('#searchQuery')
            .setValue('#searchQuery', 'Boston').then(function(result) {
                browser.click('#submit');
            })
            .waitForExist('div.o-row.ng-scope > h2 > span', 5000)
            .getText('div.o-row.ng-scope > h2 > span').then(function(text) {
                expect(text).toBe('within 50 miles');
            });
    });

    it('should enter a location, select a distance and return results', function() {
        return browser
            .url('/store-locator#/search')
            .click('#searchQuery')
            .setValue('#searchQuery', 'Boston').then(function(result) {
                browser.selectByValue('#searchDistance', 'number:50');
            })
            .click('#submit')
       		.waitForExist('div.o-row.ng-scope > h2 > span', 5000)
            .getText('div.o-row.ng-scope > h2 > span').then(function(text) {
                expect(text).toBe('within 50 miles');
            });
    });

});
