
function compute() {
    checkIfAmountZero();
    var years = Number(updateYears());
    var principle = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var year = new Date().getFullYear();
    var interest = (principle * rate * years ) / 100;
    var yr = year + years;
    var html_update = "<p>If you deposit <mark>"+principle+"</mark><br>at an interest rate of <mark>"+rate+"%</mark><br>You will receive an amount of <mark>"+interest+"</mark><br>in the year <mark>"+yr+"</mark><br></p>";

    return document.getElementById("result").innerHTML = html_update;
}

function checkIfAmountZero() {
    if (document.getElementById("principal").value <= 0) {
        alert("Please insert a positive number");
    }
}

function updateRate() {
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rangeval").innerText=rateVal;
}

function updateYears() {
    return document.getElementById("years").value;
}
