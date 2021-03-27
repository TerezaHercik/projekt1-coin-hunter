// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

//1. POHYB PANÁČKA PO PLOŠE
//definuju si proměnnou panáčka a o kolik px chci, aby se mi hýbal
let panacek = document.querySelector('#panacek');
let moveBy = 10; 

window.addEventListener('load', () =>{
	// startovní pozice panáčka
	panacek.style.left = '100px';
	panacek.style.top = '100px';


});

//definuju si pohyb šipek a o kolik se posouvají
window.addEventListener('keyup', (e) =>{
	switch(e.key){
		case 'ArrowLeft':
			panacek.style.left = parseInt(panacek.style.left) - moveBy + 'px';
			break;
		case 'ArrowRight':
			panacek.style.left = parseInt(panacek.style.left) + moveBy + 'px';
			break;
		case 'ArrowUp':
			panacek.style.top = parseInt(panacek.style.top) - moveBy + 'px';
			break;
		case 'ArrowDown':
			panacek.style.top = parseInt(panacek.style.top) + moveBy + 'px';
			break;
			
	};

});


//2. POHYB MINCE PO PLOŠE

function getRandomPosition(element) {
	var x = document.body.offsetHeight-element.clientHeight;
	var y = document.body.offsetWidth-element.clientWidth;
	var randomX = Math.floor(Math.random()*x);
	var randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}
window.onload = function() {
	let img = document.getElementById("mince");
	document.body.appendChild(img);
	var xy = getRandomPosition(img);
	img.style.top = xy[0] + 'px';
	img.style.left = xy[1] + 'px';
}
    

    

//3. KONTROLA PROTÍNÁNÍ MINCE A PANÁČKA

// if (!( panacekX + panacekSirka < minceX || 
// 	minceX + minceSirka < panacekX || 
// 	panacekY + panacekVyska < minceY || 
// 	minceY + minceVyska < panacekY)) {
// 	// panacek a mince se prekryvaji
// }






