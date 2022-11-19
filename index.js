var maxval = 1000000000;
var deltaTime = 1000 * 60 * 60 * 24;
const backdate = new Date('October 5, 2022, 23:00:00');

var datenow = Date.now();
const puzzledaynumber = Math.floor(((datenow - backdate) / (deltaTime))) + 1;
var timetilnew = backdate;
timetilnew.setTime(backdate.getTime() + ((puzzledaynumber) * deltaTime + 3000) - Date.now());

function insertCommas(x) {
  return x.toLocaleString();
};

setTimeout(function() {
  window.location.reload();
}, timetilnew);

import {
  puzzle4
} from "./Puzzles/js4p.js";
import {
  puzzle5
} from "./Puzzles/js5p.js";
import {
  puzzle6
} from "./Puzzles/js6p.js";
import {
  puzzle7
} from "./Puzzles/js7p.js";
import {
  puzzle8
} from "./Puzzles/js8p.js";
import {
  puzzle9
} from "./Puzzles/js9p.js";
import {
  puzzlew4
} from "./Puzzles/jsw4p.js";
import {
  puzzlew5
} from "./Puzzles/jsw5p.js";
import {
  puzzlew6
} from "./Puzzles/jsw6p.js";
import {
  puzzlew7
} from "./Puzzles/jsw7p.js";
import {
  puzzlew8
} from "./Puzzles/jsw8p.js";
import {
  puzzlew9
} from "./Puzzles/jsw9p.js";

function getpuzzles(x) {
  return [
    [puzzle4[x][0], puzzle4[x][1]],
    [puzzle5[x][0], puzzle5[x][1]],
    [puzzle6[x][0], puzzle6[x][1]],
    [puzzle7[x][0], puzzle7[x][1]],
    [puzzle8[x][0], puzzle8[x][1]],
    [puzzle9[x][0], puzzle9[x][1]],
    [puzzlew4[x][0], puzzlew4[x][1], puzzlew4[x][2]],
    [puzzlew5[x][0], puzzlew5[x][1], puzzlew5[x][2]],
    [puzzlew6[x][0], puzzlew6[x][1], puzzlew6[x][2]],
    [puzzlew7[x][0], puzzlew7[x][1], puzzlew7[x][2]],
    [puzzlew8[x][0], puzzlew8[x][1], puzzlew8[x][2]],
    [puzzlew9[x][0], puzzlew9[x][1], puzzlew9[x][2]]
  ];
};
var colorpallete = {
  /* mode     h3       score      modecolor     stats */
  "daily-4": ["#339BE1", "#339BE1", "#339BE1", "#1070BB"],
  "daily-5": ["#05D7D8", "#05D7D8", "#05D7D8", "#08CCCC"],
  "daily-6": ["#80DB85", "#80DB85", "#80DB85", "#70CC70"],
  "daily-7": ["#E3E36B", "#E3E36B", "#E3E36B", "#CCCC3E"],
  "daily-8": ["#EFA01D", "#EFA01D", "#EFA01D", "#CC9933"],
  "daily-9": ["#EA3333", "#EA3333", "#EA3333", "#CC2222"],
  "wild--4": ["#339BE1", "#339BE1", "#339BE1", "#1070BB"],
  "wild--5": ["#05D7D8", "#05D7D8", "#05D7D8", "#08CCCC"],
  "wild--6": ["#80DB85", "#80DB85", "#80DB85", "#70CC70"],
  "wild--7": ["#E3E36B", "#E3E36B", "#E3E36B", "#CCCC3E"],
  "wild--8": ["#EFA01D", "#EFA01D", "#EFA01D", "#CC9933"],
  "wild--9": ["#EA3333", "#EA3333", "#EA3333", "#CC2222"]
};
const operations = {
  "1": [1, "+1"],
  "2": [2, "+2"],
  "3": [3, "+3"],
  "4": [4, "+4"],
  "5": [5, "+5"],
  "20": [2, "x2"],
  "30": [3, "x3"],
  "40": [4, "x4"],
  "50": [5, "x5"],
  "60": [6, "x6"],
  "70": [7, "x7"],
  "80": [8, "x8"],
  "90": [9, "x9"],
  "100": [10, 'x10'],
  "210": [2, "x²"],
  "310": [3, "x³"],
  "-1": [1, "-1"],
  "-2": [2, "-2"],
  "-3": [3, "-3"],
  "-4": [4, "-4"],
  "-5": [5, "-5"],
  "-20": [2, "÷2"],
  "-30": [3, "÷3"],
  "-40": [4, "÷4"],
  "-50": [5, "÷5"],
  "-60": [6, "÷6"],
  "-70": [7, "÷7"],
  "-80": [8, "÷8"],
  "-90": [9, "÷9"],
  "-100": [10, "÷10"],
  "-210": [2, "√x"],
  "-310": [3, "³√x"]
};
var arr = getpuzzles(puzzledaynumber - 1);

function initializeLocalStorage() {
  localStorage.setItem("mode", "daily-4");
  for (let i = 4; i < 10; i++) {
    localStorage.setItem(`user-games-won-${i}`, "0");
    localStorage.setItem(`user-daily-streak-${i}`, "0");
    localStorage.setItem(`user-longest-streak-${i}`, "0");
    localStorage.setItem(`userscore-${i}`, "0");
    localStorage.setItem(`usernumber-${i}`, insertCommas(arr[i - 4][0].toString()));
    localStorage.setItem(`user-game-history-${i}`, "0");
    localStorage.setItem(`daily-best-score-${i}`, "-");
    /*wild*/
    localStorage.setItem(`user-games-won-w${i}`, "0");
    localStorage.setItem(`user-daily-streak-w${i}`, "0");
    localStorage.setItem(`user-longest-streak-w${i}`, "0");
    localStorage.setItem(`userscore-w${i}`, "0");
    localStorage.setItem(`usernumber-w${i}`, insertCommas(arr[i + 2][0].toString()));
    localStorage.setItem(`user-game-history-w${i}`, "0");
    localStorage.setItem(`daily-best-score-w${i}`, "-");
  }
}
if (localStorage.getItem("user-game-history-w4") === null) {
  initializeLocalStorage();
};

if (localStorage.getItem("user-game-history-4").split(",").length > puzzledaynumber) {
  initializeLocalStorage();
}


