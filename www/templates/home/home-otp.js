(function(){
		"use strict";
		var app = angular.module('PropertyApp.home-otp',['ionic','PropertyApp.home','PropertyApp','PropertyApp.dashboard'])

		app.config(function($stateProvider, $urlRouterProvider) {
		         $urlRouterProvider.otherwise('/');
		         $stateProvider
          		.state('dashboard', {
                	url: "/dashboard",
                	templateUrl: 'templates/dashboard/dashboard.html'
                })
		     });
		app.controller('Home-otpCtrl',['$scope','$state',function($scope,$state){	
			$scope .signin=function(otp){

		    	if(otp=="1234")
				{
					$state.go('dashboard');	
				}
				else
				{
						alert('Invalid Token');
				}
			}
		}]);
})();