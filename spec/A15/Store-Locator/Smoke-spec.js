describe('Anthropologie - A15 - Smoketest Suite', function() {

    it('should search for City and expect results', function() {
        return browser
            .url('/store-locator#/search')
            .setValue('#searchQuery', 'Boston').then(function(result) {
                browser.click('#submit');
            })
            .waitForExist('div.o-column.o-column > div:nth-of-type(1) > h3 > a', 10000)
            .getText('div.o-column.o-column > div:nth-child(1) > h3 > a').then(function(text) {
                    expect(text).toContain('Boston');
                });
            

    });

});