function awardStyles() {
  var mode = localStorage.getItem("mode");
  var allscoresum = 0;
  var allscoresumw = 0;
  for (let i = 0; i < 6; i++) {
    if (document.querySelectorAll(".game-modes")[i].classList[1] == mode) {
      if (parseInt(localStorage.getItem(`daily-best-score-${i+4}`)) == i + 4) {
        allscoresum += (i + 4);
        document.querySelectorAll(".game-modes")[i].setAttribute("style",
          `background-image: linear-gradient(172deg, #cc9849 22%, #e4d181 29%, #ffffff 39%, #e5c065 41%, #dbc29d 45%, #ffefaa 55%, #ffffff 60%, #f3d387 62%, #f3d9b3 65%, #ffefaa 75%, #ffffff 58%); color:transparent; font-size: 16px; ${borderSelected} border-color:#f7e19b; -webkit-background-clip:text;`);
      } else if (localStorage.getItem(`daily-best-score-${i+4}`) != "-") {
        allscoresum += parseInt(localStorage.getItem(`daily-best-score-${i+4}`));
        document.querySelectorAll(".game-modes")[i].setAttribute("style",
          `background-image: linear-gradient(162deg, #707070 20%, #ffffff 41%, #aaaaaa 43%, #ffffff 62%, #999999 66%, #eeeeee 100%); color:transparent; font-size: 16px; ${borderSelected} border-color:#eeeeee; -webkit-background-clip:text;`);
      } else {
        allscoresum -= 1000000;
        document.querySelectorAll(".game-modes")[i].setAttribute("style",
          `${borderSelected} color: ${colorpallete[mode][2]}; border-color: ${colorpallete[mode][2]}; font-size: 16px;`);
      }
    } else {
      if (parseInt(localStorage.getItem(`daily-best-score-${i+4}`)) == i + 4) {
        allscoresum += (i + 4);
        document.querySelectorAll(".game-modes")[i].setAttribute("style",
          `background-image: linear-gradient(172deg, #cc9849 22%, #e4d181 29%, #ffffff 39%, #e5c065 41%, #dbc29d 45%, #ffefaa 55%, #ffffff 60%, #f3d387 62%, #f3d9b3 65%, #ffefaa 75%, #ffffff 58%); color:transparent; font-size: 14px; border-color:#f7e19b; -webkit-background-clip:text;`);
      } else if (localStorage.getItem(`daily-best-score-${i+4}`) != "-") {
        allscoresum += parseInt(localStorage.getItem(`daily-best-score-${i+4}`));
        document.querySelectorAll(".game-modes")[i].setAttribute("style",
          `background-image: linear-gradient(162deg, #707070 20%, #ffffff 41%, #aaaaaa 43%, #ffffff 62%, #999999 66%, #eeeeee 100%); color:transparent; font-size: 14px; border-color:#eeeeee; -webkit-background-clip:text;`);
      } else {
        allscoresum -= 1000000;
        document.querySelectorAll(".game-modes")[i].setAttribute("style",
          "color: #303030; border-color: #303030, font-size: 14px;");
      }
    }
  };

  for (let i = 6; i < 12; i++) {
    if (document.querySelectorAll(".game-modes")[i].classList[1] == mode) {
      if (parseInt(localStorage.getItem(`daily-best-score-w${i-2}`)) <= i - 2) {
        allscoresumw += (i - 2);
        document.querySelectorAll(".game-modes")[i].setAttribute("style",
          `background-image: linear-gradient(172deg, #cc9849 22%, #e4d181 29%, #ffffff 39%, #e5c065 41%, #dbc29d 45%, #ffefaa 55%, #ffffff 60%, #f3d387 62%, #f3d9b3 65%, #ffefaa 75%, #ffffff 58%); color:transparent; font-size: 16px; ${borderSelected} border-color:#f7e19b;   -webkit-background-clip:text;`);
      } else if (localStorage.getItem(`daily-best-score-w${i-2}`) != "-") {
        allscoresumw += parseInt(localStorage.getItem(`daily-best-score-w${i-2}`));
        document.querySelectorAll(".game-modes")[i].setAttribute("style",
          `background-image: linear-gradient(162deg, #707070 20%, #ffffff 41%, #aaaaaa 43%, #ffffff 62%, #999999 66%, #eeeeee 100%); color:transparent; font-size: 16px; ${borderSelected} border-color:#eeeeee; -webkit-background-clip:text;`);
      } else {
        allscoresumw -= 1000000;
        document.querySelectorAll(".game-modes")[i].setAttribute("style",
          `${borderSelected} color: ${colorpallete[mode][2]}; border-color: ${colorpallete[mode][2]}; font-size: 16px;`);
      }
    } else {
      if (parseInt(localStorage.getItem(`daily-best-score-w${i-2}`)) <= i - 2) {
        allscoresumw += (i - 2);
        document.querySelectorAll(".game-modes")[i].setAttribute("style",
          `background-image: linear-gradient(172deg, #cc9849 22%, #e4d181 29%, #ffffff 39%, #e5c065 41%, #dbc29d 45%, #ffefaa 55%, #ffffff 60%, #f3d387 62%, #f3d9b3 65%, #ffefaa 75%, #ffffff 58%); color:transparent; font-size: 14px; border-color:#f7e19b;  -webkit-background-clip:text;`);
      } else if (localStorage.getItem(`daily-best-score-w${i-2}`) != "-") {
        allscoresumw += parseInt(localStorage.getItem(`daily-best-score-w${i-2}`));
        document.querySelectorAll(".game-modes")[i].setAttribute("style",
          `background-image: linear-gradient(162deg, #707070 20%, #ffffff 41%, #aaaaaa 43%, #ffffff 62%, #999999 66%, #eeeeee 100%); color:transparent; font-size: 14px; border-color:#eeeeee;  -webkit-background-clip:text;`);
      } else {
        allscoresumw -= 1000000
        document.querySelectorAll(".game-modes")[i].setAttribute("style",
          "color: #303030; border-color: #303030, font-size: 14px;");
      }
    }
  };

  if (mode[0] == "d") {
    makeItPretty(allscoresum, mode);
  } else {
    makeItPretty(allscoresumw, mode);
  }
};

