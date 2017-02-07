var niveau = lireCookie3('niveau');
var dos = 'img/dos.png'; // On définie l'image de dos
var clique=0;//Nombres de cliques
var paires = 0;//Nombres de paires
var choixun;//
var choixdeux;//
var norepeat = true;//empeche le chrono de se repeter

var highscore = lireCookie('highscore');
document.getElementById("bestScore").innerHTML="Meilleur score : "+highscore;
var highTime = lireCookie2('highTime');
if(highTime != "99:999"){
	document.getElementById("bestTime").innerHTML="Meilleur temps : "+highTime;
}

function lireCookie(name){
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return 0;
}

function lireCookie2(name){
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return "99:999";
}

function lireCookie3(name){
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return 5;
}


function saveCookie(highscore) {
	document.cookie = "highscore="+highscore+"; expires=Mon, 1 Mar 2025 00:00:00 UTC; path=/";
}
function saveCookie2(highTime) {
	document.cookie = "highTime="+highTime+"; expires=Mon, 1 Mar 2025 00:00:00 UTC; path=/";
}


 //                                                                         AFFICHER LES IMAGES                                                         //



 //                                                                           CHOIX DES CARTES                                                         //
 
function choisir(carte) { // Choix des cartes quand l'utilisateur clique
	if (norepeat == true){//empeche le chronometre de se repeter
		timerID = setInterval("chrono()", 1000);//on appelle la fonction chronometre
		norepeat = false;
	}
	 
	if (clique == 2) { // Au delà du deuxième clique
		return; // On affiche rien
	}
	if (clique == 0) { // Au premier clique
		choixun = carte; // On attribue le numéro de la carte choisie au premier choix
		document.images[carte].src =  tab[carte]; // Affiche l'image de la carte correspondant au choix
		document.images[choixun].style.pointerEvents = 'none';//Desactive l'evenement du clique(pas de double clique)
		clique = 1; // On passe le clique à 1
	}
	else { // Au deuxième clique
		clique = 2; // On passe le clique à 2
		choixdeux = carte; // On attribue le numéro de la carte choisie au deuxième choix
		document.images[carte].src =  tab[carte]; // Affiche l'image de la carte correspondant au choix
		timer = setTimeout("verif()", 500); // Ajoute un temps de pause puis passe à la fonction de vérification
	}	
}

  //                                                                         VERIFIE LES PAIRES                                                       //
 //Chiffre du level

function verif() { // Vérifie si une paire a été faite
	
	if (tab[choixdeux] ==  tab[choixun]) {//si les deux cartes sont pareilles la paire reste fixe
		paires++; 
		document.getElementById("paires").innerHTML = paires;
		document.getElementById("bestScore").innerHTML="Meilleur score : "+highscore;
		if (paires >= highscore){
			highscore = paires;
			document.getElementById("bestScore").innerHTML="Meilleur score : "+highscore;
			saveCookie(highscore);
		}
		document.images[choixun].style.pointerEvents = 'none';//Desactive l'evenement du clique(pas de double clique)
		document.images[choixun].style.opacity = '0.3';// l'opacité s'applique sur la carte retournée
		document.images[choixun].style.pointerEvents = 'none';//Desactive l'evenement du clique(pas de double clique)
		document.images[choixdeux].style.opacity = '0.3';// l'opacité s'applique sur la carte retournée
	} else {
		document.images[choixun].src = dos;
		document.images[choixun].style.pointerEvents = 'auto';//Desactive l'evenement du clique(pas de double clique)
		document.images[choixdeux].src = dos;
		return;
	}
	if (paires==7) {
		clearInterval(timerID);//arette le chrono quand toutes les paires trouvées
		document.getElementById("photo").style.display = 'block';
		document.getElementById("photo").style.flexDirection = 'column';
		if (document.getElementById('chronotime').innerHTML <= highTime){
			highTime = document.getElementById('chronotime').innerHTML;
			document.getElementById("bestTime").innerHTML="Meilleur temps : "+highTime;
			saveCookie2(highTime);
		}
		document.getElementById("photo").innerHTML = 
		'<div class"button"><input type="button" class="suivant" value="level suivant" onClick="levelup()"></div>';
		
	}
}
// PASSAGE DE LVL //

			   // Ajoute -1 pour le lengh des listes d'image au clique du boutton lvl suivant

  //                                                                         CHRONOMETRE                                                              //

var timerID = 0;
var sec = 0;
var min = 0; 

function chrono(){ //Function chronometre
	if(sec<59){//quand seconde superieur a 59 milliemme
		sec++;//ajoute une seconde au chronometre
		if(sec<10){
			sec = "0" +sec;//affiche 00 avant le chiffre 1
		}

	}
	else if(sec=59){//quand seconde superieur a 59 milliemme
		min++;//ajoute une minute au chronometre
		sec = "0" + 0;
	}
	document.getElementById("chronotime").innerHTML = min + ":" + sec +"";//afiche le chronometre dans le html a l'endroit ciblé par l'id


}


 
   ///////////////////////////////////////////////////////
  //-------------------choix theme---------------------//
 ///////////////////////////////////////////////////////
//{permet à l'utilisateur de choisir un thème}

$('#t1').click(function(){//----------------------------------------au click sur l'imput
	$('#photo img').attr('src', 'img/dos.png');//				défini un nouveau dos de carte		
	dos =  'img/dos.png';				
	$('#css').attr('href', "css/style.css");//-------------------------charge le fichier css du thème
//	img = 'img';
//	changeDossier();	
});
$('#t2').click(function(){//----------------------------------------au click sur l'imput												
	$('#photo img').attr('src', 'img/theme2.jpg');//				défini un nouveau dos de carte	
	dos =  'img/theme2.jpg';
	$('#css').attr('href', "css/theme2.css");//-------------------------charge le fichier css du thème
//	img = 'img2';
//	changeDossier();	
});
$('#t3').click(function(){//----------------------------------------au click sur l'imput
	$('#photo img').attr('src', 'img/theme3.jpg');//				défini un nouveau dos de carte
	dos =  'img/theme3.jpg';							
	$('#css').attr('href', "css/theme3.css");//-------------------------charge le fichier css du thème	
//	img = 'img3';
//	changeDossier();
});
$('#t4').click(function(){//----------------------------------------au click sur l'imput
	$('#photo img').attr('src', 'img/theme4.png');//				défini un nouveau dos de carte	
	dos =  'img/theme4.png';					
	$('#css').attr('href', "css/theme4.css");//-------------------------charge le fichier css du thème	
//	img = 'img4';
//	changeDossier();
});
$('#t5').click(function(){//----------------------------------------au click sur l'imput
	$('#photo img').attr('src', 'img/theme5.png');//				défini un nouveau dos de carte	
	dos =  'img/theme5.png';					
	$('#css').attr('href', "css/theme5.css");//-------------------------charge le fichier css du thème	
	//img = 'img5';
	//changeDossier();

});
