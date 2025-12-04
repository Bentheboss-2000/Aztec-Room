// Load up the inventory on each page when it loads
// sessionStorage persists only while the browser tab is open
// sessionStorage is local to that browser and tab
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("inventory1").src =
    sessionStorage.getItem("slot1") || "";
  document.getElementById("inventory2").src =
    sessionStorage.getItem("slot2") || "";
  document.getElementById("inventory3").src =
    sessionStorage.getItem("slot3") || "";
  document.getElementById("inventory4").src =
    sessionStorage.getItem("slot4") || "";
  document.getElementById("inventory5").src =
    sessionStorage.getItem("slot5") || "";
  document.getElementById("inventory6").src =
    sessionStorage.getItem("slot6") || "";
});
console.log(sessionStorage.getItem("slot3"));

var g1 = document.getElementById("one");
var g2 = document.getElementById("two");
var g3 = document.getElementById("three");
var g4 = document.getElementById("four");
var g5 = document.getElementById("five");
var g6 = document.getElementById("six");
var g7 = document.getElementById("seven");
var g8 = document.getElementById("eight");
var m = document.getElementById("scare");
var d = document.getElementById("lol");
var u1 = document.getElementById("unlock");

var pictures = [
  "images/DeathGodBody.png",
  "images/WaterGodBody.png",
  "images/SunGodBody.png",
  "images/AirGodBody.png",
];
var pictures1 = [
  "images/WaterGodHead.png",
  "images/SunGodHead.png",
  "images/DeathGodHead.png",
  "images/AirGodHead.png",
];

index = 0;
index1 = 0;
x = 3;

function timeKeepersmenu() {
  const modal = document.getElementById("myModal");
  modal.classList.add("show");
  modal.style.display = "flex";
  m.play();
}
function instructions() {
  const modal2 = document.getElementById("instructions");
  modal2.classList.add("show");
  modal2.style.display = "flex";
}

function hideModal() {
  const modal = document.getElementById("myModal");
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 400);

  const modal2 = document.getElementById("instructions");
  modal2.classList.remove("show");
  setTimeout(() => (modal2.style.display = "none"), 400);
}

function select(img) {
  if (index == 4) {
    index = index - 4;
    img.src = pictures[index];
  } else {
    img.src = pictures[index];
    index = index + 1;
  }
  console.log(x);
  m.play();
}
function select1(img) {
  if (index1 == 4) {
    index1 = index1 - 4;
    img.src = pictures1[index1];
  } else {
    img.src = pictures1[index1];
    index1 = index1 + 1;
  }
  console.log(x);
  m.play();
}

function match() {
  if (
    g1.src.match("images/SunGodHead.png") &&
    g5.src.match("images/SunGodBody.png") &&
    g2.src.match("images/WaterGodHead.png") &&
    g6.src.match("images/WaterGodBody.png") &&
    g3.src.match("images/AirGodHead.png") &&
    g7.src.match("images/AirGodBody.png") &&
    g4.src.match("images/DeathGodHead.png") &&
    g8.src.match("images/DeathGodBody.png")
  ) {
    checkmatch();
    m.pause();
    document.getElementById("inventory3").src = "images/AztecPotion.png";
    sessionStorage.setItem("slot3", "images/AztecPotion.png");
    console.log(sessionStorage.getItem("slot3"));

    setTimeout(function () {
      window.location.href = "https://nnn9t3.csb.app/";
    }, 2000);
    /*const modal = document.getElementById("previouse");
    modal.classList.add("show");
    modal.style.display = "flex";*/
  } else {
    m.play();
    // CONFETTI POP
    document.body.insertAdjacentHTML(
      "beforeend",
      '<div class="my-text" id="confetti">incorrect</div>'
    );

    setTimeout(() => {
      document.getElementById("confetti").remove();
    }, 1200);
  }
  checkmatch();
  console.log(x);
}
function checkmatch() {
  if (
    g1.src.match("images/SunGodHead.png") &&
    g5.src.match("images/SunGodBody.png")
  ) {
    g1.className = "translucent";
    g1.onclick = null;
    g5.className = "translucent";
    g5.onclick = null;
  }
  if (
    g2.src.match("images/WaterGodHead.png") &&
    g6.src.match("images/WaterGodBody.png")
  ) {
    g2.className = "translucent";
    g2.onclick = null;
    g6.className = "translucent";
    g6.onclick = null;
  }
  if (
    g3.src.match("images/AirGodHead.png") &&
    g7.src.match("images/AirGodBody.png")
  ) {
    g3.className = "translucent";
    g3.onclick = null;
    g7.className = "translucent";
    g7.onclick = null;
  }
  if (
    g4.src.match("images/DeathGodHead.png") &&
    g8.src.match("images/DeathGodBody.png")
  ) {
    g4.className = "translucent";
    g4.onclick = null;
    g8.className = "translucent";
    g8.onclick = null;
  }
}
/*
  if (
    g1.src.match("images/SunGodHead.png") &&
    g5.src.match("images/SunGodBody.png") &&
    g2.src.match("images/WaterGodHead.png") &&
    g6.src.match("images/WaterGodBody.png") &&
    g3.src.match("images/AirGodHead.png") &&
    g7.src.match("images/AirGodBody.png") &&
    g4.src.match("images/DeathGodHead.png") &&
    g8.src.match("images/DeathGodBody.png")
  ) {
    checkmatch();
    m.pause();
    u1.src = "images/AztecPotion.png";
    sessionStorage.setItem("slot3", "images/AztecPotion.png");
    u1.className = "no-filter";
    const modal = document.getElementById("previouse");
    modal.classList.add("show");
    modal.style.display = "flex";
  } else {
    m.play();
    // CONFETTI POP
    document.body.insertAdjacentHTML(
      "beforeend",
      '<div class="my-text" id="confetti">incorrect</div>'
    );

    setTimeout(() => {
      document.getElementById("confetti").remove();
    }, 1200);
  }
  checkmatch();
  console.log(x);
*/