function makeItPretty(scoresum, mode) {
  if (scoresum <= 39 && scoresum > 30) {
    for (let i = 0; i < 2; i++) {
      document.querySelectorAll(".bottombuttons")[i].setAttribute("style",
        "background-image: linear-gradient(172deg, #cc9849 0%, #f6e19c 34%, #fff3c9 46%, #c3b17c 49%, #f6e19c 56%, #f8db91 70%, #ffe6be 90%); color:transparent; border-color:#f7e19b; -webkit-background-clip:text;");
    }
    for (let i = 0; i < 8; i++) {
      document.querySelectorAll(".operationbuttons")[i].setAttribute("style",
        "background-image: linear-gradient(172deg, #dfcb9a 22%, #e4d181 44%, #ffffff 50%, #e7c694 52%, #ffefaa 60%, #ffffff 90%); color:transparent; border-color:#f7e19b; -webkit-background-clip:text;");
    }
    document.querySelector("h2").setAttribute("style",
      "background-image: linear-gradient(172deg, #ffffff 0%, #fedd8e 22%, #feefaa 29%, #fff0c7 39%, #ffdd8d 45%, #ffefaa 50%, #fff6d7 52%, #eccf8e 57%, #fff0c7 75%, #f1e4b4 88%); color:transparent; -webkit-background-clip:text;");
    document.querySelector("h3").setAttribute("style",
      "background-image: linear-gradient(172deg, #ffffff 0%, #fedd8e 22%, #feefaa 29%, #fff0c7 39%, #ffdd8d 45%, #ffefaa 50%, #fff6d7 52%, #eccf8e 57%, #fff0c7 75%, #f1e4b4 88%); color:transparent; -webkit-background-clip:text;");
    document.querySelector("h1").setAttribute("style",
      "background-image: linear-gradient(165deg, #e8cf8f 20%, #fff2c5 30%, #f7e598 40%, #f7e598 44%, #faeebe 54%, #e0c173 55%, #fff1c5 67%, #e3c36f 80%, #ffffff 100%); color:transparent; -webkit-background-clip:text;");
    document.querySelector(".score").setAttribute("style",
      "background-image: linear-gradient(172deg, #cc9849 22%, #e4d181 29%, #fff0c7 39%, #ffdd8d 45%, #ffefaa 50%, #fff6d7 52%, #ffdd8d 57%, #fff0c7 75%, #f1e4b4 88%); color:transparent; -webkit-background-clip:text;");
    for (let i = 0; i < 24; i++) {
      document.querySelectorAll(".statnumber")[i].setAttribute("style",
        "background-image: linear-gradient(172deg, #dfbf73 28%, #fff2bd 44%, #ffe7b6 46%, #ca9d58 50%, #f0e5b6 55%, #eec462 70%); color:transparent; -webkit-background-clip:text;");
    }
    if (localStorage.getItem("mode")[0] == "d") {
      if (parseInt(localStorage.getItem(`userscore-${mode[6]}`)) == parseInt(mode[6])) {
        document.querySelector("h2").innerHTML = "Congratulations! You Aced Every Daily!";
      }
    } else {
      if (parseInt(localStorage.getItem(`userscore-w${mode[6]}`)) == parseInt(mode[6])) {
        document.querySelector("h2").innerHTML = "Congratulations! You Aced Every Wild!";
      }
    }
  } else if (scoresum > 39) {
    for (let i = 0; i < 2; i++) {
      document.querySelectorAll(".bottombuttons")[i].setAttribute("style",
        "background-image: linear-gradient(162deg, #707070 20%, #ffffff 49%, #999999 53%, #dddddd 80%); color:transparent; border-color:#eeeeee; -webkit-background-clip:text;");
    }
    for (let i = 0; i < 8; i++) {
      document.querySelectorAll(".operationbuttons")[i].setAttribute("style",
        "background-image: linear-gradient(172deg, #989898 0, #bbbbbb 35%, #ffffff 49%, #888888 51%, #dddddd 65%); color:transparent; border-color:#cccccc; -webkit-background-clip:text;");
    }
    document.querySelector("h2").setAttribute("style",
      "background-image: linear-gradient(173deg, #bbbbbb 0%, #ffffff 17%, #888888 19%, #ffffff 49%, #888888 52%, #ffffff 82%, #888888 85%, #EEEEEE 100%); color:transparent; -webkit-background-clip:text;");
    document.querySelector("h3").setAttribute("style",
      "background-image: linear-gradient(173deg, #bbbbbb 0%, #ffffff 17%, #888888 19%, #ffffff 49%, #888888 52%, #ffffff 82%, #888888 85%, #EEEEEE 100%); color:transparent; -webkit-background-clip:text;");
    document.querySelector("h1").setAttribute("style",
      "background-image: linear-gradient(176deg, #cccccc 20%, #aaaaaa 35%, #fdfdfd 51%, #888888 56%, #dddddd 70%, #909090 85%); color:transparent; -webkit-background-clip:text;");
    document.querySelector(".score").setAttribute("style",
      "background-image: linear-gradient(172deg, #cccccc 10%, #aaaaaa 30%, #ffffff 50%, #aaaaaa 55%, #dddddd 70%); color:transparent; -webkit-background-clip:text;");
    for (let i = 0; i < 24; i++) {
      document.querySelectorAll(".statnumber")[i].setAttribute("style",
        "background-image: linear-gradient(172deg, #989898 0, #C0C0C0 35%, #ffffff 49%, #999999 53%, #dddddd 65%); color:transparent; -webkit-background-clip:text;");
    }
    if (localStorage.getItem("mode")[0] == "d") {
      if (parseInt(localStorage.getItem(`userscore-${mode[6]}`)) == parseInt(mode[6])) {
        document.querySelector("h2").innerHTML = "Congratulations! You Passed Every Daily!";
      }
    } else {
      if (parseInt(localStorage.getItem(`userscore-w${mode[6]}`)) == parseInt(mode[6])) {
        document.querySelector("h2").innerHTML = "Congratulations! You Passed Every Wild!";
      }
    }
  } else {
    document.querySelector("h1").setAttribute("style",
      "color: #fff");
    document.querySelector("h2").setAttribute("style",
      "color: #fff");

    for (let i = 0; i < 2; i++) {
      document.querySelectorAll(".bottombuttons")[i].setAttribute("style",
        "color: #909090; ");
    }
    for (let i = 0; i < 8; i++) {
      document.querySelectorAll(".operationbuttons")[i].setAttribute("style",
        "color: #909090; border-color: #909090;");
    }
    for (let i = 0; i < 12; i++) {
      document.querySelectorAll(".statnumber")[i].style.color = colorpallete[`daily-${4+(i%6)}`][3];
    }
    for (let i = 12; i < 24; i++) {
      document.querySelectorAll(".statnumber")[i].style.color = colorpallete[`wild--${4+(i%6)}`][3];
    }

  }
};

const borderSelected = "border: 2.3px; border-bottom-style: solid; border-radius: 0; "
const standard = ["1", "20", "100", "210", "-1", "-20", "-100", "-210"];
if (localStorage.getItem("user-game-history-4").split(",").length < puzzledaynumber) {
  for (let i = 4; i < 10; i++) {
    var gamearray = localStorage.getItem(`user-game-history-${i}`).split(",");
    while (gamearray.length < puzzledaynumber) {
      gamearray.push("0");
    }
    localStorage.setItem(`userscore-${i}`, "0");
    localStorage.setItem(`usernumber-${i}`, insertCommas(arr[i - 4][0].toString()));
    localStorage.setItem(`user-game-history-${i}`, gamearray.toString());
    localStorage.setItem(`daily-best-score-${i}`, "-");
  }
  for (let i = 4; i < 10; i++) {
    localStorage.setItem(`userscore-w${i}`, "0");
    localStorage.setItem(`usernumber-w${i}`, insertCommas(arr[i + 2][0].toString()));
    localStorage.setItem(`user-game-history-w${i}`, gamearray.toString());
    localStorage.setItem(`daily-best-score-w${i}`, "-");
  }
  localStorage.setItem("mode", "daily-4");
}


function lowerSquare(num) {
  return [(Math.floor(Math.sqrt(num))) ** 2, (Math.floor(Math.sqrt(num)) + 1) ** 2]
};

function lowerCube(num) {
  return [(Math.floor(Math.cbrt(num))) ** 3, (Math.floor(Math.cbrt(num)) + 1) ** 3]
};

function lowerDiv(num, divisor) {
  return [Math.floor(num / divisor) * divisor, (Math.floor(num / divisor) + 1) * divisor]
}

