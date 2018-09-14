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

console.log(convert("305,138,445,193",0.714))
// fonction convertion d'un ecran a un autre 
