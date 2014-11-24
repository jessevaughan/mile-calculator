var input1 = parseInt($('#taxableIncome').val().replace(/,/gi,'')) || 0;
var input2 = parseInt($('#milesYouDrive').val().replace(/,/gi,'')) || 0;
var input3 = parseInt($('#timeSpent').val().replace(/,/gi,'')) || 0;
var input4 = parseInt($('#timeWorth').val().replace(/,/gi,'')) || 0; 
var input5 = parseInt($('#peaceValue').val().replace(/,/gi,'')) || 0;


//WITH MILEAGE DEDUCTION
// if input1 is < 117,001
// Taxable income before mileage deduction
input1
-

(
input1
-
// Less Deductible business miles (.56)
((input2 + (input2 * (10 / 100))) * .56)
-
// Less Software expenses
59.99
)
*
.9235
*
.0765
=
// Taxable income after mileage deduction
taxValue01


// if input1 > 117001
(((input2 + (input2 * (10 / 100))) * .56) + 59.99 * .029 * -1 * .5)

(input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + (input1 - (input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99)) * .9235 * .0765)

numberWithCommas(Math.max(0,Math.round( input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99 + (input1 - (input1 - ((input2 + (input2 * (10 / 100))) * .56) - 59.99)) * .9235 * .0765 )))





// Federal tax rates - Single
// if taxValue01 > 8925
9,075 * .10

+
// if taxValue01 < 9076
0
//if taxValue01 > 36900
(36900 - 9076) * .15
// else
(taxValue01 - 9075) * .15

+
// if taxValue01 < 36901
0
//if taxValue01 > 89350
(89350 - 36901) * .25
// else
(taxValue01 - 9075) * .25

+
// if taxValue01 < 89351
0
//if taxValue01 > 186350
(186350 - 89351) * .28
// else
(taxValue01 - 9075) * .28

+
// if taxValue01 < 186351
0
//if taxValue01 > 405100
(405100 - 186351) * .33
// else
(taxValue01 - 9075) * .33

+
// if taxValue01 < 405101
0
//if taxValue01 > 406750
(406750 - 405101) * .35
// else
(taxValue01 - 9075) * .35

+
// if taxValue01 < 406751
0
//if taxValue01 > 406751
(taxValue01 - 406751) * .3960

=
// Total Income Tax
taxValue02




// if input1 - (input2 + (input2 * (10 / 100))) * .56 - 60 + (input1 - (input1 - 8301 - 60)) * .9235 * .0765 < 117001
input1 - (input2 + (input2 * (10 / 100))) * .56 - 60 + (input1 - (input1 - 8301 - 60)) * .9235 * .0765
*
.9235
*
.153
=
// Self-Employment tax
taxValue03

// if input1 - (input2 + (input2 * (10 / 100))) * .56 - 60 + (input1 - (input1 - 8301 - 60)) * .9235 * .0765 > 117001
(117000 * .124) + (input1 - (input2 + (input2 * (10 / 100))) * .56 - 60 + (input1 - (input1 - 8301 - 60)) * .9235 * .0765)
*
.029
=
// Self-Employment tax
taxValue03



// Total Federal Tax
taxValue02 + taxValue03
=
taxValue04



// Taxable State Income Tax
// California tax rates - Single
// if taxValue01 > 8925
7749 * .01
// else
taxValue01 * .01

+
// if taxValue01 < 7750
0
// if taxValue01 > 18371
(18371 - 7750) * .02
// else
(taxValue01 - 7749) * .02

+
// if taxValue01 < 18372
0
// if taxValue01 > 28995
(28995 - 18372) * .04
// else
(taxValue01 - 18371) * .04

+
// if taxValue01 < 28996
0
// if taxValue01 > 40250
(40250 - 28996) * .06
// else
(taxValue01 - 28995) * .06

+
// if taxValue01 < 40251
0
// if taxValue01 > 50869
(50869 - 40251) * .08
// else
(taxValue01 - 40250) * .08

+
// if taxValue01 < 50870
0
// if taxValue01 > 259844
(259844 - 50870) * .093
// else
(taxValue01 - 50869) * .093

+
// if taxValue01 < 259845
0
// if taxValue01 > 311812
(311812 - 259845) * .1030
// else
(taxValue01 - 259844) * .1030

+
// if taxValue01 < 311813
0
// if taxValue01 > 519687
(519687 - 311813) * .1130
// else
(taxValue01 - 311812) * .1130

+
// if taxValue01 < 519688
0
// if taxValue01 > 519688
(taxValue01 - 519688) * .1230

=
taxValue05
-
106
=
taxValue06


taxValue04 + taxValue06 = totalTaxWith




totalTax - totalTaxWith = cashSavings
