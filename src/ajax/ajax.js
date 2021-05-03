let favs = [];

function seeAll() {
	const contenido = $('#contenido');
	contenido.empty();

	/*contenido.html( `
		<div class="row">
		</div>
		<div class="row">
			<div class="col-lg-4">
				<div class="col" border=1>
					<img src="https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg" 
						height="90%" width="90%" onclick="seeDetails(1)"/>
					<div class="row">
						<div class="col-sm-9">
							<h4>A-Bomb</h4>
						</div>
						<div class="col-sm-2">
							<center><i class="fas fa-star"></i></center>
						</div>
					</div>					
				</div>
			</div>
			<div class="col-lg-4">
				<div class="col" border=1>
					<img src="https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg" 
						height="90%" width="90%" onclick="seeDetails(1)"/>
					<div class="row">
						<div class="col-sm-9">
							<h4>A-Bomb</h4>
						</div>
						<div class="col-sm-2">
							<center><i class="fas fa-star"></i></center>
						</div>
					</div>					
				</div>
			</div>
			<div class="col-lg-4">
				<div class="col" border=1>
					<img src="https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg" 
						height="90%" width="90%" onclick="seeDetails(1)"/>
					<div class="row">
						<div class="col-sm-9">
							<h4>A-Bomb</h4>
						</div>
						<div class="col-sm-2">
							<center><i class="fas fa-star"></i></center>
						</div>
					</div>
				</div>
			</div>
		</div>
	` );*/
	
	$.ajax({
		url: "src/ajax/php_calls/seeAllHeroesVillains.php",
		datatype: 'text',
		success: function (response) {
			var data = JSON.parse(response);
			$('#contenido').html(`
				<div class="row">
					<div class="col-lg-4">
						<div class="col" border=1>
							<img src="` + data.image.url + `" 
								height="90%" width="90%" onclick="seeDetails(` + data.id + `)"/>
							<div class="row">
								<div class="col-sm-9">
									<h4>` + data.name + `</h4>
								</div>
								<div class="col-sm-2">
									<center><i class="fas fa-star"></i></center>
								</div>
							</div>					
						</div>
					</div>
				</div>
			`);

		},
		error:function (fail) {
			console.log(fail);
		}
	});
}

function seeFavs(){
	const contenido = $('#contenido');
	contenido.empty();
	contenido.html(`
		<div class="row">
		</div>
		<div class="row">
			<div class="col-lg-4">
				<div class="col" border=1>
					<img src="https://www.superherodb.com/pictures2/portraits/10/100/10061.jpg" 
						height="90%" width="90%" onclick="seeDetails(1)"/>
					<div class="row">
						<div class="col-sm-9">
							<h4>A-Bomb</h4>
						</div>
						<div class="col-sm-2">
							<center><i class="fas fa-star" style="color: yellow"></i></center>
						</div>
					</div>					
				</div>
			</div>
			<div class="col-lg-4">
				<div class="col" border=1>
					<img src="https://www.superherodb.com/pictures2/portraits/10/100/10061.jpg" 
						height="90%" width="90%" onclick="seeDetails(1)"/>
					<div class="row">
						<div class="col-sm-9">
							<h4>A-Bomb</h4>
						</div>
						<div class="col-sm-2">
							<center><i class="fas fa-star" style="color: yellow"></i></center>
						</div>
					</div>					
				</div>
			</div>
			<div class="col-lg-4">
				<div class="col" border=1>
					<img src="https://www.superherodb.com/pictures2/portraits/10/100/10061.jpg" 
						height="90%" width="90%" onclick="seeDetails(1)"/>
					<div class="row">
						<div class="col-sm-9">
							<h4>A-Bomb</h4>
						</div>
						<div class="col-sm-2">
							<center><i class="fas fa-star" style="color: yellow"></i></center>
						</div>
					</div>	
				</div>
			</div>
		</div>
	`);
}

