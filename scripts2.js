$( document ).ready(function() {
  $(function() {
    $("body").on('keyup',function(){
      updateTotal();
  });

  var updateTotal = function () {

    // Input Variables
  	var input1 = parseInt($('#taxableIncome').val().replace(/,/gi,'')) || 0;
  	var input2 = parseInt($('#milesYouDrive').val().replace(/,/gi,'')) || 0;
  	var input3 = parseInt($('#timeSpent').val().replace(/,/gi,'')) || 0;
  	var input4 = parseInt($('#timeWorth').val().replace(/,/gi,'')) || 0; 
  	var input5 = parseInt($('#peaceValue').val().replace(/,/gi,'')) || 0;

    // Tax Rates
    if ( input1 < 117001 ) {
      var selfTax = (input1 - (input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99)) * .9235 * .0765
    } else {
      var selfTax = (-((input2 + (input2 * (10 / 100))) * .56) - 59.99) * .029 * -1 * .5
    }

    var afterTax = (input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + selfTax);

    var afterTaxNO = input1;

    // YEARLY SAVINGS
    $('.peace').text(numberWithCommas(Math.round(input5)));

    $('.timeValue').text(numberWithCommas(Math.round(input3 * input4 * 52)));
      var total2 = numberWithCommas((Math.round(input3 * input4 * 52)));

    $('.mileageValue').text(numberWithCommas(Math.round(input2 * (.56))));
      var total3 = numberWithCommas((Math.round(input2 * (.56))));

    $('.milesForgot').text(numberWithCommas(Math.round(input2 * (10 / 100))));
      var total5 = numberWithCommas(Math.round(input2 * (10 / 100)));
    
    $('.milesForgotValue').text(numberWithCommas(Math.round(input2 * (10 / 100) * (.56)))); 
      var total6 = numberWithCommas(Math.round(input2 * (10 / 100) * (.56)));

    var addTotal = numberWithCommas(Math.round((input2 * (.56)) + 59.99 + (input3 * input4 * 52) + (input2 * (10 / 100) * (.56)) + input5));
    
    $('.yearlyValue').text(addTotal);

    // Rates With
    // Federal Tax Rates
    if ( afterTax > 8925 ) {
      var valueFed01 = 9075 * .10;
    } else if ( afterTax < 8925 ) {
      var valueFed01 = afterTax * .10;
    } else {
      var valueFed01 = 0;
    }

    if ( afterTax < 9076 ) {
      var valueFed02 = 0;
    } else if ( afterTax > 36900 ) {
      var valueFed02 = (36900 - 9076) * .15;
    } else {
      var valueFed02 = ((input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + selfTax) - 9075) * .15;
    }

    if ( afterTax < 36901 ) {
      var valueFed03 = 0;
    } else if ( afterTax > 89350 ) {
      var valueFed03 = (89350 - 36901) * .25;
    } else {
      var valueFed03 = ((input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + selfTax) - 36900) * .15;
    }

    if ( afterTax < 89351 ) {
      var valueFed04 = 0;
    } else if ( afterTax > 186350 ) {
      var valueFed04 = (186350 - 89351) * .28;
    } else {
      var valueFed04 = ((input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + selfTax) - 89350) * .28;
    }

    if ( afterTax < 186351 ) {
      var valueFed05 = 0;
    } else if ( afterTax > 405100 ) {
      var valueFed05 = (405100 - 186351) * .33;
    } else {
      var valueFed05 = ((input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + selfTax) - 186350) * .33;
    }

    if ( afterTax < 405101 ) {
      var valueFed06 = 0;
    } else if ( afterTax > 406750 ) {
      var valueFed06 = (406750 - 405101) * .35;
    } else {
      var valueFed06 = ((input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + selfTax) - 405100) * .35;
    }

    if ( afterTax < 406751 ) {
      var valueFed07 = 0;
    } else {
      var valueFed07 = ((input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + selfTax) - 406750) * .3960;
    }


    // State Tax Rates
    if ( afterTax > 8925 ) {
      var valueState01 = 7749 * .01;
    } else if ( afterTax < 8925 ) {
      var valueState01 = afterTax * .01;
    } else {
      var valueState01 = 0;
    }

    if ( afterTax < 7750 ) {
      var valueState02 = 0;
    } else if ( afterTax > 18371 ) {
      var valueState02 = (18371 - 7750) * .02;
    } else {
      var valueState02 = ((input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + selfTax) - 7749) * .02;
    }

    if ( afterTax < 18372 ) {
      var valueState03 = 0;
    } else if ( afterTax > 28995 ) {
      var valueState03 = (28995 - 18372) * .04;
    } else {
      var valueState03 = ((input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + selfTax) - 18371) * .04;
    }

    if ( afterTax < 28996 ) {
      var valueState04 = 0;
    } else if ( afterTax > 40250 ) {
      var valueState04 = (40250 - 28996) * .06;
    } else {
      var valueState04 = ((input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + selfTax) - 28995) * .06;
    }

    if ( afterTax < 40251 ) {
      var valueState05 = 0;
    } else if ( afterTax > 50869 ) {
      var valueState05 = (50869 - 40251) * .08;
    } else {
      var valueState05 = ((input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + selfTax) - 40250) * .08;
    }

    if ( afterTax < 50870 ) {
      var valueState06 = 0;
    } else if ( afterTax > 259844 ) {
      var valueState06 = (259844 - 50870) * .093;
    } else {
      var valueState06 = ((input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + selfTax) - 50869) * .093;
    }

    if ( afterTax < 259845 ) {
      var valueState07 = 0;
    } else if ( afterTax > 311812 ) {
      var valueState07 = (311812 - 259845) * .1030;
    } else {
      var valueState07 = ((input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + selfTax) - 259844) * .1030;
    }

    if ( afterTax < 311813 ) {
      var valueState08 = 0;
    } else if ( afterTax > 519687 ) {
      var valueState08 = (519687 - 311813) * .1130;
    } else {
      var valueState08 = ((input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + selfTax) - 311812) * .1130;
    }

    if ( afterTax < 519688 ) {
      var valueState09 = 0;
    } else {
      var valueState09 = (input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + selfTax) - 519687 * .1230;
    }

    var totalIncomeTax = valueFed01 + valueFed02 + valueFed03 + valueFed04 + valueFed05 + valueFed06 + valueFed07;

    var totalState = valueState01 + valueState02 + valueState03 + valueState04 + valueState05 + valueState06 + valueState07 + valueState08 + valueState09 - 106;

    if ( afterTax < 117001 ) {
      var selfEmploymentTax = afterTax * .9235 * .153;
    } else if ( afterTax > 117000 ) {
      var selfEmploymentTax = (117000 * .124) + afterTax * .029;
    }

    var totalFederalTax = totalIncomeTax + selfEmploymentTax;

    var totalWith = totalIncomeTax + selfEmploymentTax + totalState;





    // Rates WITHOUT
    // Federal Tax Rates
    if ( afterTaxNO > 8925 ) {
      var valueFedNO01 = 9075 * .10;
    } else if ( afterTaxNO < 8925 ) {
      var valueFedNO01 = afterTaxNO * .10;
    } else {
      var valueFedNO01 = 0;
    }

    if ( afterTaxNO < 9076 ) {
      var valueFedNO02 = 0;
    } else if ( afterTaxNO > 36900 ) {
      var valueFedNO02 = (36900 - 9076) * .15;
    } else {
      var valueFedNO02 = (input1 - 9075) * .15;
    }

    if ( afterTaxNO < 36901 ) {
      var valueFedNO03 = 0;
    } else if ( afterTaxNO > 89350 ) {
      var valueFedNO03 = (89350 - 36901) * .25;
    } else {
      var valueFedNO03 = (input1 - 36900) * .15;
    }

    if ( afterTaxNO < 89351 ) {
      var valueFedNO04 = 0;
    } else if ( afterTaxNO > 186350 ) {
      var valueFedNO04 = (186350 - 89351) * .28;
    } else {
      var valueFedNO04 = (input1 - 89350) * .28;
    }

    if ( afterTaxNO < 186351 ) {
      var valueFedNO05 = 0;
    } else if ( afterTaxNO > 405100 ) {
      var valueFedNO05 = (405100 - 186351) * .33;
    } else {
      var valueFedNO05 = (input1 - 186350) * .33;
    }

    if ( afterTaxNO < 405101 ) {
      var valueFedNO06 = 0;
    } else if ( afterTaxNO > 406750 ) {
      var valueFedNO06 = (406750 - 405101) * .35;
    } else {
      var valueFedNO06 = (input1 - 405100) * .35;
    }

    if ( afterTaxNO < 406751 ) {
      var valueFedNO07 = 0;
    } else {
      var valueFedNO07 = (input1 - 406750) * .3960;
    }


    // State Tax Rates
    if ( afterTaxNO > 8925 ) {
      var valueStateNO01 = 7749 * .01;
    } else if ( afterTaxNO < 8925 ) {
      var valueStateNO01 = afterTaxNO * .01;
    } else {
      var valueStateNO01 = 0;
    }

    if ( afterTaxNO < 7750 ) {
      var valueStateNO02 = 0;
    } else if ( afterTaxNO > 18371 ) {
      var valueStateNO02 = (18371 - 7750) * .02;
    } else {
      var valueStateNO02 = (input1 - 7749) * .02;
    }

    if ( afterTaxNO < 18372 ) {
      var valueStateNO03 = 0;
    } else if ( afterTaxNO > 28995 ) {
      var valueStateNO03 = (28995 - 18372) * .04;
    } else {
      var valueStateNO03 = (input1 - 18371) * .04;
    }

    if ( afterTaxNO < 28996 ) {
      var valueStateNO04 = 0;
    } else if ( afterTaxNO > 40250 ) {
      var valueStateNO04 = (40250 - 28996) * .06;
    } else {
      var valueStateNO04 = (input1 - 28995) * .06;
    }

    if ( afterTaxNO < 40251 ) {
      var valueStateNO05 = 0;
    } else if ( afterTaxNO > 50869 ) {
      var valueStateNO05 = (50869 - 40251) * .08;
    } else {
      var valueStateNO05 = (input1 - 40250) * .08;
    }

    if ( afterTaxNO < 50870 ) {
      var valueStateNO06 = 0;
    } else if ( afterTaxNO > 259844 ) {
      var valueStateNO06 = (259844 - 50870) * .093;
    } else {
      var valueStateNO06 = (input1 - 50869) * .093;
    }

    if ( afterTaxNO < 259845 ) {
      var valueStateNO07 = 0;
    } else if ( afterTaxNO > 311812 ) {
      var valueStateNO07 = (311812 - 259845) * .1030;
    } else {
      var valueStateNO07 = (input1 - 259844) * .1030;
    }

    if ( afterTaxNO < 311813 ) {
      var valueStateNO08 = 0;
    } else if ( afterTaxNO > 519687 ) {
      var valueStateNO08 = (519687 - 311813) * .1130;
    } else {
      var valueStateNO08 = (input1 - 311812) * .1130;
    }

    if ( afterTaxNO < 519688 ) {
      var valueStateNO09 = 0;
    } else {
      var valueStateNO09 = input1 - 519687 * .1230;
    }

    var totalIncomeTaxNO = valueFedNO01 + valueFedNO02 + valueFedNO03 + valueFedNO04 + valueFedNO05 + valueFedNO06 + valueFedNO07;

    var totalStateNO = valueStateNO01 + valueStateNO02 + valueStateNO03 + valueStateNO04 + valueStateNO05 + valueStateNO06 + valueStateNO07 + valueStateNO08 + valueStateNO09 - 106;

    if ( afterTaxNO < 117001 ) {
      var selfEmploymentTaxNO = afterTaxNO * .9235 * .153;
    } else if ( afterTaxNO > 117000 ) {
      var selfEmploymentTaxNO = (117000 * .124) + afterTaxNO * .029;
    }

    var totalFederalTaxNO = totalIncomeTaxNO + selfEmploymentTaxNO;

    var totalWithout = totalIncomeTaxNO + selfEmploymentTaxNO + totalStateNO;


    //VAR TOTALS

    var totalCashSavings = totalWithout - totalWith;

    $('.cashSavings2').text(numberWithCommas(Math.max(0,(afterTax).toFixed(2))));
    $('.cashSavings3').text(numberWithCommas(Math.max(0,(totalIncomeTax).toFixed(2))));
    $('.cashSavings4').text(numberWithCommas(Math.max(0,(selfEmploymentTax).toFixed(2))));
    $('.cashSavings5').text(numberWithCommas(Math.max(0,(totalFederalTax).toFixed(2))));
    $('.cashSavings6').text(numberWithCommas(Math.max(0,(totalState).toFixed(2))));
    $('.cashSavings7').text(numberWithCommas(Math.max(0,(totalWith).toFixed(2))));
    $('.cashSavings8').text(numberWithCommas(Math.max(0,(totalIncomeTaxNO).toFixed(2))));

    $('.cashSavings2x').text(numberWithCommas(Math.max(0,(afterTaxNO).toFixed(2))));
    $('.cashSavings3x').text(numberWithCommas(Math.max(0,(totalIncomeTaxNO).toFixed(2))));
    $('.cashSavings4x').text(numberWithCommas(Math.max(0,(selfEmploymentTaxNO).toFixed(2))));
    $('.cashSavings5x').text(numberWithCommas(Math.max(0,(totalFederalTaxNO).toFixed(2))));
    $('.cashSavings6x').text(numberWithCommas(Math.max(0,(totalStateNO).toFixed(2))));
    $('.cashSavings7x').text(numberWithCommas(Math.max(0,(totalWithout).toFixed(2))));


    if ( input1 > 1 ) {      
      $('.cashSavings').text(numberWithCommas(Math.max(0,(totalCashSavings).toFixed(2))));
    } else {
      $('.cashSavings').text(numberWithCommas(Math.max(0,(0).toFixed(2))));
    }
    

  	};
  });
});

//format the input fields displayed number
$(document).ready(function(){
  $('input.number').keyup(function(event){
    // skip for arrow keys
    if(event.which >= 37 && event.which <= 40){
      event.preventDefault();
    }
    var $this = $(this);
    var num = $this.val().replace(/,/gi, "").split("").reverse().join("");
      
    var num2 = RemoveRougeChar(num.replace(/(.{3})/g,"$1,").split("").reverse().join(""));
      
    console.log(num2);
      
    $this.val(num2);
  });
});

function RemoveRougeChar(convertString){    
  if(convertString.substring(0,1) == ","){
    return convertString.substring(1, convertString.length)            
  }
  return convertString;    
}

function isNumberKey(evt){    
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
};

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

