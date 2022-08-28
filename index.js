var targetnumber = 1000000;

var usernumber = 570;

var guesses = 0;

document.getElementById("Target").innerHTML = "Target: " + String(targetnumber);

document.getElementById("usernumber").innerHTML = String(usernumber);




document.querySelectorAll(".operationbuttons")[0].addEventListener("click", function() {
  if (usernumber + 1 <= 1000000000) {
    usernumber = usernumber + 1;
  } else {
    pass
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
});

document.querySelectorAll(".operationbuttons")[1].addEventListener("click", function() {
  if (usernumber * 2 <= 1000000000) {
    usernumber = usernumber * 2;
  } else {
    pass
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
});

document.querySelectorAll(".operationbuttons")[2].addEventListener("click", function() {
  if (usernumber * 10 <= 1000000000) {
    usernumber = usernumber * 10;
  } else {
    pass
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
});

document.querySelectorAll(".operationbuttons")[3].addEventListener("click", function() {
  if (usernumber * usernumber <= 1000000000) {
    usernumber = usernumber * usernumber;
  } else {
    pass
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
});

document.querySelectorAll(".operationbuttons")[4].addEventListener("click", function() {
  if (usernumber - 1 > 0) {
    usernumber = usernumber - 1;
  } else {
    pass
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
});


document.querySelectorAll(".operationbuttons")[5].addEventListener("click", function() {
  if (usernumber % 2 == 0) {
    usernumber = usernumber / 2;
  } else {
    pass
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
});


document.querySelectorAll(".operationbuttons")[6].addEventListener("click", function() {
  if (usernumber % 10 == 0 ) {
    usernumber = usernumber / 10;
  } else {
    pass
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
});

document.querySelectorAll(".operationbuttons")[7].addEventListener("click", function() {
  if (Math.sqrt(usernumber)%1==0) {
    usernumber = Math.sqrt(usernumber)
  } else {
    pass
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
});
