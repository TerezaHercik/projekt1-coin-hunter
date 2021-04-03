// nadefinujeme globální proměnné
// ty jsou pak použitelné kdekoliv v programu
let panacek, panacekX, panacekY, panacekSirka, panacekVyska;
let mince, minceX, minceY, minceSirka, minceVyska;

panacek = document.querySelector("#panacek");
mince = document.querySelector("#mince");

// tato funkce se spustí při načtení stránky
// tj. ve chvíli, kdy je načtené komplet HTML, CSS a všechny obrázky a zvuky
function priNacteniStranky() {

	// do globálních proměnných si uložíme odkaz na objekty panáčka a mince,
	// abychom je nemuseli při každém použití znovu na stránce hledat pomocí document.querySelector


	// zjistíme šířku a výšku panáčka
	panacekSirka = panacek.width;
	panacekVyska = panacek.height;

	// a umístíme panáčka do středu okna
	panacekX = Math.round(window.innerWidth / 2 - panacekSirka / 2);
	panacekY = Math.round(window.innerHeight / 2  - panacekVyska / 2);

	// umístíme panáčka na startovní pozici
	umistiPanacka();


	// zjistíme šířku a výšku mince
	minceSirka = mince.width;
	minceVyska = mince.height;


	// a vygenerujeme první minci na náhodné pozici
	novaMince();

}

// funkce, která umístí panáčka na jeho souřadnice
// tj. nastaví jeho style.left a style.top na hodnoty panacekX, panacekY
function umistiPanacka() {
	// musíme to napsat :)
	panacek.style.left = panacekX + 'px';
	panacek.style.top = panacekY + 'px';
	console.log("zkoušíš umístit panáčka");
}

// funkce pro nahodné vygenerování nové pozice mince
// a umístění mince na tyto souřadnice
function novaMince() {
	// musíme to napsat :)
	minceX = Math.round(Math.random() * (window.innerWidth - minceSirka));
	minceY = Math.round(Math.random() * (window.innerHeight - minceVyska));
	mince.style.left = minceX + 'px';
	mince.style.top = minceY + 'px';
	console.log("Pokoušíš se umístit minci na náhodnou pozici");
}

// tato funkce se zavolá při stisku klávesy
// do proměnné "udalost" se vloží objekt s parametry události¨
// kde lze najít např. i vlastnost "key",
// která obsahuje znak stisknuté klávesy
function priStiskuKlavesy(udalost) {

	// šipka vlevo
	if (udalost.key === "ArrowLeft") {
		panacekX -= 10;
		if (panacekX + panacekSirka > window.innerWidth) {
			panacekX = window.innerWidth - panacekSirka;
		}
		panacek.src = "obrazky/panacek-vlevo.png";

	}

	// šipka vpravo
	if (udalost.key === "ArrowRight") {
		panacekX += 10;
		if (panacekX + panacekSirka > window.innerWidth) {
			panacekX = window.innerWidth - panacekSirka;
		}
		panacek.src = "obrazky/panacek-vpravo.png";
	
	}

	// šipka nahoru
	if (udalost.key === "ArrowUp") {
		panacekY -= 10;
		if (panacekY < 0) {
			panacekY = 0;
		}
		panacek.src = "obrazky/panacek-nahoru.png";
	
	}

	// šipka dolů
	if (udalost.key === "ArrowDown") {
		panacekY += 10;
		if (panacekY + panacekVyska > window.innerHeight) {
			panacekY = window.innerHeight - panacekVyska;
		}
		panacek.src = "obrazky/panacek.png";
	
	}


	// panáčka umistíme na nově vypočítanou pozici
	umistiPanacka();

	// otestujeme kolizi panáčka s mincí
	otestujKolizi();


}

// fuknce pro otestování kolize panáčka s mincí
function otestujKolizi() {
	// musíme to napsat :)
	if(!(
		panacekX + panacekSirka < minceX || 
		minceX + minceSirka < panacekX || 
		panacekY + panacekVyska < minceY ||
		minceY + minceVyska < panacekY
	)) {
		novaMince();
		console.log("Panák sežral minci");	
	};
	
}
