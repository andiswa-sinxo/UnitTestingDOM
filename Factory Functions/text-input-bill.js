function textInputBill(){
    var textTotal = 0;
    var callsTotal = 0;
    var smsTotal = 0;


    function textBillTotal(textString){
        // get the value entered in the billType textfield
        var billTypeEntered = textString.trim();
        // update the correct total
        if (billTypeEntered === "call"){
            callsTotal += 2.75
        }
        else if (billTypeEntered === "sms"){
            smsTotal += 0.75;
        }
    }

    function getTotalText(){
        return textTotal;

    }

    function getCallTotal(){
        return callsTotal;
    }

    function getSmsTotal(){
        return smsTotal;
    }

    function warningCriticalLevel(){
        if (getTotalText() >= 30 && getTotalText() < 50){
            return 'warning'
        }
        else if (getTotalText() >= 50){
            return 'critical'
        }
    }

    return{
        textBillTotal,
        getTotalText,
        getCallTotal,
        getSmsTotal,
        warningCriticalLevel
}
}
