
describe('Anthropologie US-only Header Suite', function () {


    it('should take you to registry', function(){

        return browser
            .windowHandleSize({width: 1300, height: 720})
            .pause(2000)
            .waitForExist('div.col.utility-right-col > ul > li:nth-child(1) > a', 3000).then(function(result){

                browser.click('div.col.utility-right-col > ul > li:nth-child(1) > a');
            })
            .waitForExist('a.registry-logo', 20000).then(function(response){

                expect(response).toBe(true);
            })
            .waitForExist('div.about > p', 2500)
            .getText('div.about > p').then(function(regText){
            	expect(regText).toMatch(/When did gift registries/);
            })

    });

  
});