for (let i = 0; i < 12; i++) {
  document.querySelectorAll(".statnumber")[i].style.color = colorpallete[`daily-${4+(i%6)}`][3];
}
for (let i = 12; i < 24; i++) {
  document.querySelectorAll(".statnumber")[i].style.color = colorpallete[`wild--${4+(i%6)}`][3];
}

function updateStats() {
  var mode = localStorage.getItem("mode");
  if (mode[0] == "d") {
    document.querySelector(".stats-modal-heading").innerHTML = "Daily Stats";
    for (let i = 4; i < 10; i++) {
      document.querySelectorAll('.daily-best-score')[i - 4].innerHTML = localStorage.getItem(`daily-best-score-${i}`);
      document.querySelectorAll('.games-won')[i - 4].innerHTML = localStorage.getItem(`user-games-won-${i}`);
      document.querySelectorAll('.daily-streak')[i - 4].innerHTML = localStorage.getItem(`user-daily-streak-${i}`);
      document.querySelectorAll('.longest-streak')[i - 4].innerHTML = localStorage.getItem(`user-longest-streak-${i}`);
    }
  } else {
    document.querySelector(".stats-modal-heading").innerHTML = "Wild Stats";
    for (let i = 4; i < 10; i++) {
      document.querySelectorAll('.daily-best-score')[i - 4].innerHTML = localStorage.getItem(`daily-best-score-w${i}`);
      document.querySelectorAll('.games-won')[i - 4].innerHTML = localStorage.getItem(`user-games-won-w${i}`);
      document.querySelectorAll('.daily-streak')[i - 4].innerHTML = localStorage.getItem(`user-daily-streak-w${i}`);
      document.querySelectorAll('.longest-streak')[i - 4].innerHTML = localStorage.getItem(`user-longest-streak-w${i}`);
    }
  }
}

/*load in daily data*/

