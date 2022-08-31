var targetnumber = 1000000;

var maxval = 1000000000;

const backdate = new Date('August 30, 2022, 0:0:30');

const datenow = Date.now();

const puzzledaynumber = Math.floor(((datenow - backdate) / (1000 * 60 * 60))) + 1;


/* 36e5 days differece*/

console.log(backdate);
console.log(datenow);

console.log(puzzledaynumber);


function lowerSquare(num) {
  return [(Math.floor(Math.sqrt(num))) ** 2, (Math.floor(Math.sqrt(num)) + 1) ** 2]
}

/*local storage initializing */

if (localStorage.getItem("user-games-won") === null) {
  localStorage.setItem("user-games-won", "0")
}

if (localStorage.getItem("user-daily-streak") === null) {
  localStorage.setItem("user-daily-streak", "0")
}

if (localStorage.getItem("user-longest-streak") === null) {
  localStorage.setItem("user-longest-streak", "0")
}

if (localStorage.getItem("userscore") === null) {
  localStorage.setItem("userscore", "0");
};

if (localStorage.getItem("usernumber") === null) {
  localStorage.setItem("usernumber", "570");
};

if (localStorage.getItem("user-game-array") === null) {
  localStorage.setItem("user-game-array", "0")
}

if (localStorage.getItem("user-game-array").split(",").length < puzzledaynumber) {
  const gamearray = localStorage.getItem("user-game-array").split(",");
  while (gamearray.length < puzzledaynumber) {
    gamearray.push("0");
  }
  localStorage.setItem("user-game-array", gamearray.toString());
}

if (localStorage.getItem("best-score") === null) {
  localStorage.setItem("best-score", "---");
} else {
  if (localStorage.getItem("user-game-array")[localStorage.getItem("user-game-array").length] === "0") {
    localStorage.setItem("best-score", "---");
  }
}

array = gameStreaks(localStorage.getItem("user-game-array").split(","));
localStorage.setItem("user-games-won", array[0]);
localStorage.setItem("user-daily-streak", array[1]);
localStorage.setItem("user-longest-streak", array[2]);
document.querySelector('.games-won').innerHTML = localStorage.getItem("user-games-won");
document.querySelector('.daily-streak').innerHTML = localStorage.getItem("user-daily-streak");
document.querySelector('.longest-streak').innerHTML = localStorage.getItem("user-longest-streak");


document.querySelectorAll(".best-score")[0].innerHTML = localStorage.getItem("best-score");

console.log(localStorage.getItem("user-game-array")[localStorage.getItem("user-game-array").length - 1]);

console.log(localStorage.getItem("user-game-array").split(","));

document.querySelectorAll(".score")[0].innerHTML = "Moves: " + localStorage.getItem("userscore");

document.getElementById("Target").innerHTML = "Target: " + String(targetnumber);

document.getElementById("usernumber").innerHTML = String((parseInt(localStorage.getItem("usernumber"))));


/*Math Operations For Buttons*/
document.querySelectorAll(".operationbuttons")[0].addEventListener("click", function() {
  if (parseInt(localStorage.getItem("usernumber")) + 1 <= maxval) {
    localStorage.setItem("usernumber", parseInt(localStorage.getItem("usernumber")) + 1);
    madeValidMove();
  } else {
    tooLargeError();
  }
  updateCenterNumber()
});

document.querySelectorAll(".operationbuttons")[1].addEventListener("click", function() {
  if (parseInt(localStorage.getItem("usernumber")) * 2 <= maxval) {
    localStorage.setItem("usernumber", parseInt(localStorage.getItem("usernumber")) * 2);
    madeValidMove();
  } else {
    tooLargeError();
  }
  updateCenterNumber()
});

document.querySelectorAll(".operationbuttons")[2].addEventListener("click", function() {
  if (parseInt(localStorage.getItem("usernumber")) * 10 <= maxval) {
    localStorage.setItem("usernumber", parseInt(localStorage.getItem("usernumber")) * 10);
    madeValidMove();
  } else {
    tooLargeError();
  }
  updateCenterNumber()
});

document.querySelectorAll(".operationbuttons")[3].addEventListener("click", function() {
  if (parseInt(localStorage.getItem("usernumber")) * parseInt(localStorage.getItem("usernumber")) <= maxval) {
    localStorage.setItem("usernumber", (parseInt(localStorage.getItem("usernumber"))) * (parseInt(localStorage.getItem("usernumber"))));
    madeValidMove();
  } else {
    tooLargeError();
  }
  updateCenterNumber()
});

document.querySelectorAll(".operationbuttons")[4].addEventListener("click", function() {
  if (parseInt(localStorage.getItem("usernumber")) - 1 > 0) {
    localStorage.setItem("usernumber", parseInt(localStorage.getItem("usernumber")) - 1);
    madeValidMove();
  } else {}
  updateCenterNumber()
});

document.querySelectorAll(".operationbuttons")[5].addEventListener("click", function() {
  if (parseInt(localStorage.getItem("usernumber")) % 2 == 0) {
    localStorage.setItem("usernumber", parseInt(localStorage.getItem("usernumber")) / 2);
    madeValidMove();
  } else {
    divisionError();
  }
  updateCenterNumber()
});

