(function(){
		"use strict";
		var app = angular.module('PropertyApp.dashboard',['ionic','PropertyApp.home-otp' ])
	 
		app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		         $urlRouterProvider.otherwise('/');
		         $stateProvider
       
		     }]);

		app.controller('DashboardCtrl',[function(){

			console.log("In DashboardCtrl")
   			var rents =
   			{ 
   				place: [
	   						{
	   						  name:'Biren Somaiya',
	                          image: 'img/property.png',
	                          category: 'Flat',
	                          label:'Hot',
	                          price:'98202-17592',
	                          description:'I require for my client 2000-2500 sq ft carpet area premises for a showroom cum office cum warehouse in Lower PAREL & Worli on Lease as per the market rate '
	   						},
	   						{
	   							name:'Bandra-East',
	                          image: 'img/property.png',
	                          category: 'Flat',
	                          label:'Hot',
	                          price:'4.99',
	                          description:'Bandra East flat .....'
	   						},
	   						{
	   							name:'Bandra-East',
	                          image: 'img/property.png',
	                          category: 'Flat',
	                          label:'Hot',
	                          price:'4.99',
	                          description:'Bandra East flat .....'
	   						}
   						]	
     	   };
     	   this.rents=rents;
		}]);
})();