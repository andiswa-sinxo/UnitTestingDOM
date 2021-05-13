describe("The Text input bill factory function" , function() {
    describe("enter value" , function() {
        it ("should be able to enter the call cost in the textbox" , function(){
            let textInput = textInputBill();

            textInput.textBillTotal('call');
            assert.equal(2.75, textInput.getCallTotal());
            assert.equal(2.75, textInput.getTotalText());
    });
});
});