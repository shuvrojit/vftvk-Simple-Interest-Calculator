
var principle = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = (principle * rate * years ) / 100;
var year = new Date().getFullYear() + parseInt(years);
var html_update = "<p>If you deposit <mark>"+principle+"</mark><br>at an interest rate of <mark>"+rate+"</mark><br>You will receive an amount of <mark>"+interest+"</mark><br>in the year <mark>"+years+"</mark><br></p>";

function compute() {
    document.getElementById("result").innerHTML = html_update;
}

function updateRate() {
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rangeval").innerText=rateVal;
}
