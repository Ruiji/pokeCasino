	var app = angular.module('pokeBazaar', ['bazaar-directives']);
	app.controller('BazaarController', function($scope) {
		$scope.bazaar = pokemon;
		//bazaar.pokemons = [];
		console.log($scope.bazaar);
	});

	var pokemon = [ {
			name : 'Articuno',
			id : 144,
			species: 'Freeze',
			type : "Ice, Flying",
			height : "5\'07\"",
			weight : 122.1,
			description: "A legendary bird Pokemon. It can create blizzards by freezing moisture in the air.",
			price : 150,
			images: [
				"images/articuno1.png",
				"images/articuno2.gif",
				"images/articuno3.gif",
				"images/articuno4.png"
			]
		}, {
			name : 'Zapdos',
			id : 145,
			species :'Electric',
			type : "Electr, Flying",
			height : "5\'03\"",
			weight : 116.0,
			description: "A legendary bird Pokemon that is said to appear from clouds while dropping enormous lightning bolts.",
			price : 150,
			images: [
				"images/zapdos1.png",
				"images/zapdos2.gif",
				"images/zapdos3.png",
				"images/zapdos4.png"
			]
		}, {
			name : 'Moltres',
			id : 146,
			species :'Flame',
			type : "Fire, Flying",
			height : "6\'07\"",
			weight : 132.3,
			description: "It is said to be the legendary bird Pokemon of fire. Every flap of its wings creates a dazzling flare of flames.",
			price : 150,
			images: [
				"images/moltres1.png",
				"images/moltres2.gif",
				"images/moltres3.png",
				"images/moltres4.png"
			]
		}, {
			name : 'Latias',
			id : 380,
			species :'Eon',
			type : "Dragon, Psychic",
			height : "4\'07\"",
			weight : 88.7,
			description: "It communicates using telepathy. Its body is covered in down that refracts light to make it invisible.",
			price : 450,
			images: [
				"images/latias1.png",
				"images/latias2.png",
				"images/latias3.gif",
				"images/latias4.png"
			]
		}, {
			name : 'Latios',
			id : 381,
			species :'Eon',
			type :"Dragon, Psychic",
			height : "6\'07\"",
			weight : 132.3,
			description: "A highly intelligent Pokemon. By folding back its wings in flight, it can overtake jet planes.",
			price : 450,
			images: [
				"images/latios1.png",
				"images/latios2.png",
				"images/latios3.gif",
				"images/latios4.png"
			]
		}, {
			name : 'Luxray',
			id : 405,
			species :'Gleam Eyes',
			type : "Electr",
			height : "4\'07\"",
			weight : 92.6,
			description: "When its eyes gleam gold, it can spot hiding prey--even those taking shelter behind a wall.",
			price : 1000,
			images: [
				"images/luxray1.png",
				"images/luxray2.png",
				"images/luxray3.png",
				"images/luxray4.png"
			]
		}

	];