<?php
$tabimg = ['img/exodia.jpg','img/celte.jpg','img/magicien.jpg','img/crane.jpg','img/dragonblanc.jpg','img/dragonrouge.jpg','img/obelisk.jpg','img/exodia.jpg','img/celte.jpg','img/magicien.jpg','img/crane.jpg','img/dragonblanc.jpg','img/dragonrouge.jpg','img/obelisk.jpg'];

shuffle($tabimg);
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<title>Jeu de cartes</title>
	<script type="text/javascript">
		var tab = [<?php 
		foreach ($tabimg as $casetabimg=>$image){
			 echo "'$image'";
                 if ($casetabimg != 13){
                 echo ",";
                 }
            }
		?>];
	</script>
</head>
<body>

	<header></header>

	<div id="titre">
		
	</div>	

	<p>vous avez trouvé <span id="paires"> 0 </span> paires cachées ;)</p>

	<span id="chronotime">00:00</span>
		<form name="chronoForm">
    		 
		</form>		

	<div id="mosaique">
		<?php
		$dos = "img/dos.jpg";
		for($i=0;$i<=13;$i++)
			echo '<img src="'.$dos.'" class="photo" onclick="choisir('.$i.')" draggable="false"/>';
		?>	
		
	</div>

<script type="text/javascript" src="script.js"></script>
</body>
</html>