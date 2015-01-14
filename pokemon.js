(function() {
	var app = angular.module('bazaar-directives', []);

	app.directive('pokemonDescription', function() {
		return {
			restrict : 'E',
			templateUrl : 'pokemon-description.html'
		};
	});

	app.directive('pokemonSpecs', function() {
		return {
			restrict : 'A'
			templateUrl : 'pokemon-info.html'
		};
	})

	app.directive('pokemonTabs', function() {
		return {
			restrict : 'E',
			templateUrl : 'pokemon-tabs.html',
			controller : function() {
				this.tab = 1;

				this.isSet = function(checkTab) {
					return this.tab == checkTab;
				};

				this.setTab = function(activeTab) {
					this.tab = activeTab;
				};

			},
			controllerAs : "tab"
		};
	});
})();