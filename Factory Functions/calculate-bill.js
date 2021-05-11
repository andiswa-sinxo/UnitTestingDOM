function CalculateBills(){
    var billTotal = 0;

    function BillCalculate(billString){
        var billItems = billString.split(",");

        for (var i=0;i<billItems.length;i++){
            var billItem = billItems[i].trim();
            if (billItem === "call"){
                billTotal += 2.75;
            }
            else if (billItem === "sms"){
                billTotal += 0.75;
            }
        }       
    }

    function getBills(){
        return billTotal;
    }

    function warning_criticaLevel(){
        if(getBills() >= 20 && getBills() < 30){
            return 'warning'
        }
        else if(getBills() >= 30){
            return 'critical'
        }
    }

    return{
        BillCalculate,
        getBills,
        warning_criticaLevel
    }
}
    