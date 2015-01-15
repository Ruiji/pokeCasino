(function() {
	var app = angular.module('bazaar-directives', []);

	app.directive('pokemonDescription', function() {
		return {
			restrict : 'E',
			templateUrl : 'pokemon-description.html'
		};
	});

	app.directive('pokemonInfo', function() {
		return {
			restrict : 'AE',
			templateUrl : 'pokemon-info.html'
		};
	});

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

	app.directive('pokemonGallery', function() {
		return {
			restrict : 'E',
			templateUrl: 'pokemon-gallery.html',
			controller: function() {
				this.current = 0;
        		this.setCurrent = function(imageNumber){
          			this.current = imageNumber || 0;
        		};
      		},
      		controllerAs: "gallery"
		}
	});

	app.directive('pokemonEdit', function() {
		return {
			restrict : 'AE',
			templateUrl: 'pokemon-edit.html'
		}
	});

	app.directive('pokemonDelete', function() {
		return {
			restrict : 'AE',
			templateUrl: 'pokemon-delete.html'
		}
	});

	app.directive("pokemonAdd", function() {
    	return {
      		restrict: 'AE',
      		templateUrl: "pokemon-add.html"
    	};
  });
})();