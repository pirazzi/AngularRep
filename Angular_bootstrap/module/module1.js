
angular.module('AngularB', [])
	.controller('indexController', function ($scope, elencoCitta, menu) {

		$scope.nome = "Fabrizio";
		$scope.cognome = "Pirazzi";

		$scope.citta = elencoCitta.elenco;
		$scope.menu = menu.elencoVoci;
		
		$scope.menu = "./view/page1.html";
		
		$scope.Vai = function(page){
			
			$scope.menu = page;
		}
		
	}).controller('cittaController', function ($scope, elencoCitta) {


		$scope.aggiungi = function (nomeCitta, siglaCitta) {
			elencoCitta.aggiungi({ nome: nomeCitta, sigla: siglaCitta });
		};

	})
	.service("elencoCitta", function () {

		this.elenco = [
			{ nome: "Roma", sigla: "RM" },
			{ nome: "Milano", sigla: "Mi" },
			{ nome: "Napoli", sigla: "Na" },
			{ nome: "Palermo", sigla: "Pa" },
			{ nome: "Udine", sigla: "Ud" },
		];

		this.aggiungi = function (citta) {
			this.elenco.push(citta);
		}

	})
	.service("menu", function () {

		this.elencoVoci = [
			{ dir: "./view/page1.html", nome: "Page 1" },
			{ dir: "./view/page2.html", nome: "Page 2" },
			{ dir: "./view/page3.html", nome: "Page 3" },
		];

	});
	
	