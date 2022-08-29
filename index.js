var targetnumber = 1000000;

var usernumber = 570;

var guesses = 0;

var maxval = 1000000000;

function lowerSquare(num) {
  return [(Math.floor(Math.sqrt(num)))**2,(Math.floor(Math.sqrt(num))+1)**2]
}

document.getElementById("Target").innerHTML = "Target: " + String(targetnumber);

document.getElementById("usernumber").innerHTML = String(usernumber);


document.querySelectorAll(".operationbuttons")[0].addEventListener("click", function() {
  if (usernumber + 1 <= maxval) {
    usernumber = usernumber + 1;
    guesses = guesses + 1;
    document.querySelectorAll(".error-messages")[0].style.color = "#525252";
    document.querySelectorAll(".error-messages")[0].innerHTML = "_";
  } else {
    pass
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+String(guesses);
});

document.querySelectorAll(".operationbuttons")[1].addEventListener("click", function() {
  if (usernumber * 2 <= maxval) {
    usernumber = usernumber * 2;
    guesses = guesses + 1;
    document.querySelectorAll(".error-messages")[0].style.color = "#525252";
    document.querySelectorAll(".error-messages")[0].innerHTML = "_";
  } else {
    pass
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+String(guesses);
});

document.querySelectorAll(".operationbuttons")[2].addEventListener("click", function() {
  if (usernumber * 10 <= maxval) {
    usernumber = usernumber * 10;
    guesses = guesses + 1;
    document.querySelectorAll(".error-messages")[0].style.color = "#525252";
    document.querySelectorAll(".error-messages")[0].innerHTML = "_";
  } else {
    pass
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+String(guesses);
});

document.querySelectorAll(".operationbuttons")[3].addEventListener("click", function() {
  if (usernumber * usernumber <= maxval) {
    usernumber = usernumber * usernumber;
    guesses = guesses + 1;
    document.querySelectorAll(".error-messages")[0].style.color = "#525252";
    document.querySelectorAll(".error-messages")[0].innerHTML = "_";
  } else {
    pass
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+String(guesses);
});

document.querySelectorAll(".operationbuttons")[4].addEventListener("click", function() {
  if (usernumber - 1 > 0) {
    usernumber = usernumber - 1;
    guesses = guesses + 1;
    document.querySelectorAll(".error-messages")[0].style.color = "#525252";
    document.querySelectorAll(".error-messages")[0].innerHTML = "_";
  } else {
    pass
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+String(guesses);
});


document.querySelectorAll(".operationbuttons")[5].addEventListener("click", function() {
  if (usernumber % 2 == 0) {
    usernumber = usernumber / 2;
    guesses = guesses + 1;
    document.querySelectorAll(".error-messages")[0].style.color = "#525252";
    document.querySelectorAll(".error-messages")[0].innerHTML = "_";
  } else {
    pass
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+String(guesses);
});


document.querySelectorAll(".operationbuttons")[6].addEventListener("click", function() {
  if (usernumber % 10 == 0 ) {
    usernumber = usernumber / 10;
    guesses = guesses + 1;
    document.querySelectorAll(".error-messages")[0].style.color = "#525252";
    document.querySelectorAll(".error-messages")[0].innerHTML = "_";
  } else {
    pass
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+String(guesses);
});

document.querySelectorAll(".operationbuttons")[7].addEventListener("click", function() {
  if (Math.sqrt(usernumber)%1==0) {
    usernumber = Math.sqrt(usernumber);
    guesses = guesses + 1;
  } else {
    let x = lowerSquare(usernumber)
    document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
    document.querySelectorAll(".error-messages")[0].innerHTML = "The nearest perfect squares are " + String(x[0])+ " and " +String(x[1]);
  }
  document.getElementById("usernumber").innerHTML = String(usernumber);
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+String(guesses);
});
