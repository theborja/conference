/// <reference path="../Scripts/angular-1.1.4.js" />

/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like to break AngularJS apps into the following folder structure
  at a minimum:

  /app
      /controllers      
      /directives
      /services
      /partials
      /views

  #######################################################################*/

var app = angular.module('customersApp', ['ngRoute']);





//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
	
	     
        .when('/location',
            {
                controller: 'NewsController',
                templateUrl: 'app/partials/location - copia.html'
            })
			
		.when('/schedule',
            {
                controller: 'CustomersController',
                templateUrl: 'app/partials/schedule.html'
            })
			
		.when('/exhibitors',
            {
                controller: 'NewsController',
                templateUrl: 'app/partials/exhibitors.html'
         		 })	
				 
		.when('/guests',
            {
                controller: 'GuestsController',
                templateUrl: 'app/partials/guests.html'
            })	
		.when('/news',
            {
                controller: 'NewsController',
                templateUrl: 'app/partials/bloghome.html'
            })
			
		.when('/twitter',
            {
                controller: 'CustomersController',
                templateUrl: 'app/partials/twitter.html'
            })		
			
		.when('/feedback',
            {
                controller: 'GuestsController',
                templateUrl: 'app/partials/feedback.html'
            })		
			
		.when('/about',
            {
                controller: 'GuestsController',
                templateUrl: 'app/partials/about.html'
				
				
				 })		
				
		.when('/',
            {
                controller: 'CustomersController',
                templateUrl: 'app/partials/home.html'
            })		
			
			 .when('/blogsingle/:newID',
            {
                controller: 'SingleNewController',
                templateUrl: 'app/partials/blogsingle.html'
            })
			
        //Define a route that has a route parameter in it (:customerID)
       
        //Define a route that has a route parameter in it (:customerID)
       

	   
        
});




