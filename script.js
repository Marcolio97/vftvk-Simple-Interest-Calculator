function compute()
{
    var principal = Number(document.getElementById("principal").value);
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
      var interest = principal * years * rate /100;
     var year = new Date().getFullYear()+parseInt(years);
     var amount = principal * years * rate /100;
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
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
    console.log("yo")
    if (principal == NaN || principal <=0){
        console.log("hi")
        alert("Please enter a positive value!");
        document.getElementById("principal").focus();
    }
    else {
        console.log("hello")
        compute();
    }
}