document.querySelectorAll(".operationbuttons")[6].addEventListener("click", function() {
  if (parseInt(localStorage.getItem("usernumber")) % 10 == 0) {
    localStorage.setItem("usernumber", parseInt(localStorage.getItem("usernumber")) / 10);
    madeValidMove();
  } else {
    divisionError();
  }
  updateCenterNumber()
});

document.querySelectorAll(".operationbuttons")[7].addEventListener("click", function() {
  if (Math.sqrt(parseInt(localStorage.getItem("usernumber"))) % 1 == 0) {
    localStorage.setItem("usernumber", Math.sqrt(parseInt(localStorage.getItem("usernumber"))));
    madeValidMove();
  } else {
    nonRootable();
  }
  updateCenterNumber()
});



/*bottom button functionality */
document.querySelector('.close-stats').addEventListener('click', function() {
  document.querySelector('.bg-modal-stats').style.display = "none";
})

document.querySelectorAll('.open-stats')[0].addEventListener('click', function() {
  document.querySelector('.bg-modal-stats').style.display = "flex";
})

document.querySelector('.close-info').addEventListener('click', function() {
  document.querySelector('.bg-modal-info').style.display = "none";
})

document.querySelectorAll('.open-info')[0].addEventListener('click', function() {
  document.querySelector('.bg-modal-info').style.display = "flex";
})



/*local storage operations*/

document.querySelector('.tryagain-button').addEventListener('click', function() {
  localStorage.setItem("userscore", "0");
  document.querySelectorAll(".score")[0].innerHTML = "Moves: " + localStorage.getItem("userscore");
  document.querySelector('.bg-modal-stats').style.display = "none";
  localStorage.setItem("usernumber", String(570));
  document.getElementById("usernumber").innerHTML = String(parseInt(localStorage.getItem("usernumber")));
})



/*update info upon win*/
function winning() {
  if (localStorage.getItem("user-game-array").split(",")[puzzledaynumber - 1] != "1") {
    const gamearray = localStorage.getItem("user-game-array").split(",");
    gamearray[puzzledaynumber - 1] = "1";
    localStorage.setItem("user-game-array", gamearray.toString());
    document.querySelector('.best-score').innerHTML = localStorage.getItem("userscore");
    localStorage.setItem("best-score", localStorage.getItem("userscore"));
    array = gameStreaks(localStorage.getItem("user-game-array").split(","));
    localStorage.setItem("user-games-won", array[0]);
    localStorage.setItem("user-daily-streak", array[1]);
    localStorage.setItem("user-longest-streak", array[2]);
    document.querySelector('.games-won').innerHTML = localStorage.getItem("user-games-won");
    document.querySelector('.daily-streak').innerHTML = localStorage.getItem("user-daily-streak");
    document.querySelector('.longest-streak').innerHTML = localStorage.getItem("user-longest-streak");
  } else {
    if (parseInt(localStorage.getItem("userscore")) < parseInt(localStorage.getItem("best-score"))) {
      localStorage.setItem("best-score", localStorage.getItem("userscore"));
      document.querySelector('.best-score').innerHTML = localStorage.getItem("userscore");
    }
  }
  console.log(localStorage);
}

/*valid move error drop*/
function madeValidMove() {
  localStorage.setItem("userscore", parseInt(localStorage.getItem("userscore")) + 1);
  document.querySelectorAll(".error-messages")[0].style.color = "#525252";
  document.querySelectorAll(".error-messages")[0].innerHTML = "_";
}

/*division error*/
function divisionError() {
  document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
  document.querySelectorAll(".error-messages")[0].innerHTML = "Can't Divide";
  document.querySelectorAll(".usernumber")[0].style.animation = "shake .15s";
  setTimeout(function() {
    document.querySelectorAll(".usernumber")[0].style.animation = "none";
  }, 150);
}

/*large error*/
function tooLargeError() {
  document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
  document.querySelectorAll(".error-messages")[0].innerHTML = "Too Large";
  document.querySelectorAll(".usernumber")[0].style.animation = "shake .15s";
  setTimeout(function() {
    document.querySelectorAll(".usernumber")[0].style.animation = "none";
  }, 150);
}

/*sqrt error*/
function nonRootable() {
  let x = lowerSquare(parseInt(localStorage.getItem("usernumber")))
  document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
  document.querySelectorAll(".error-messages")[0].innerHTML = "Nearest perfect squares: " + String(x[0]) + " and " + String(x[1]);
  document.querySelectorAll(".usernumber")[0].style.animation = "shake .15s";
  setTimeout(function() {
    document.querySelectorAll(".usernumber")[0].style.animation = "none";
  }, 150);
}

/*update number and check win*/
function updateCenterNumber() {
  document.getElementById("usernumber").innerHTML = String(parseInt(localStorage.getItem("usernumber")));
  document.querySelectorAll(".score")[0].innerHTML = "Moves: " + localStorage.getItem("userscore");
  if (parseInt(localStorage.getItem("usernumber")) == targetnumber) {
    winning();
    document.querySelector('.bg-modal-stats').style.display = "flex";
  }
}

/* read game stats */
function gameStreaks(array) {
  curstreak = 0
  maxstreak = 0
  count = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "1") {
      count++;
      curstreak++;
    } else {
      if (maxstreak < curstreak) {
        maxstreak = curstreak;
        curstreak = 0
      }
    }
  }
  if (maxstreak < curstreak) {
    maxstreak = curstreak;
  }
  return [String(count), String(curstreak), String(maxstreak)]
}
