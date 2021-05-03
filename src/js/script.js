//Variables globales
const endpoint = "https://superheroapi.com/api/293138438933439/";

function clicked() {
	alert("Estoy vivo");
}

/*function search(text) {
//Despues lo sigo intentado con estos
	const route = "search/";
	var uri = endpoint + route + text.trim();
	console.log(uri);


	fetch(uri, { mode: 'no-cors', credentials: 'include' })
	.then(response => response.json())
	.then(datas => {
		var data = JSON.parse(JSON.stringify(datas));
		console.log(data)
	});
	//.catch(err => console.log(err))

}

//Ver todos los superheroes
function seeAll() {
	var content = document.getElementById('content');

	const uri = endpoint;

	fetch(uri+'1', mode: 'no-cors')
	.then(response =>response.json())
	.then(data => {
		for (hero in data) {
			console.log(data.id)
		}
	});

}*/