function loadDailyData(mode) {
  document.querySelector("h3").style.color = colorpallete[mode][0];
  document.querySelector(".score").style.color = colorpallete[mode][1];
  if (mode[0] == 'd') {
    var targetnumber = arr[parseInt(mode[6]) - 4][1];
    for (let h = 0; h < 8; h++) {
      document.querySelectorAll(".operationbuttons")[h].innerHTML = operations[standard[h]][1];
      document.querySelectorAll(".operationbuttons")[h].replaceWith(document.querySelectorAll(".operationbuttons")[h].cloneNode(true));
      document.querySelectorAll(".operationbuttons")[h].addEventListener("click", function linkOperationFunctionality() {
        if (standard[h] > 0 && standard[h] < 10) {
          if (parseInt(localStorage.getItem(`usernumber-${mode[6]}`)) + operations[standard[h]][0] <= maxval) {
            localStorage.setItem(`usernumber-${mode[6]}`, parseInt(localStorage.getItem(`usernumber-${mode[6]}`)) + operations[standard[h]][0]);
            madeValidMove();
            localStorage.setItem(`userscore-${mode[6]}`, parseInt(localStorage.getItem(`userscore-${mode[6]}`)) + 1);
          } else {
            tooLargeError();
          }
          updateCenterNumber();
        } else if (standard[h] > 10 && standard[h] < 200) {
          if (parseInt(localStorage.getItem(`usernumber-${mode[6]}`)) * operations[standard[h]][0] <= maxval) {
            localStorage.setItem(`usernumber-${mode[6]}`, parseInt(localStorage.getItem(`usernumber-${mode[6]}`)) * operations[standard[h]][0]);
            madeValidMove();
            localStorage.setItem(`userscore-${mode[6]}`, parseInt(localStorage.getItem(`userscore-${mode[6]}`)) + 1);
          } else {
            tooLargeError();
          }
          updateCenterNumber();
        } else if (standard[h] > 200) {
          if (standard[h] < 300) {
            var curval = parseInt(localStorage.getItem(`usernumber-${mode[6]}`));
            if (curval * curval <= maxval) {
              localStorage.setItem(`usernumber-${mode[6]}`, curval * curval);
              madeValidMove();
              localStorage.setItem(`userscore-${mode[6]}`, parseInt(localStorage.getItem(`userscore-${mode[6]}`)) + 1);
            } else {
              tooLargeError();
            }
            updateCenterNumber()
          } else {
            var curval = parseInt(localStorage.getItem(`usernumber-${mode[6]}`));
            if (curval * curval * curval <= maxval) {
              localStorage.setItem(`usernumber-${mode[6]}`, curval * curval * curval);
              madeValidMove();
              localStorage.setItem(`userscore-${mode[6]}`, parseInt(localStorage.getItem(`userscore-${mode[6]}`)) + 1);
            } else {
              tooLargeError();
            }
            updateCenterNumber()
          }
        } else if (standard[h] < -200) {
          if (standard[h] < -300) {
            if (Math.cbrt(parseInt(localStorage.getItem(`usernumber-${mode[6]}`))) % 1 == 0) {
              localStorage.setItem(`usernumber-${mode[6]}`, Math.cbrt(parseInt(localStorage.getItem(`usernumber-${mode[6]}`))));
              madeValidMove();
              localStorage.setItem(`userscore-${mode[6]}`, parseInt(localStorage.getItem(`userscore-${mode[6]}`)) + 1);
            } else {
              nonRootable(parseInt(localStorage.getItem(`usernumber-${mode[6]}`)));
            }
            updateCenterNumber();
          } else {
            if (Math.sqrt(parseInt(localStorage.getItem(`usernumber-${mode[6]}`))) % 1 == 0) {
              localStorage.setItem(`usernumber-${mode[6]}`, Math.sqrt(parseInt(localStorage.getItem(`usernumber-${mode[6]}`))));
              madeValidMove();
              localStorage.setItem(`userscore-${mode[6]}`, parseInt(localStorage.getItem(`userscore-${mode[6]}`)) + 1);
            } else {
              nonRootable(parseInt(localStorage.getItem(`usernumber-${mode[6]}`)));
            }
            updateCenterNumber();
          }
        } else if (standard[h] < -10) {
          var curval = parseInt(localStorage.getItem(`usernumber-${mode[6]}`));
          if (curval % operations[standard[h]][0] == 0) {
            localStorage.setItem(`usernumber-${mode[6]}`, parseInt(localStorage.getItem(`usernumber-${mode[6]}`)) / operations[standard[h]][0]);
            madeValidMove();
            localStorage.setItem(`userscore-${mode[6]}`, parseInt(localStorage.getItem(`userscore-${mode[6]}`)) + 1);
          } else {
            divisionErrorDaily();
          }
          updateCenterNumber()
        } else {
          if (parseInt(localStorage.getItem(`usernumber-${mode[6]}`)) - operations[standard[h]][0] > 0) {
            localStorage.setItem(`usernumber-${mode[6]}`, parseInt(localStorage.getItem(`usernumber-${mode[6]}`)) - operations[standard[h]][0]);
            madeValidMove();
            localStorage.setItem(`userscore-${mode[6]}`, parseInt(localStorage.getItem(`userscore-${mode[6]}`)) + 1);
          } else {
            tooSmallError();
          }
          updateCenterNumber();
        }
      });
    };
    document.querySelectorAll(".score")[0].innerHTML = "Moves: " + localStorage.getItem(`userscore-${mode[6]}`);
    document.getElementById("Target").innerHTML = "Target: " + insertCommas(parseInt(targetnumber));
    document.getElementById("usernumber").innerHTML = insertCommas(parseInt(localStorage.getItem(`usernumber-${mode[6]}`)));
    var array = gameStreaks(localStorage.getItem(`user-game-history-${mode[6]}`).split(","));
    localStorage.setItem(`user-games-won-${mode[6]}`, array[0]);
    localStorage.setItem(`user-daily-streak-${mode[6]}`, array[1]);
    localStorage.setItem(`user-longest-streak-${mode[6]}`, array[2]);
    updateStats();
    if (localStorage.getItem(`daily-best-score-${mode[6]}`) != "-") {
      document.querySelectorAll(".stats-bottom-buttons")[1].style.display = "inline";
    } else {
      document.querySelectorAll(".stats-bottom-buttons")[1].style.display = "none";
    }
  } else {
    var targetnumber = arr[parseInt(mode[6]) + 2][1];
    for (let h = 0; h < 8; h++) {
      document.querySelectorAll(".operationbuttons")[h].innerHTML = String(operations[arr[parseInt(mode[6]) + 2][2][h]][1]);
      document.querySelectorAll(".operationbuttons")[h].replaceWith(document.querySelectorAll(".operationbuttons")[h].cloneNode(true));
      document.querySelectorAll(".operationbuttons")[h].addEventListener("click", function linkOperationFunctionality() {
        if (arr[parseInt(mode[6]) + 2][2][h] > 0 && arr[parseInt(mode[6]) + 2][2][h] < 10) {
          if (parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)) + operations[arr[parseInt(mode[6]) + 2][2][h]][0] <= maxval) {
            localStorage.setItem(`usernumber-w${mode[6]}`, parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)) + operations[arr[parseInt(mode[6]) + 2][2][h]][0]);
            madeValidMove();
            localStorage.setItem(`userscore-w${mode[6]}`, parseInt(localStorage.getItem(`userscore-w${mode[6]}`)) + 1);
          } else {
            tooLargeError();
          }
          updateCenterNumber();
        } else if (arr[parseInt(mode[6]) + 2][2][h] > 10 && arr[parseInt(mode[6]) + 2][2][h] < 200) {
          if (parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)) * operations[arr[parseInt(mode[6]) + 2][2][h]][0] <= maxval) {
            localStorage.setItem(`usernumber-w${mode[6]}`, parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)) * operations[arr[parseInt(mode[6]) + 2][2][h]][0]);
            madeValidMove();
            localStorage.setItem(`userscore-w${mode[6]}`, parseInt(localStorage.getItem(`userscore-w${mode[6]}`)) + 1);
          } else {
            tooLargeError();
          }
          updateCenterNumber();
        } else if (arr[parseInt(mode[6]) + 2][2][h] > 200) {
          if (arr[parseInt(mode[6]) + 2][2][h] < 300) {
            var curval = parseInt(localStorage.getItem(`usernumber-w${mode[6]}`));
            if (curval * curval <= maxval) {
              localStorage.setItem(`usernumber-w${mode[6]}`, curval * curval);
              madeValidMove();
              localStorage.setItem(`userscore-w${mode[6]}`, parseInt(localStorage.getItem(`userscore-w${mode[6]}`)) + 1);
            } else {
              tooLargeError();
            }
            updateCenterNumber()
          } else {
            var curval = parseInt(localStorage.getItem(`usernumber-w${mode[6]}`));
            if (curval * curval * curval <= maxval) {
              localStorage.setItem(`usernumber-w${mode[6]}`, curval * curval * curval);
              madeValidMove();
              localStorage.setItem(`userscore-w${mode[6]}`, parseInt(localStorage.getItem(`userscore-w${mode[6]}`)) + 1);
            } else {
              tooLargeError();
            }
            updateCenterNumber()
          }
        } else if (arr[parseInt(mode[6]) + 2][2][h] < -200) {
          if (arr[parseInt(mode[6]) + 2][2][h] < -300) {
            if (Math.cbrt(parseInt(localStorage.getItem(`usernumber-w${mode[6]}`))) % 1 == 0) {
              localStorage.setItem(`usernumber-w${mode[6]}`, Math.cbrt(parseInt(localStorage.getItem(`usernumber-w${mode[6]}`))));
              madeValidMove();
              localStorage.setItem(`userscore-w${mode[6]}`, parseInt(localStorage.getItem(`userscore-w${mode[6]}`)) + 1);
            } else {
              nonCubeRootable(parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)));
            }
            updateCenterNumber();
          } else {
            if (Math.sqrt(parseInt(localStorage.getItem(`usernumber-w${mode[6]}`))) % 1 == 0) {
              localStorage.setItem(`usernumber-w${mode[6]}`, Math.sqrt(parseInt(localStorage.getItem(`usernumber-w${mode[6]}`))));
              madeValidMove();
              localStorage.setItem(`userscore-w${mode[6]}`, parseInt(localStorage.getItem(`userscore-w${mode[6]}`)) + 1);
            } else {
              nonRootable(parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)));
            }
            updateCenterNumber();
          }
        } else if (arr[parseInt(mode[6]) + 2][2][h] < -10) {
          var curval = parseInt(localStorage.getItem(`usernumber-w${mode[6]}`));
          if (curval % operations[arr[parseInt(mode[6]) + 2][2][h]][0] == 0) {
            localStorage.setItem(`usernumber-w${mode[6]}`, parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)) / operations[arr[parseInt(mode[6]) + 2][2][h]][0]);
            madeValidMove();
            localStorage.setItem(`userscore-w${mode[6]}`, parseInt(localStorage.getItem(`userscore-w${mode[6]}`)) + 1);
          } else {
            divisionError(curval, operations[arr[parseInt(mode[6]) + 2][2][h]][0]);
          }
          updateCenterNumber()
        } else {
          if (parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)) - operations[arr[parseInt(mode[6]) + 2][2][h]][0] > 0) {
            localStorage.setItem(`usernumber-w${mode[6]}`, parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)) - operations[arr[parseInt(mode[6]) + 2][2][h]][0]);
            madeValidMove();
            localStorage.setItem(`userscore-w${mode[6]}`, parseInt(localStorage.getItem(`userscore-w${mode[6]}`)) + 1);
          } else {
            tooSmallError();
          }
          updateCenterNumber();
        }
      });
    };
    document.querySelectorAll(".score")[0].innerHTML = "Moves: " + localStorage.getItem(`userscore-w${mode[6]}`);
    document.getElementById("Target").innerHTML = "Target: " + insertCommas(parseInt(targetnumber));
    document.getElementById("usernumber").innerHTML = insertCommas(parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)));
    var array = gameStreaks(localStorage.getItem(`user-game-history-w${mode[6]}`).split(","));
    localStorage.setItem(`user-games-won-w${mode[6]}`, array[0]);
    localStorage.setItem(`user-daily-streak-w${mode[6]}`, array[1]);
    localStorage.setItem(`user-longest-streak-w${mode[6]}`, array[2]);
    updateStats();
    if (localStorage.getItem(`daily-best-score-w${mode[6]}`) != "-") {
      document.querySelectorAll(".stats-bottom-buttons")[1].style.display = "inline";
    } else {
      document.querySelectorAll(".stats-bottom-buttons")[1].style.display = "none";
    }
  }
  if (localStorage.getItem(`daily-best-score-w${mode[6]}`) != "-") {
    document.querySelectorAll(".stats-bottom-buttons")[1].style.display = "inline";
  } else {
    document.querySelectorAll(".stats-bottom-buttons")[1].style.display = "none";
  }
  awardStyles();
}

