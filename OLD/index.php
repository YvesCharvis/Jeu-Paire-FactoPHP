<?php
$liste = ["img/ane.jpg", "img/chat.jpg", "img/chien.jpg", "img/lama.jpg", 
			"img/lapins.jpg", "img/lionne.jpg", "img/ours.jpg","img/ane.jpg", "img/chat.jpg", "img/chien.jpg", "img/lama.jpg", 
			"img/lapins.jpg", "img/lionne.jpg", "img/ours.jpg"];
	shuffle($liste);
	?>

<!DOCTYPE html>
<html>
<head>
	<title>Jeux-des-paires</title>
	<meta charset="utf-8">
	<link href="https://fonts.googleapis.com/css?family=Kumar+One" rel="stylesheet">
	<link id="css" rel="stylesheet" type="text/css" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Hammersmith+One" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Julius+Sans+One" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="http://csshake.surge.sh/csshake.min.css">
	<script type="text/javascript">
        var tab = [<?php foreach ($liste as $casedutableau){
            echo '"'.$casedutableau.'",';
        } ?>];
            </script>
</head>


 	<body>
		<div id="titre">
		<h1>JEU DES PAIRES</h1>
		</div >
		<div class="p">
			<p>Règles du jeu: Afficher toutes les paires pour gagner</p>
			<p>Vous avez trouvé <span id="paires">0</span> paires cachées</p>
		</div>

		<p id="bestScore">Meilleur Score : </p>
		<p id="bestTime">Meilleur Temps : </p>

		<span id="chronotime">00:00</span>
		<form onSubmit="choixTheme();return false;" name="formu">
			<input id="t1" type="radio" name="theme"  >
			<label>Thème 1</label>
			<input id='t2'	type="radio" name="theme" checked="" >
			<label>Thème 2</label>
			<input id="t3" 	type="radio" name="theme" checked="" >
			<label>Thème 3</label>
			<input id="t4" type="radio" name="theme" checked="" >
			<label>Thème 4</label>	
			<input id="t5" type="radio" name="theme" checked="" >
			<label>Thème 5</label>	
		</form>
		 <div id="photo"> 	
			<?php
			$dos='img/dos.png';
		 			for($doscarte=0; $doscarte<=13; $doscarte++)
		            echo '<img src="img/dos.png" class="photo" onclick="choisir('.$doscarte.')" draggable="false">' ;
		    ?>	

		  <!--ici javascript--> 
		</div>
		
		<script type="text/javascript" src='js/jquery-3.1.1.slim.js'></script>
		<script type="text/javascript" src="js/script.js"></script>
	</body>
</html>

