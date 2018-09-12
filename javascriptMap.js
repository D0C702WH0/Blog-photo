function WhereMouse(event){

	let Mouse_X = event.pageX;
	let Mouse_Y = event.pageY;

	console.log(Mouse_X-100 , Mouse_Y-160)
	//console.log(transCoo(Mouse_X,vw(100)) , transCoo(Mouse_Y,vw(70.7)))
} //A retirer uen fois la page terminée

function transCoo(coord,dimPhoto) {
	return coord/dimPhoto
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
} // conversion vw js