/*Math Operations For Buttons*/
loadDailyData(localStorage.getItem("mode"));

/*document.querySelector('.bg-modal-shareme').style.display = "flex";*/
/*math buttons on or off based on if you've gotten the winning number*/

/*activate stat and settings buttons*/
for (let i = 0; i < 3; i++) {
  document.querySelectorAll('.close-stats')[i].addEventListener('click', function() {
    document.querySelector('.bg-modal-stats').style.display = "none";
    document.querySelector('.bg-modal-info').style.display = "none";
    document.querySelector('.bg-modal-shareme').style.display = "none";
  })
}
document.querySelectorAll('.open-stats')[0].addEventListener('click', function() {
  document.querySelector('.bg-modal-stats').style.display = "flex";
})
document.querySelectorAll('.open-info')[0].addEventListener('click', function() {
  document.querySelector('.bg-modal-info').style.display = "flex";
})


/*Retry Button*/

document.querySelector('.tryagain-button').addEventListener('click', function() {
  var mode = localStorage.getItem("mode");
  if (mode[0] == "d") {
    var arr = getpuzzles(puzzledaynumber - 1);
    var targetnumber = arr[parseInt(mode[6]) - 4][1];
    document.getElementById("Target").innerHTML = "Target: " + insertCommas(parseInt(targetnumber));
    if (localStorage.getItem(`user-game-history-${mode[6]}`).split(",").length < puzzledaynumber) {
      for (i = 4; i < 10; i++) {
        var gamearray = localStorage.getItem(`user-game-history-${i}`).split(",");
        while (gamearray.length < puzzledaynumber) {
          gamearray.push("0");
        }
        localStorage.setItem(`usernumber-${i}`, insertCommas(arr[i - 4][0].toString()));
        localStorage.setItem(`user-game-history-${i}`, gamearray.toString());
        localStorage.setItem(`daily-best-score-${i}`, "-");
      }
    }
    if (parseInt(localStorage.getItem(`usernumber-${mode[6]}`)) == targetnumber) {
      if (parseInt(localStorage.getItem(`daily-best-score-${mode[6]}`)) > parseInt(localStorage.getItem(`userscore-${mode[6]}`))) {
        localStorage.setItem(`daily-best-score-${mode[6]}`, localStorage.getItem(`userscore-${mode[6]}`));
      }
    }
    localStorage.setItem(`userscore-${mode[6]}`, "0");
    document.querySelectorAll(".score")[0].innerHTML = "Moves: " + localStorage.getItem(`userscore-${mode[6]}`);
    document.querySelector('.bg-modal-stats').style.display = "none";
    for (let i = 0; i < 8; i++) {
      document.querySelectorAll(".operationbuttons")[i].disabled = false;
    }
    localStorage.setItem(`usernumber-${mode[6]}`, String(arr[parseInt(mode[6]) - 4][0]));
    document.getElementById("usernumber").innerHTML = insertCommas(parseInt(localStorage.getItem(`usernumber-${mode[6]}`)));
    madeValidMove();
  } else {
    var arr = getpuzzles(puzzledaynumber - 1);
    var targetnumber = arr[parseInt(mode[6]) + 2][1];
    document.getElementById("Target").innerHTML = "Target: " + insertCommas(parseInt(targetnumber));
    if (localStorage.getItem(`user-game-history-w${mode[6]}`).split(",").length < puzzledaynumber) {
      for (let i = 4; i < 10; i++) {
        var gamearray = localStorage.getItem(`user-game-history-w${i}`).split(",");
        while (gamearray.length < puzzledaynumber) {
          gamearray.push("0");
        }
        localStorage.setItem(`usernumber-w${i}`, insertCommas(arr[i - 4][0].toString()));
        localStorage.setItem(`user-game-history-w${i}`, gamearray.toString());
        localStorage.setItem(`daily-best-score-w${i}`, "-");
      }
    }
    if (parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)) == targetnumber) {
      if (parseInt(localStorage.getItem(`daily-best-score-w${mode[6]}`)) > parseInt(localStorage.getItem(`userscore-w${mode[6]}`))) {
        localStorage.setItem(`daily-best-score-w${mode[6]}`, localStorage.getItem(`userscore-w${mode[6]}`));
      }
    }
    localStorage.setItem(`userscore-w${mode[6]}`, "0");
    document.querySelectorAll(".score")[0].innerHTML = "Moves: " + localStorage.getItem(`userscore-w${mode[6]}`);
    document.querySelector('.bg-modal-stats').style.display = "none";
    for (let i = 0; i < 8; i++) {
      document.querySelectorAll(".operationbuttons")[i].disabled = false;
    }
    localStorage.setItem(`usernumber-w${mode[6]}`, String(arr[parseInt(mode[6]) + 2][0]));
    document.getElementById("usernumber").innerHTML = insertCommas(parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)));
    madeValidMove();
  }
});
/*
document.querySelector('.close-ad').style.display = "none";
document.querySelector('.bg-modal-ads').style.display = "flex";
setTimeout(function() {
  document.querySelector('.close-ad').style.display = "absolute";
},10000)
*/

