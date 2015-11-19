
describe('Anthropologie EU Header Suite', function () {


    it('should NOT contain a link to registry', function(){

         return browser
            .url('/index.jsp')
            .waitForExist('.anthro-modal-close',15000).then(function(){

                 browser.click('.anthro-modal-close');})
            .isExisting('div.col.utility-right-col > ul > li:nth-child(1) > a').then(function(result){
                // expect(result).toBe(false);
                expect(result).toBe(false);
            })

    });


});