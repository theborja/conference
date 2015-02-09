/*#######################################################################
  
  Dan Wahlin
  http://twitter.com/DanWahlin
  http://weblogs.asp.net/dwahlin
  http://pluralsight.com/training/Authors/Details/dan-wahlin

  Normally like the break AngularJS controllers into separate files.
  Kept them together here since they're small and it's easier to look through them.
  example. 

  #######################################################################*/


//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is ultimately bound to the customers view
app.controller('NewsController', function ($scope, newsService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.news = newsService.getNews();
    }

    $scope.insertNew = function () {
        var title = $scope.newNew.title;
        var description = $scope.newNew.description;
        var body = $scope.newNew.body;
        newsService.insertNew(title, description, body);
        $scope.newNew.title = '';
        $scope.newNew.description = '';
        $scope.newNew.body = '';
    };

    $scope.deleteNew = function (id) {
        newsService.deleteNew(id);
    };
});

angular.module('app', ['ui.bootstrap']);
function CarouselDemoCtrl($scope)

 {
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];
};




app.controller('SingleNewController', function ($scope, $routeParams, newsService) {
    $scope.new = {};
    //$scope.ordersTotal = 0.00;

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        //Grab newID off of the route        
        var newID = ($routeParams.newID) ? parseInt($routeParams.newID) : 0;
        if (newID > 0) {
            $scope.new = newsService.getNew(newID);
        }
    }

});

app.controller('GuestsController', function ($scope, guestsService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.guests = guestsService.getGuests();
    }

    $scope.insertGuest = function () {
        var name = $scope.newGuest.name;
        var role = $scope.newGuest.role;
        var imgUrl= $scope.newGuest.imgUrl;
        guestsService.insertGuest(name, role, imgUrl);
        $scope.newGuest.name = '';
        $scope.newGuest.role = '';
        $scope.newGuest.hover = '';
    };

	      
    
	
    $scope.deleteGuest = function (id) {
        guestsService.deleteGuest(id);
    };
});
//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is bound to the order view
 

//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is bound to the orders view


//This controller is a child controller that will inherit functionality from a parent
//It's used to track the orderby parameter and ordersTotal for a customer. Put it here rather than duplicating 
//setOrder and orderby across multiple controllers.