/*update info upon win*/
function winning() {
  var mode = localStorage.getItem("mode");
  if (mode[0] == "d") {
    if (localStorage.getItem(`user-game-history-${mode[6]}`).split(",")[puzzledaynumber - 1] != "1") {
      const gamearray = localStorage.getItem(`user-game-history-${mode[6]}`).split(",");
      gamearray[puzzledaynumber - 1] = "1";
      localStorage.setItem(`user-game-history-${mode[6]}`, gamearray.toString());
      localStorage.setItem(`daily-best-score-${mode[6]}`, localStorage.getItem(`userscore-${mode[6]}`));
      var array = gameStreaks(localStorage.getItem(`user-game-history-${mode[6]}`).split(","));
      localStorage.setItem(`user-games-won-${mode[6]}`, array[0]);
      localStorage.setItem(`user-daily-streak-${mode[6]}`, array[1]);
      localStorage.setItem(`user-longest-streak-${mode[6]}`, array[2]);

    } else {
      if (parseInt(localStorage.getItem(`daily-best-score-${mode[6]}`)) > parseInt(localStorage.getItem(`userscore-${mode[6]}`))) {
        localStorage.setItem(`daily-best-score-${mode[6]}`, localStorage.getItem(`userscore-${mode[6]}`));
      }
    }
    updateStats();
    document.querySelector(".usernumber").innerHTML = "You won in " + localStorage.getItem(`userscore-${mode[6]}`) + " moves!";
    for (let i = 0; i < 8; i++) {
      document.querySelectorAll(".operationbuttons")[i].disabled = true;
    }
    document.querySelectorAll(".stats-bottom-buttons")[1].style.display = "inline";

  } else {
    if (localStorage.getItem(`user-game-history-w${mode[6]}`).split(",")[puzzledaynumber - 1] != "1") {
      const gamearray = localStorage.getItem(`user-game-history-w${mode[6]}`).split(",");
      gamearray[puzzledaynumber - 1] = "1";
      localStorage.setItem(`user-game-history-w${mode[6]}`, gamearray.toString());
      localStorage.setItem(`daily-best-score-w${mode[6]}`, localStorage.getItem(`userscore-w${mode[6]}`));
      var array = gameStreaks(localStorage.getItem(`user-game-history-w${mode[6]}`).split(","));
      localStorage.setItem(`user-games-won-w${mode[6]}`, array[0]);
      localStorage.setItem(`user-daily-streak-w${mode[6]}`, array[1]);
      localStorage.setItem(`user-longest-streak-w${mode[6]}`, array[2]);

    } else {
      if (parseInt(localStorage.getItem(`daily-best-score-w${mode[6]}`)) > parseInt(localStorage.getItem(`userscore-w${mode[6]}`))) {
        localStorage.setItem(`daily-best-score-w${mode[6]}`, localStorage.getItem(`userscore-w${mode[6]}`));
      }
    }
    updateStats();
    document.querySelector(".usernumber").innerHTML = "You won in " + localStorage.getItem(`userscore-w${mode[6]}`) + " moves!";
    for (let i = 0; i < 8; i++) {
      document.querySelectorAll(".operationbuttons")[i].disabled = true;
    }
    document.querySelectorAll(".stats-bottom-buttons")[1].style.display = "inline";
  }
  awardStyles();
}
/*update moves list and check for inverse operations*/

/*valid move error drop*/
function madeValidMove() {
  document.querySelectorAll(".error-messages")[0].style.color = "#525252";
  document.querySelectorAll(".error-messages")[0].innerHTML = "_";
  document.querySelectorAll(".error-messages-values")[0].style.color = "#525252";
  document.querySelectorAll(".error-messages-values")[0].innerHTML = "_";
}

function divisionError(num, div) {
  var x = lowerDiv(num, div)
  document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
  document.querySelectorAll(".error-messages")[0].innerHTML = "Nearest Divisible Numbers:";
  document.querySelectorAll(".error-messages-values")[0].style.color = "#FFA81C";
  document.querySelectorAll(".error-messages-values")[0].innerHTML = insertCommas(x[0]) + " and " + insertCommas(x[1]);
  shakeOnError();
}

function divisionErrorDaily() {
  document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
  document.querySelectorAll(".error-messages")[0].innerHTML = "Can't Divide";
  document.querySelectorAll(".error-messages-values")[0].style.color = "#525252";
  document.querySelectorAll(".error-messages-values")[0].innerHTML = "_";
  shakeOnError();
}

function tooLargeError() {
  document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
  document.querySelectorAll(".error-messages")[0].innerHTML = "Too Large";
  document.querySelectorAll(".error-messages-values")[0].style.color = "#525252";
  document.querySelectorAll(".error-messages-values")[0].innerHTML = "_";
  shakeOnError();
}

function tooSmallError() {
  document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
  document.querySelectorAll(".error-messages")[0].innerHTML = "Too Small";
  document.querySelectorAll(".error-messages-values")[0].style.color = "#525252";
  document.querySelectorAll(".error-messages-values")[0].innerHTML = "_";
  shakeOnError();
}

function nonRootable(num) {
  var x = lowerSquare(num);
  document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
  document.querySelectorAll(".error-messages")[0].innerHTML = "Nearest perfect squares:";
  document.querySelectorAll(".error-messages-values")[0].style.color = "#FFA81C";
  document.querySelectorAll(".error-messages-values")[0].innerHTML = insertCommas(x[0]) + " and " + insertCommas(x[1]);
  shakeOnError();
}

function nonCubeRootable(num) {
  var x = lowerCube(num);
  document.querySelectorAll(".error-messages")[0].style.color = "#FFA81C";
  document.querySelectorAll(".error-messages")[0].innerHTML = "Nearest perfect cubes:";
  document.querySelectorAll(".error-messages-values")[0].style.color = "#FFA81C";
  document.querySelectorAll(".error-messages-values")[0].innerHTML = insertCommas(x[0]) + " and " + insertCommas(x[1]);
  shakeOnError();
}

function shakeOnError() {
  document.querySelectorAll(".usernumber")[0].style.animation = "shake .16s";
  setTimeout(function() {
    document.querySelectorAll(".usernumber")[0].style.animation = "none";
  }, 140);
}

/*update number and check win*/
function updateCenterNumber() {
  var mode = localStorage.getItem("mode");
  if (mode[0] == "d") {
    var targetnumber = arr[parseInt(mode[6]) - 4][1];
    document.getElementById("usernumber").innerHTML = insertCommas(parseInt(localStorage.getItem(`usernumber-${mode[6]}`)));
    document.querySelectorAll(".score")[0].innerHTML = "Moves: " + localStorage.getItem(`userscore-${mode[6]}`);
    if (parseInt(localStorage.getItem(`usernumber-${mode[6]}`)) == targetnumber) {
      winning();
      setTimeout(function() {
        document.querySelector('.bg-modal-stats').style.display = "flex";
      }, 800)
    }
  } else {
    var targetnumber = arr[parseInt(mode[6]) + 2][1];
    document.getElementById("usernumber").innerHTML = insertCommas(parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)));
    document.querySelectorAll(".score")[0].innerHTML = "Moves: " + localStorage.getItem(`userscore-w${mode[6]}`);
    if (parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)) == targetnumber) {
      winning();
      setTimeout(function() {
        document.querySelector('.bg-modal-stats').style.display = "flex";
      }, 800)
    }
  }
}

/* read game stats */
function gameStreaks(array) {
  var curstreak = 0;
  var maxstreak = 0;
  var count = 0;
  if (array.length == 1) {
    if (array[0] == "0") {
      return ["0", "0", "0"];
    } else {
      return ["1", "1", "1"];
    }
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] == "1") {
        count++;
        curstreak++;
      } else {
        if (maxstreak < curstreak) {
          maxstreak = curstreak;
        }
        curstreak = 0;
      }
    }
    if (maxstreak < curstreak) {
      maxstreak = curstreak;
    }
    if (array[array.length - 1] == "1") {
      count++;
      curstreak++;
      if (maxstreak < curstreak) {
        maxstreak = curstreak;
      }
    }
  }
  return [String(count), String(curstreak), String(maxstreak)];
}

