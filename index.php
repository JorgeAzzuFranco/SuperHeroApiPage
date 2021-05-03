<!DOCTYPE html>
<html>
<head>
	<title>Superheroes and Villains - Finder</title>

	<!-- Libraries -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="src/css/style.css">
	<script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" data-auto-replace-svg="nest"></script>
	<script type="text/javascript" src="src/js/script.js"></script>
	<script type="text/javascript" src="src/ajax/ajax.js"></script>

</head>
<body>
	<nav class="navbar navbar-expand-lg">
		<div class="col-lg-4" id="titulo">Hero and Villains - Finder</div>
		<div class="col-lg-4"></div>
		<div class="col-lg-2">
			<input class="form-control mr-sm-2" id="search_bar" type="search" name="search_bar" placeholder="Buscar" onchange="search(this.value)">
		</div>
		<div class="col-lg-1" onclick="seeAll()">Ver Todos</div>
		<div class="col-lg-1" onclick="seeFavs()">Favoritos</div>
	</nav>
	<br>
	<div class="container" id="contenido" style="background-color: white;">
		
	</div>
	
	<!--<footer>
		<center>
			<div>(c) Jorge Alberto Franco Cuadra</div>
		</center>
	</footer>-->
</body>
</html>