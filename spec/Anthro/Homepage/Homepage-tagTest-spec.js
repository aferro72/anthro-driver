describe('Executing javascript on the Homepage', function() {

    it('Should confirm Correct Coremetrics ClientID', function(done) {
        browser
            .url('http://www.anthropologie.com/')
            .waitForExist('.anthro-modal-close',15000).then(function(){
                client.click('.anthro-modal-close');})
            .pause(2500)


           .execute(function() {
            return cm_ClientID;
             }).then(function(result){
                expect(result.value).toEqual('90041356');
             })


            // .execute(function() {
            //  return document.querySelector('.bogus-element');
            //     }).then(function(success, err) {

            //         expect(err).not.toBe(undefined);
            //         expect(success.value).toBe(null);
            //         console.dir(err);
            //         console.dir(success);

            //     })




               .call(done);
    });

});