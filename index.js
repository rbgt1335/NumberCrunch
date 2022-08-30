var targetnumber = 1000000;

var maxval = 1000000000;

const backdate = new Date('August 30, 2022, 0:0:30');

const datenow = Date.now();

const puzzledaynumber = Math.floor(((datenow-backdate) / (1000*60*60)));

/* 36e5 days differece*/

console.log(backdate);
console.log(datenow);

console.log(puzzledaynumber);

function lowerSquare(num) {
  return [(Math.floor(Math.sqrt(num)))**2,(Math.floor(Math.sqrt(num))+1)**2]
}


if (localStorage.getItem("userscore") === null) {
  localStorage.setItem("userscore", "0");
};

if (localStorage.getItem("usernumber") === null) {
  localStorage.setItem("usernumber", "570");
};



document.querySelectorAll(".score")[0].innerHTML = "Moves: "+localStorage.getItem("userscore");

document.getElementById("Target").innerHTML = "Target: " + String(targetnumber);

document.getElementById("usernumber").innerHTML = String((parseInt(localStorage.getItem("usernumber"))));

document.querySelectorAll(".operationbuttons")[0].addEventListener("click", function() {
  if (parseInt(localStorage.getItem("usernumber")) + 1 <= maxval) {
    localStorage.setItem("usernumber",parseInt(localStorage.getItem("usernumber"))+1);
    localStorage.setItem("userscore",parseInt(localStorage.getItem("userscore"))+1);
    document.querySelectorAll(".error-messages")[0].style.color = "#525252";
    document.querySelectorAll(".error-messages")[0].innerHTML = "_";
  } else {
    document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
    document.querySelectorAll(".error-messages")[0].innerHTML = "Too Large";
    document.querySelectorAll(".usernumber")[0].style.animation = "shake .15s";
    setTimeout(function() {
      document.querySelectorAll(".usernumber")[0].style.animation = "none";
    }, 150);
  }
  document.getElementById("usernumber").innerHTML = String((parseInt(localStorage.getItem("usernumber"))));
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+localStorage.getItem("userscore");
  if (parseInt(localStorage.getItem("usernumber"))==targetnumber) {
    document.querySelector('.bg-modal-stats').style.display = "flex";
  }
});

document.querySelectorAll(".operationbuttons")[1].addEventListener("click", function() {
  if (parseInt(localStorage.getItem("usernumber")) * 2 <= maxval) {
    localStorage.setItem("usernumber",parseInt(localStorage.getItem("usernumber"))*2);
    localStorage.setItem("userscore",parseInt(localStorage.getItem("userscore"))+1);
    document.querySelectorAll(".error-messages")[0].style.color = "#525252";
    document.querySelectorAll(".error-messages")[0].innerHTML = "_";
  } else {
    document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
    document.querySelectorAll(".error-messages")[0].innerHTML = "Too Large";
    document.querySelectorAll(".usernumber")[0].style.animation = "shake .15s";
    setTimeout(function() {
      document.querySelectorAll(".usernumber")[0].style.animation = "none";
    }, 150);
  }
  document.getElementById("usernumber").innerHTML = String((parseInt(localStorage.getItem("usernumber"))));
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+localStorage.getItem("userscore");
  if (parseInt(localStorage.getItem("usernumber"))==targetnumber) {
    document.querySelector('.bg-modal-stats').style.display = "flex";
  }
});

document.querySelectorAll(".operationbuttons")[2].addEventListener("click", function() {
  if (parseInt(localStorage.getItem("usernumber")) * 10 <= maxval) {
    localStorage.setItem("usernumber",parseInt(localStorage.getItem("usernumber"))*10);
    localStorage.setItem("userscore",parseInt(localStorage.getItem("userscore"))+1);
    document.querySelectorAll(".error-messages")[0].style.color = "#525252";
    document.querySelectorAll(".error-messages")[0].innerHTML = "_";
  } else {
    document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
    document.querySelectorAll(".error-messages")[0].innerHTML = "Too Large";
    document.querySelectorAll(".usernumber")[0].style.animation = "shake .15s";
    setTimeout(function() {
      document.querySelectorAll(".usernumber")[0].style.animation = "none";
    }, 150);
  }
  document.getElementById("usernumber").innerHTML = String((parseInt(localStorage.getItem("usernumber"))));
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+localStorage.getItem("userscore");
  if (parseInt(localStorage.getItem("usernumber"))==targetnumber) {
    document.querySelector('.bg-modal-stats').style.display = "flex";
  }
});

document.querySelectorAll(".operationbuttons")[3].addEventListener("click", function() {
  if (parseInt(localStorage.getItem("usernumber")) * parseInt(localStorage.getItem("usernumber")) <= maxval) {
    localStorage.setItem("usernumber",(parseInt(localStorage.getItem("usernumber")))*(parseInt(localStorage.getItem("usernumber"))));
    localStorage.setItem("userscore",parseInt(localStorage.getItem("userscore"))+1);
    document.querySelectorAll(".error-messages")[0].style.color = "#525252";
    document.querySelectorAll(".error-messages")[0].innerHTML = "_";
  } else {
    document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
    document.querySelectorAll(".error-messages")[0].innerHTML = "Too Large";
    document.querySelectorAll(".usernumber")[0].style.animation = "shake .15s";
    setTimeout(function() {
      document.querySelectorAll(".usernumber")[0].style.animation = "none";
    }, 150);
  }
  document.getElementById("usernumber").innerHTML = String(parseInt(localStorage.getItem("usernumber")));
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+localStorage.getItem("userscore");
  if (parseInt(localStorage.getItem("usernumber"))==targetnumber) {
    document.querySelector('.bg-modal-stats').style.display = "flex";
  }
});

