// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

//definuju si proměnnou panáčka a o kolik px chci, aby se mi hýbal
let panacek = document.querySelector('#panacek');
let moveBy = 10; 

window.addEventListener('load', () =>{
	// startovní pozice panáčka
	panacek.style.left = '100px';
    panacek.style.top = '100px';

});

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



