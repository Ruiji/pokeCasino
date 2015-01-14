(function() {
	var app = angular.module('pokeBazaar', []);

	app.controller('BazaarController', function() {
		var bazaar = this;
		bazaar.pokemon = [];
	});

	var pokemon = [ {
			name : 'Articuno',
			id : 144,
			species: 'Freeze',
			type : [
					'Ice',
					'Flying' 
			],
			height : "5\'07\"",
			weight : 122.1,
			description: "A legendary bird Pokemon. It can create blizzards by freezing moisture in the air."
			price : 150
		}, {
			name : 'Zapdos',
			id : 145,
			species :'Electric',
			type : [
					'Electr',
					'Flying' 
			],
			height : "5\'03\"",
			weight : 116.0,
			description: "A legendary bird Pokemon that is said to appear from clouds while dropping enormous lightning bolts."
			price : 150
		}, {
			name : 'Moltres',
			id : 146,
			species :'Flame',
			type : [
					'Fire',
					'Flying' 
			],
			height : "6\'07\"",
			weight : 132.3,
			description: "It is said to be the legendary bird Pokemon of fire. Every flap of its wings creates a dazzling flare of flames."
			price : 150
		}, {
			name : 'Latias',
			id : 380,
			species :'Eon',
			type : [
					'Dragon',
					'Psychic' 
			],
			height : "4\'07\"",
			weight : 88.7,
			description: "It communicates using telepathy. Its body is covered in down that refracts light to make it invisible."
			price : 450
		}, {
			name : 'Latios',
			id : 381,
			species :'Eon',
			type : [
					'Dragon',
					'Psychic' 
			],
			height : "6\'07\"",
			weight : 132.3,
			description: "A highly intelligent Pokemon. By folding back its wings in flight, it can overtake jet planes."
			price : 450
		}, {
			name : 'Luxray',
			id : 405,
			species :'Gleam Eyes',
			type : [
					'Electr' 
			],
			height : "4\'07\"",
			weight : 92.6,
			description: "When its eyes gleam gold, it can spot hiding prey--even those taking shelter behind a wall."
			price : 1000
		}

	];

})();