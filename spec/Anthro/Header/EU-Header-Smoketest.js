var ModalWindow = require('./modalClose-PO.js');
modalWindow = new ModalWindow();



describe('Anthropologie EU Header Suite', function() {


    it('should NOT contain a link to registry', function() {

        return browser
            .url('/index.jsp')
            .waitForExist('.anthro-modal-close', 5000)
                .then(function(success) {
                        browser.click('.anthro-modal-close');
                    })

            .isExisting('div.col.utility-right-col > ul > li:nth-child(1) > a')
                .then(function(result) {
                console.dir(result);
                console.log("Registry link does not appear");
                expect(result).toBe(false);
            },
                     function(error){
                        console.error("we ran into this error \n" + error);
                        expect(false).toBe(true);
            })
            
    });

    it('should check the location of the cart icon on the page',function(){

        return browser
            .getLocation('.img-basket', 'x').then(function(location){
                expect(location).toMatch(/[ 0, 876 ]/);

            })
        

    });

    it('should get your location', function(){

    return browser
        .location(function(location){

            console.log(location);
        })
        .end();
    });

});