function seeDetails(id) {
	const contenido = $('#contenido');
	contenido.empty();

	$.ajax({
		url: "src/ajax/php_calls/getInfoFromHero.php",
		datatype: 'text',
		data: {
			'id': id
		},
		success: function (response) {
			var data = JSON.parse(response);
			//alert(data);
			contenido.html(`
				<div class="row">
					<div class="col-lg-5"></div>
					<div class="col-lg-1">
						<button class="btn btn-success" onclick="seeAll()">Ver todos</button>
					</div>
					<div class="col-lg-1">
						<button class="btn btn-success" onclick="seeFavs()">Ver favoritos</button>
					</div>
					<div class="col-lg-5"></div>
				</div>
				<br><br>
				<div class="row">
					<div class="col-lg-1"></div>
					<div class="col-lg-3">
						<img src="https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg" 
								height="100%" width="100%"/>
					</div>
					<div class="col-lg-6">
						<div class="row">
							<center><h1>` + data.name + `</h1></center>
						</div>
						<div class="row">
							<div class="col-lg-4">
								<div class="row"> ID personaje: ` + data.id + `</div>
								<div class="row">Genero: ` + data.appearance.gender + `</div>
								<div class="row">Raza: ` + data.appearance.race + `</div>	
							</div>
							<div class="col-lg-4">
								<div class="row">Altura (cms): ` + data.appearance.height[1] + `</div>
								<div class="row">Peso (lbs): ` + data.appearance.weight[0] + `</div>	
							</div>
							<div class="col-lg-4">
								<div class="row">Color de ojos: ` + data.appearance['eye-color'] + `</div>
								<div class="row">Color de cabello: ` + data.appearance['hair-color'] + `</div>
							</div>
						</div>
						<div class="row">
							<h3>Estadisticas</h3>
						</div>
						<div class="row">
							<div class="col-lg-4">
								<div class="row">Inteligencia: ` + data.powerstats.intelligence + `</div>
								<div class="row">Fuerza: ` + data.powerstats.strength + `</div>
							</div>
							<div class="col-lg-4">
								<div class="row">Velocidad: ` + data.powerstats.speed + `</div>
								<div class="row">Durabilidad: ` + data.powerstats.durability + `</div>
							</div>
							<div class="col-lg-4">
								<div class="row">Poder: ` + data.powerstats.power + `</div>
								<div class="row">Combate: ` + data.powerstats.combat + `</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-1"></div>
					<div class="col-lg-11">
						<div class="row"><h3>Biografia</h3></div>
						<div class="row">Nombre completo: ` + data.biography['full-name'] + `</div>
						<div class="row">Alter ego: ` + data.biography['alter-egos'] + `</div>
						<div class="row">Aliases: ` + data.biography.aliases + `</div>
						<div class="row">Lugar de nacimiento: ` + data.biography['place-of-birth'] + `</div>
						<div class="row">Primera publicaci&oacute;n: ` + data.biography['first-appearance'] + `</div>
						<div class="row">Publicador: ` + data.biography.publisher + `</div>
					</div>
					<div class="col-lg-1"></div>
					<br><br>
				</div>
			`);
		},
		error:function (fail) {
			console.log(fail);
		}
	});
	
	
}

function search(name) {
	const contenido = $('#contenido');
	//contenido.empty();

	var name = name.trim();

	contenido.html("no hago la peticion aun");
	$.ajax({
		url: "src/ajax/php_calls/searchHero.php",
		datatype: "text",
		data: {
			"super": name
		},
		success: function (response) {
			var data = JSON.parse(response);
			console.log(data);
			var dataLength = data.results.length;
			var lines = Math.ceil(dataLength/3);
			var counter;
			var aux = 0;
			var c = 0;
			
			contenido.html('antes del desastre');
			for (var i = data.results.length - 1; i >= 0; i--) {
				contenido.html("<pre>" + data.results[i] + "</pre>");
<			}
			/*while(lines > 0){
				counter = 0;
				console.log("Lineas restantes: " + lines);
				//contenido.html('<div class="row">');
				contenido.html('<h1>row</h1>');
				while(counter < 3 && c < dataLength-1){
					c = aux + counter;
					console.log("Contador en: " + c + " Heroe: " + data.results[parseInt(c)].name);
					contenido.html(c);
					/*contenido.html(`
						<div class="col-lg-4">
						<div class="col" border=1>
							<img src="` + data.results[parseInt(c)].image.url + `" 
								height="90%" width="90%" onclick="seeDetails(` + data.results[parseInt(c)].id + `)"/>
							<div class="row">
								<div class="col-sm-9">
									<h4>` + data.results[parseInt(c)].name + `</h4>
								</div>
								<div class="col-sm-2">
									<center><i class="fas fa-star"></i></center>
								</div>
							</div>					
						</div>
					</div>
					`);
					counter++;
				}
				aux = aux + counter;
				contenido.html('</div>');
				lines--;
			}*/
		},
		error: function (fail) {
			console.log(fail);
		}
	});
	//contenido.html();
}