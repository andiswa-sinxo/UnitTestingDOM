describe("The Calculate Bill Factory Function" , function() {
    it ("should enter a string with calls  separated with commas" , function(){

        let calcBills = CalculateBills();
        calcBills.BillCalculate("call,call");
        assert.equal(5.5, calcBills.getBills());

    });

    it ("should enter a string with sms  separated with commas" , function(){

        let calcBills = CalculateBills();
        calcBills.BillCalculate("sms,sms,sms,sms");
        assert.equal(3.00, calcBills.getBills());

    });

    it ("should enter a string with calls and sms's  separated with commas" , function(){

        let calcBills = CalculateBills();
        calcBills.BillCalculate("sms,sms,sms,sms,call,call, call,call");
        assert.equal(14.00, calcBills.getBills());

    });
    describe("warning & critical" , function() {
    it ("should return a warning if the warning level is reached" , function(){

        let calcBills = CalculateBills();
        calcBills.BillCalculate("call,call,call,call,call,call,call,call");
        assert.equal('warning', calcBills.warning_criticaLevel());

    });
    it ("should return a critical if the critical level is reached" , function(){

        let calcBills = CalculateBills();
        calcBills.BillCalculate("call,call,call,call,call,call,call,call,call,call,call,call,sms,sms,sms,sms,sms");
        assert.equal('critical', calcBills.warning_criticaLevel());

    });
});
});