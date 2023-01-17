var currentTab = 0;
showTab(currentTab);

function showTab(n) 
{
  var tabs = document.getElementsByClassName("tab");
  tabs[n].style.display = "block";

  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }

  fixStepIndicator(n);
}

function nextPage(n) 
{
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab += n;
  if (currentTab >= x.length) {
    document.getElementById("buyForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() 
{
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " text-warning";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("bi-rocket-takeoff-fill")[currentTab].className += " opacity-50";
  }
  return valid;
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("bi-rocket-takeoff-fill");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" opacity-100", "");
    }
    x[n].className += " opacity-100";
  }