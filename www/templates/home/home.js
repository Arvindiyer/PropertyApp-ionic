(function(){
		"use strict";
		var app = angular.module('PropertyApp.home',['ionic','PropertyApp.home-otp' ])
		var PHONE_REGEXP = /^[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;
	 

		app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		         $urlRouterProvider.otherwise('/');
		         $stateProvider

          		.state('home-otp', {
                	url: "/home-otp",
                	templateUrl: 'templates/home/home-otp.html'
                })
		     }]);
		var flag=1;
		app.directive('phone', function() {
	     return {
    	    restrice: 'A',
		        require: 'ngModel',
		        link: function(scope, element, attrs, ctrl) {
		            angular.element(element).bind('blur', function() {
		                var value = this.value;
		                if(PHONE_REGEXP.test(value)) {
		                    // Valid input
		                    flag=0;
		                    console.log("valid phone number");
		                } else {
		                    // Invalid input  
		                    //console.log("invalid phone number");
		                    flag=1;
		                    alert("invalid");
		                }
		            });              
		        }            
		    }        
		});


		app.controller('HomeCtrl',['$scope','$state',function($scope,$state){

			 $scope .login = function(user){
			 	if(flag==1)
			 	{
			 		alert("Invalid");
			 	}
			 	else
			 	{
			 	   ParsePushPlugin.getInstallationId(function(id) {
				   	 	
				   	 	var No = Parse.Object.extend("No");
	        		 	var person = new No();
	        		 	person.save({Phoneno: user, Id: id}).then(function(object) {
				  			 			// Send push notification to query									  					
										var query = new Parse.Query(Parse.Installation);
										query.equalTo('id', true);
										Parse.Push.send({
										  where: query, // Set our Installation query
										  data: {
										    alert: "Welcome to Property-App ur otp is 1234." 
										  }
										},{
										  success: function() {
										    // Push was successful
										    	$state.go('home-otp');			
										    	
										  },
										  error: function(error) {
										    alert('Opps Something went wrong come back later');
										  }
										});
							});
			 		});
	  		  
				}
			}	
		}]);
})();
