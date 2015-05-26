angular.module( 'pier', [
	'ui.router',
	'ui.bootstrap'
] )
.factory( 'apiUrl', function(){
	return {
		testApi: '/merchant/getCountries'
	}
} )
.config( function( $urlRouterProvider, $stateProvider, $logProvider ){
	$logProvider.debugEnabled( true );
	$urlRouterProvider.otherwise( '/' );

	//config url 
	$stateProvider.state( 'home', {
		url: '/',
		templateUrl: 'home/home.html',
		// controller: 'HomeController'
	} )

} )
.run( function( $rootScope, $state, $log ){
    $rootScope.$on( '$stateChangeStart', function( event, toState, toParams, fromState, fromParams ) {

    } ) 
} )
.controller( 'PierController', function( $scope, $log, $http, apiUrl ){
    $http.get( apiUrl.testApi ).
	    success(function(data, status, headers, config) {
	        $log.debug( 'get countries success', data );
	    }).
	    error(function(data, status, headers, config) {
	        $log.debug( 'get countries failure', data );
	    });
} )
