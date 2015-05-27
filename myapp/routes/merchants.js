var app = require( 'express' ),
router = app.Router(),
path = require( 'path' );
var http = require( 'http' );

/* GET home page. */
router.get('/*', function(req, res, next) {
  console.log( 'I am come in here222 ', path.basename() );

  http.get( 'http://pierup.ddns.net:8686/common_api/v1/query/get_countries', function( response ){
     
     response.on( 'data', function( result ){
     	console.log( 'Flower get countries success', result );
     	res.send( result );
     } );
     response.on( 'end', function(){
     	console.log( 'User get countries end...' );
     } )
   
  } )
  console.log( 'Server side has receive the get countries msg' );
});

module.exports = router;