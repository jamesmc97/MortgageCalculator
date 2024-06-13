function calculate() {
  var principal = parseFloat(document.getElementById("principal").value);
  var rate = parseFloat(document.getElementById("rate").value);
  var term = parseInt(document.getElementById("term").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(term)) {
    document.getElementById("result").innerHTML = "Please enter valid numbers.";
    return;
  }

  var monthlyRate = rate / 1200;
  var months = term * 12;
  var monthlyPayment =
    (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

  document.getElementById("result").innerHTML =
    "Monthly Payment: $" + monthlyPayment.toFixed(2);
}
