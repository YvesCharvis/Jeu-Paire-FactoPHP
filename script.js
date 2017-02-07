var clique = 0;
var paires = 0;
var choixun;
var choixdeux;
var norepeat = true;//empeche le chrono de se repeter
var dos = 'img/dos.jpg';



function choisir(carte){
	if (norepeat == true){
		timerID = setInterval("chrono()", 1000); 
		norepeat = false;
	}
	if (clique == 2) {
		return;
	}
	if(clique == 0){
		choixun = carte;
		document.images[carte].src = tab[carte];
		document.images[choixun].style.pointerEvents = 'none';
		clique = 1;
	}else{
		clique = 2;
		choixdeux = carte;
		document.images[carte].src = tab[carte];
		timer = setTimeout("verif()",500);
	}
	
}

function verif() { // Vérifie si une paire a été faite
	clique = 0;
	if (tab[choixdeux] == tab[choixun]) {
		paires++;
		document.getElementById("paires").innerHTML = paires;
		document.images[choixun].style.pointerEvents = 'none';
		document.images[choixun].style.opacity = '0.3';
		document.images[choixun].style.pointerEvents = 'none';
		document.images[choixdeux].style.opacity = '0.3';
	} else {
		document.images[choixun].src = dos;
		document.images[choixun].style.pointerEvents = 'auto';
		document.images[choixdeux].src = dos;
		return;
	}
	if (paires==7) {
		clearInterval(timerID);
		document.getElementById("mosaique").style.display = 'block';
		document.getElementById("mosaique").style.flexDirection = 'column';
		document.getElementById('mosaique').innerHTML = '<h1> Tu as gagné !</h1><br /><div id="bouton"><input id = "btnr" type="button" class="restart" value="Reviens Duelliste" onClick="window.location.reload()"></div> <img id="fin" src = "img/yugi.jpg">';
	}
}
var timerID = 0;
var sec = 0;
var min = 0; 

function chrono(){ 
	if(sec<59){
		sec++;
		if(sec<10){
			sec = "0" +sec;
		}

	}
	else if(sec=59){
		min++;
		sec = "0" + 0;
	}
	document.getElementById("chronotime").innerHTML = min + ":" + sec +"";

} 

