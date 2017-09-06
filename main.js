// Write your JavaScript here
            
function Change() {

    var Owed = document.getElementById("amount-due").value;
    var Paid = document.getElementById("amount-received").value;
    var calculated = (Paid - Owed).toFixed(2) * 100;
    
    
    // var changeOne = 0;
    // var changeQuarter = 0;
    // var changeDime = 0;
    // var changeNickel = 0;
    // var changePenny = 0;

    //How many twenties are owed from calculated.
    
    var changeOne = Math.floor(calculated / 100);
    var calculated = calculated % 100;
    document.getElementById("dollars-output").innerHTML=changeOne;

    changeQuarter = Math.floor(calculated / 25);
    var calculated = calculated % 25;
    document.getElementById("quarters-output").innerHTML=changeQuarter; 

    changeDime = Math.floor(calculated / 10);
    var calculated = calculated % 10;
    document.getElementById("dimes-output").innerHTML=changeDime;

    changeNickel = Math.floor(calculated / 5);
    var calculated = calculated % 5;
    document.getElementById("nickels-output").innerHTML=changeNickel;

    changePenny = Math.round(calculated / 1);
    var calculated = calculated % 1;
    document.getElementById("pennies-output").innerHTML=changePenny;

    console.log("changeOne " + changeOne, "changeQuarter " + changeQuarter, "changeDime " + changeDime, "changeNickel " + changeNickel, "changePenny" + changePenny);
    
    //modified calculated to have change value from above subtracted. 

    //change DOM to reflect change owed.

}
$("#calculate-change").on("click",(Change));
    
    