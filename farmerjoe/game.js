// this is a test commend
var joe = document.getElementById("joe");
var joesSpd = 5;
var key;
var options = document.getElementById("gameoptions");
var openOp = document.getElementById("openOp");
var closedop = true;
var whenopen = document.getElementById("whenopen");
var gtoBtn = document.getElementById("gtoBtn");
var goTo = document.getElementById("goTo");
var optionsar = document.getElementById("optionarea");
var downgto = document.getElementById("closegto");
var shpbtn = document.getElementById("shopbtn");
var shparea = document.getElementById("shop");
var closeshp = document.getElementById("closeshp");

openOp.onclick = function opnclsOptions () {


	if (closedop == true) {
		options.style.width = "200px";
	openOp.setAttribute("class","fa fa-arrow-left icons col-md-1");
	whenopen.style.display = "block";
	closedop = false;
	}
	
	else {
		options.style.width = "50px";
		whenopen.style.display = "none";
		openOp.setAttribute("class","fa fa-arrow-right icons col-md-1");
		closedop = true;
	}
}

gtoBtn.onclick = function openGoto () {
	goTo.style.display = "block";
	optionarea.style.display = "none";
}



downgto.onclick = function closeGoto () {
	goTo.style.display = "none";
	optionarea.style.display = "block";
}

shpbtn.onclick = function openshop () {
	shparea.style.display = "block";
	optionarea.style.display = "none";
}

closeshp.onclick = function closeshop () {
	shparea.style.display = "none";
	optionarea.style.display = "block";
}

function getkey (event) {
 key = event.keyCode;
 
 if (key == 39) {
	 joesposleft += joesSpd;
	 }

  if (key == 37) {
	 joesposleft -= joesSpd;
 }
 
 if (key == 38) {
	 joespostop -= joesSpd;
 }
 if (key == 40) {
	 joespostop += joesSpd;
 }
 
  if (key == 16 && joesposleft >= 800 && joespostop >= 300 && joesposleft <= 934 && joespostop <= 550) {
	 window.location = "backyard.html";
 }
 
placeJoe();



}

function placeJoe () {
 joe.style.marginTop = joespostop + "px";
joe.style.marginLeft = joesposleft + "px";


 if (joesposleft >= 915) {
	joesposleft = 915;
}

 if (joesposleft <= 0 ) {
	joesposleft = 0 + 2;
}

if (joespostop >= 417) {
	joespostop = 416;  
}

if (joespostop <= 0) {
	joespostop = 1;
}

}

