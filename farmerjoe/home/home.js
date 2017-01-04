 function getkey (event) {
 key = event.keyCode;

 if (key == 16 && joesposleft >= 800 && joespostop >= 300 && joesposleft <= 934 && joespostop <= 550) {
	 window.location = "backyard.html";
 }
 
 //from here to the next *, is used to keep Joe inside the game area.
 
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
 
 
placeJoe();

//*

}var joespostop = 417;
var joesposleft = 900;

