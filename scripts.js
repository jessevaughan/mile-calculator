$('input.number').keyup(function(event) {

  // skip for arrow keys
  if(event.which >= 37 && event.which <= 40){
   event.preventDefault();
  }

  $(this).val(function(index, value) {
      value = value.replace(/,/g,'');
      return numberWithCommas(value);
  });
});

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
function show_cal(){

    function num(){

    // Miles Savings
    b=Number(document.form1.num2.value.replace(/\,/g,''));
    c=Math.round(b*(.56));
    document.form1.result2.value=c;

    // Time spent logging value
    x=Number(document.form1.num3.value.replace(/\,/g,''));
    y=Number(document.form1.num4.value.replace(/\,/g,''));
    z=Math.round(x*y*(52));
    document.form1.result4.value=z;

    // Miles you forgot
    b=Number(document.form1.num2.value.replace(/\,/g,''));
    d=Math.round(b*(.1));
    document.form1.result3.value=d;

    // Miles you forgot value
    t=Number(document.form1.result3.value=d);
    u=Math.round(t*(.56));
    document.form1.result5.value=u;

    // Total Yearly Savings
    b=Number(document.form1.result2.value=c);
    j=Number(document.form1.result4.value=z);
    k=Number(document.form1.result5.value=u);
    l=Math.round(b+b+(59.99)+j+k);
    document.form1.result6.value=l;
    }

    //////////

    // Miles Savings
    function multiply(){
    b=Number(document.form1.num2.value.replace(/\,/g,''));
    c=Math.round(b*(.56));
    document.form1.result2.value=c;
    }

    // Time spent logging value
    function multiply(){
    x=Number(document.form1.num3.value.replace(/\,/g,''));
    y=Number(document.form1.num4.value.replace(/\,/g,''));
    z=Math.round(x*y*(52));
    document.form1.result4.value=z;
    }

    // Miles you forgot
    function multiply(){
    b=Number(document.form1.num2.value.replace(/\,/g,''));
    d=Math.round(b*(.1));
    document.form1.result3.value=d;
    }

    // Miles you forgot value
    function multiply(){
    t=Number(document.form1.result3.value=d);
    u=Math.round(t*(.56));
    document.form1.result5.value=u;
    }

    // Total Yearly Savings
    function addition(){
    b=Number(document.form1.result2.value=c);
    j=Number(document.form1.result4.value=z);
    k=Number(document.form1.result5.value=u);
    l=Math.round(b+b+(59.99)+j+k);
    document.form1.result6.value=l;
    }

    num();
}
function CommaFormatted(amount) {
    var delimiter = ","; // replace comma if desired
    var a = amount.split('.',2)
    var d = a[1];
    var i = parseInt(a[0]);
    if(isNaN(i)) { return ''; }
    var minus = '';
    if(i < 0) { minus = '-'; }
    i = Math.abs(i);
    var n = new String(i);
    var a = [];
    while(n.length > 3) {
        var nn = n.substr(n.length-3);
        a.unshift(nn);
        n = n.substr(0,n.length-3);
    }
    if(n.length > 0) { a.unshift(n); }
    n = a.join(delimiter);
    if(d.length < 1) { amount = n; }
    else { amount = n + '.' + d; }
    amount = minus + amount;
    return amount;
}