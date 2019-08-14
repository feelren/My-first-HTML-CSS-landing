menu.onclick = function myFunction() {
	var x = document.getElementbyId('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		 x.className = "topnav";
	}
}




menu.onclick = function myFunction() {
    var x = document.getElementById('myTopnav');
   
    if (x.className === "topnav") {
     x.className += " responsive";
     } else {
         x.className = "topnav";
    }
}