function extraCheck() {
  var mode = localStorage.getItem("mode");
  if (mode[0] == "d") {
    var targetnumber = arr[parseInt(mode[6]) - 4][1];
    if (parseInt(localStorage.getItem(`usernumber-${mode[6]}`)) == targetnumber) {
      madeValidMove();
      winning();
      for (let i = 0; i < 8; i++) {
        document.querySelectorAll(".operationbuttons")[i].disabled = true;
      }
      document.querySelector('.bg-modal-stats').style.display = "flex";
    }
  } else {
    var targetnumber = arr[parseInt(mode[6]) + 2][1];
    if (parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)) == targetnumber) {
      madeValidMove();
      winning();
      for (let i = 0; i < 8; i++) {
        document.querySelectorAll(".operationbuttons")[i].disabled = true;
      }
      document.querySelector('.bg-modal-stats').style.display = "flex";
    }
  }

}
extraCheck();

/*Game Mode Selector*/
for (let m = 4; m < 10; m++) {
  document.querySelector(`.daily-${m}`).addEventListener("click", function() {
    madeValidMove();
    localStorage.setItem("mode", `daily-${m}`);
    var mode = localStorage.getItem("mode");
    loadDailyData(mode);
    var targetnumber = arr[parseInt(mode[6]) - 4][1];
    if (parseInt(localStorage.getItem(`usernumber-${mode[6]}`)) == targetnumber) {
      madeValidMove();
      winning();
    } else {
      for (let i = 0; i < 8; i++) {
        document.querySelectorAll(".operationbuttons")[i].disabled = false;
      }
    }
    if (localStorage.getItem(`daily-best-score-${mode[6]}`) != "-") {
      document.querySelectorAll(".stats-bottom-buttons")[1].style.display = "inline";
    } else {
      document.querySelectorAll(".stats-bottom-buttons")[1].style.display = "none";
    }
  })
}

for (let m = 4; m < 10; m++) {
  document.querySelector(`.wild--${m}`).addEventListener("click", function() {
    madeValidMove();
    localStorage.setItem("mode", `wild--${m}`);
    var mode = localStorage.getItem("mode");
    loadDailyData(mode);
    var targetnumber = arr[parseInt(mode[6]) + 2][1];
    if (parseInt(localStorage.getItem(`usernumber-w${mode[6]}`)) == targetnumber) {
      madeValidMove();
      winning();
    } else {
      for (let i = 0; i < 8; i++) {
        document.querySelectorAll(".operationbuttons")[i].disabled = false;
      }
    }
    if (localStorage.getItem(`daily-best-score-w${mode[6]}`) != "-") {
      document.querySelectorAll(".stats-bottom-buttons")[1].style.display = "inline";
    } else {
      document.querySelectorAll(".stats-bottom-buttons")[1].style.display = "none";
    }
  })
}


document.querySelector(".share-button-first").addEventListener("click", function() {
  try {
    navigator.share({
      title: "NumberCrunch",
      text: "Try out NumberCrunch, The Daily Math Game with 12 puzzles each day!",
      url: "https://numbercrunch.app"
    });
    console.log("Data was shared successfully");
  } catch (err) {
    console.error("Share failed:", err.message);
  }
});

document.querySelector(".share-button").addEventListener("click", function() {
  var mode = localStorage.getItem("mode");
  var allscoresum = 0;
  if (mode[0] == "d") {
    for (let i = 4; i < 10; i++) {
      if (localStorage.getItem(`user-game-history-${i}`)[puzzledaynumber - 1] != "1") {
        allscoresum += 100;
      } else {
        allscoresum += parseInt(localStorage.getItem(`daily-best-score-${i}`));
      }
    }
    if (allscoresum == 39) {
      try {
        navigator.share({
          title: "NumberCrunch",
          text: "NumberCrunch Day " + String(puzzledaynumber) + ":\n" +
            "I Aced Every Daily Challenge For Day " + String(puzzledaynumber) + "!",
          url: "https://numbercrunch.app"
        });
        console.log("Data was shared successfully");
      } catch (err) {
        console.error("Share failed:", err.message);
      }
    } else {
      var scorearr = []
      for (let i = 4; i < 10; i++) {
        scorearr.push(localStorage.getItem(`daily-best-score-${i}`));
      }
      try {
        navigator.share({
          title: "NumberCrunch",
          text: "NumberCrunch Day " + String(puzzledaynumber) + ":\n" +
            "Best Scores For Daily Puzzles: \n" +
            `D4: ${scorearr[0]}\n` +
            `D5: ${scorearr[1]}\n` +
            `D6: ${scorearr[2]}\n` +
            `D7: ${scorearr[3]}\n` +
            `D8: ${scorearr[4]}\n` +
            `D9: ${scorearr[5]}\n`,
          url: "https://numbercrunch.app"
        });
        console.log("Data was shared successfully");
      } catch (err) {
        console.error("Share failed:", err.message);
      }
    }
  } else {
    for (let i = 4; i < 10; i++) {
      if (localStorage.getItem(`user-game-history-w${i}`)[puzzledaynumber - 1] != "1") {
        allscoresum += 100;
      } else {
        allscoresum += parseInt(localStorage.getItem(`daily-best-score-w${i}`));
      }
    }
    if (allscoresum == 38) {
      try {
        navigator.share({
          title: "NumberCrunch",
          text: "NumberCrunch Day " + String(puzzledaynumber) + ":\n" +
            "I Aced Every Wild Challenge For Day " + String(puzzledaynumber) + "!",
          url: "https://numbercrunch.app"
        });
        console.log("Data was shared successfully");
      } catch (err) {
        console.error("Share failed:", err.message);
      }
    } else {
      var scorearr = []
      for (let i = 4; i < 10; i++) {
        scorearr.push(localStorage.getItem(`daily-best-score-${i}`));
      }
      try {
        navigator.share({
          title: "NumberCrunch",
          text: "NumberCrunch Day " + String(puzzledaynumber) + ":\n" +
            "Best Scores For Wild Puzzles: \n" +
            `W4: ${scorearr[0]}\n` +
            `W5: ${scorearr[1]}\n` +
            `W6: ${scorearr[2]}\n` +
            `W7: ${scorearr[3]}\n` +
            `W8: ${scorearr[4]}\n` +
            `W9: ${scorearr[5]}\n`,
          url: "https://numbercrunch.app"
        });
        console.log("Data was shared successfully");
      } catch (err) {
        console.error("Share failed:", err.message);
      }
    }
  }
  setTimeout(function() {
    document.querySelector(".share-button").innerHTML = "Copied";
  }, 1000);
  setTimeout(function() {
    document.querySelector(".share-button").innerHTML = "Share <i class='fa-solid fa-arrow-up-right-from-square'></i>";
  }, 1800);
});
