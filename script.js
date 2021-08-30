function compute()
{
    if(principal.value < 1){
        alert("Amount has to be a positive quantity")
        principal.focus()
        return
    }
    let interest = principal.value * years.value * rate.value / 100;
    yearInFuture = new Date().getFullYear() + parseInt(years.value);
    result = document.getElementById("result")
    result.innerHTML = "<p>If you deposit <mark>"+ principal.value +"</mark>,<br>an interest rate of <mark>" + rate.value + "%</mark>.<br>You will receive an amount of <mark>"+interest+"</mark>,<br>in the year <mark>"+yearInFuture+"</mark></p>";
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

 function onclick()
 {
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
    
}

function validation()
{
    var principal = document.getElementById("principal").value;
    if (principal == NaN || principal <=0){
        alert("Please enter a positive value!");
        document.getElementById("principal").focus();
    }
    else {
        compute();
    }
    function allowModals(){
  for (const i of document.getElementsByTagName('iframe')) {
    if (!i.sandbox.supports('allow-modals')) {
      console.warn("Your browser doesn't support the 'allow-modals' attribute :(");
      break;
    }
    if (i.sandbox.contains('allow-modals')) continue;
    console.info(i, "doesn't allow modals");
    i.sandbox.add('allow-modals');
    console.info(i, 'now allows modals');
  }
}
}
