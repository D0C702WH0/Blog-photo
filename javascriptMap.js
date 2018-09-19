function WhereMouse(event){

	let Mouse_X = event.pageX;
	let Mouse_Y = event.pageY;

	console.log(Mouse_X, Mouse_Y)
	//console.log(transCoo(Mouse_X,vw(100)) , transCoo(Mouse_Y,vw(70.7)))
} //A retirer uen fois la page terminée

function transCoo(coord,dimPhoto) {
	return coord/dimPhoto
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
} // conversion vw js

function convert (chain,coef) {
	return chain.split(",").map(x=>Math.round(parseInt(x)*coef)).join(",")
}

console.log(convert("464,174,442,378,397,505,435,504,448,469,497,468,516,509,540,501,497,371",0.3125))
// fonction convertion d'un ecran a un autre 
