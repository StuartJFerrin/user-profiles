angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
     return http ({
       method: 'post', 
       url: '/api/login',
       data: user
      }).then(function(response ) {
        return response.data
      })
    };

    this.getFriends = function() {
    	/* FIX ME */
    };
  
});
