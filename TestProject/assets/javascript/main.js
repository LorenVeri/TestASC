var tabLinks = document.querySelectorAll(".tablinks");
var tabContent =document.querySelectorAll(".tabcontent");

// Change Tab
tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   var btn = el.currentTarget;
   var electronic = btn.dataset.electronic;
 
   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + electronic).classList.add("active");
   
   btn.classList.add("active");
}

// End Change Tab


//Change Button
let stateConnect = true;
let stateStart = true;

var btnConnect = document.getElementById("btn-connect");
var btnStart = document.getElementById("btn-start");
var spinner = document.getElementById("spinner");

btnConnect.addEventListener("click", () => {
    changeBtnConnect();
});

btnStart.addEventListener("click", () => {
    changeBtnStart();
});

function changeBtnConnect() {
    if (stateConnect == true) {
        stateConnect = false;
        btnConnect.innerHTML = "Disconnect";
        btnConnect.classList.remove("btn-success");
        btnConnect.classList.add("btn-danger");
        btnStart.removeAttribute("disabled");

    } else {
        stateConnect = true;
        btnConnect.innerHTML = "Connect";
        btnConnect.classList.remove("btn-danger");
        btnConnect.classList.add("btn-success");
        btnStart.setAttribute('disabled', 'true');
    }
}

function changeBtnStart() {
    if (stateStart == true) {
        stateStart = false;
        btnStart.innerHTML = "Stop";
        btnStart.classList.remove("btn-success");
        btnStart.classList.add("btn-danger");
        spinner.style.display="flex";
    } else {
        stateStart = true;
        btnStart.innerHTML = "Start";
        btnStart.classList.remove("btn-danger");
        btnStart.classList.add("btn-success");
        spinner.style.display="none";
    }
}

// End Change Button