document.querySelectorAll(".operationbuttons")[4].addEventListener("click", function() {
  if (parseInt(localStorage.getItem("usernumber")) - 1 > 0) {
    localStorage.setItem("usernumber",parseInt(localStorage.getItem("usernumber"))-1);
    localStorage.setItem("userscore",parseInt(localStorage.getItem("userscore"))+1);
    document.querySelectorAll(".error-messages")[0].style.color = "#525252";
    document.querySelectorAll(".error-messages")[0].innerHTML = "_";
  } else {
  }
  document.getElementById("usernumber").innerHTML = String(parseInt(localStorage.getItem("usernumber")));
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+localStorage.getItem("userscore");
  if (parseInt(localStorage.getItem("usernumber"))==targetnumber) {
    document.querySelector('.bg-modal-stats').style.display = "flex";
  }
});

document.querySelectorAll(".operationbuttons")[5].addEventListener("click", function() {
  if (parseInt(localStorage.getItem("usernumber")) % 2 == 0) {
    localStorage.setItem("usernumber",parseInt(localStorage.getItem("usernumber"))/2);
    localStorage.setItem("userscore",parseInt(localStorage.getItem("userscore"))+1);
    document.querySelectorAll(".error-messages")[0].style.color = "#525252";
    document.querySelectorAll(".error-messages")[0].innerHTML = "_";
  } else {
    document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
    document.querySelectorAll(".error-messages")[0].innerHTML = "Can't Divide";
    document.querySelectorAll(".usernumber")[0].style.animation = "shake .15s";
    setTimeout(function() {
      document.querySelectorAll(".usernumber")[0].style.animation = "none";
    }, 150);
  }
  document.getElementById("usernumber").innerHTML = String(parseInt(localStorage.getItem("usernumber")));
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+localStorage.getItem("userscore");
  if (parseInt(localStorage.getItem("usernumber"))==targetnumber) {
    document.querySelector('.bg-modal-stats').style.display = "flex";
  }
});

document.querySelectorAll(".operationbuttons")[6].addEventListener("click", function() {
  if (parseInt(localStorage.getItem("usernumber")) % 10 == 0 ) {
    localStorage.setItem("usernumber",parseInt(localStorage.getItem("usernumber"))/10);
    localStorage.setItem("userscore",parseInt(localStorage.getItem("userscore"))+1);
    document.querySelectorAll(".error-messages")[0].style.color = "#525252";
    document.querySelectorAll(".error-messages")[0].innerHTML = "_";
  } else {
    document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
    document.querySelectorAll(".error-messages")[0].innerHTML = "Can't Divide";
    document.querySelectorAll(".usernumber")[0].style.animation = "shake .15s";
    setTimeout(function() {
      document.querySelectorAll(".usernumber")[0].style.animation = "none";
    }, 150);
  }
  document.getElementById("usernumber").innerHTML = String(parseInt(localStorage.getItem("usernumber")));
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+localStorage.getItem("userscore");
  if (parseInt(localStorage.getItem("usernumber"))==targetnumber) {
    document.querySelector('.bg-modal-stats').style.display = "flex";
  }
});

document.querySelectorAll(".operationbuttons")[7].addEventListener("click", function() {
  if (Math.sqrt(parseInt(localStorage.getItem("usernumber")))%1==0) {
    localStorage.setItem("usernumber",Math.sqrt(parseInt(localStorage.getItem("usernumber"))));
    localStorage.setItem("userscore",parseInt(localStorage.getItem("userscore"))+1);
  } else {
    let x = lowerSquare(parseInt(localStorage.getItem("usernumber")))
    document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
    document.querySelectorAll(".error-messages")[0].innerHTML = "The nearest perfect squares are " + String(x[0])+ " and " +String(x[1]);
    document.querySelectorAll(".usernumber")[0].style.animation = "shake .15s";
    setTimeout(function() {
      document.querySelectorAll(".usernumber")[0].style.animation = "none";
    }, 150);
  }
  document.getElementById("usernumber").innerHTML = String(parseInt(localStorage.getItem("usernumber")));
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+localStorage.getItem("userscore");
  if (parseInt(localStorage.getItem("usernumber"))==targetnumber) {
    document.querySelector('.bg-modal-stats').style.display = "flex";
  }
});



/*bottom button functionality */
document.querySelector('.close-stats').addEventListener('click',function() {
  document.querySelector('.bg-modal-stats').style.display = "none";
})

document.querySelectorAll('.open-stats')[0].addEventListener('click',function() {
  document.querySelector('.bg-modal-stats').style.display = "flex";
})

document.querySelector('.close-info').addEventListener('click',function() {
  document.querySelector('.bg-modal-info').style.display = "none";
})

document.querySelectorAll('.open-info')[0].addEventListener('click',function() {
  document.querySelector('.bg-modal-info').style.display = "flex";
})



/*local storage operations*/

document.querySelector('.tryagain-button').addEventListener('click',function() {
  localStorage.setItem("userscore","0");
  document.querySelectorAll(".score")[0].innerHTML = "Moves: "+localStorage.getItem("userscore");
  document.querySelector('.bg-modal-stats').style.display = "none";
  localStorage.setItem("usernumber",String(570));
  document.getElementById("usernumber").innerHTML = String((parseInt(localStorage.getItem("usernumber"))));

})
