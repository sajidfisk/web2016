app.controller('myCtrl', function($scope, $location, $interval, hexafy) {
    $scope.Math = window.Math;
    $scope.firstName= "Jane";
    $scope.lastName= "Doe";
    $scope.myColor = "lightyellow";
    $scope.established = 1866;
    $scope.year = 2016;
    $scope.person = {firstName:'Jazmyn', lastName:'Scott'};
    $scope.students = [
    	{firstName: "denise", lastName:'Buliga', major: 'Business Administration/CS Minor'},
    	{firstName: "ERIK", lastName:'Shaw', major: 'Business Administration/CS Minor'},
    	{firstName: "maya", lastName:'Walters', major: 'Business Administration'},
    	{firstName: "JADA", lastName:'Prendergast', major: 'Computer Science'},
    	{firstName: "Jazmyn", lastName:'Scott', major: 'Psychology'},
    ];
    $scope.pv=1000;
    $scope.rate=4.25;
    $scope.n = 5;
    $scope.inventory = [
        {id: 1234, quantity: 15, price: 10},
        {id: 1768, quantity: 15, price: 20},
        {id: 2489, quantity: 15, price: 20.95},
        {id: 3243, quantity: 25, price: 30.42},
        {id: 3884, quantity: 50, price: 10.99},
        {id: 4777, quantity: 25, price: 43.95},
        {id: 4886, quantity: 52, price: 54.95},
        {id: 5873, quantity: 45, price: 12.99},
        {id: 8232, quantity: 35, price: 33.95},
    ];

    $scope.myAddress="sajid.fisk@gmail.com";
    $scope.fiskEmail = "shussain@fisk.edu";
    $scope.myUrl = $location.absUrl();

    // display quotes 
    $scope.quotes = [
        "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that. Martin Luther King, Jr.", 
        "Just Do It. Nike", 
        "We become what we think about. Earl Nightingale", 
        "Life is 10% what happens to me and 90% of how I react to it. Charles Swindoll",
        "Every child is an artist. The problem is how to remain an artist once he grows up. Pablo Picasso",
        "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. Aristotle",
        "Everything has beauty, but not everyone can see. Confucius",
        "When I let go of what I am, I become what I might be. Lao Tzu",
        "Life is not measured by the number of breaths we take, but by the moments that take our breath away. Maya Angelou",
        "Education must not simply teach work - it must teach Life. W.E.B. Du Bois",
    ];
    
    $scope.quoteNum = 0;
    $scope.quote = $scope.quotes[0];
    $interval(function(){
        $scope.quote = $scope.quotes[$scope.quoteNum];
        $scope.quoteNum = ($scope.quoteNum + 1)%$scope.quotes.length
    }, 3000);
    
    // display current time
    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);

    // using custom service
    $scope.hex = hexafy.toHex(255);

    $scope.quoteObjects = [
        { quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
          author: "Martin Luther King, Jr.", 
          image: "mlk.jpg"
        },
        {
            quote: "Just Do It.",
            author: "Nike",
            image: "nike.jpg" 
        },
        {
            quote: "We become what we think about.",
            author: "Earl Nightingale",
            image: "earl-nightingale.jpg"
        }, 
        {
            quote: "Life is 10% what happens to me and 90% of how I react to it.",
            author: "Charles Swindoll",
            image: "chuck-swindoll.jpg"
        },
        {
            quote: "Every child is an artist. The problem is how to remain an artist once he grows up.",
            author: "Pablo Picasso", 
            image: "pablo-picasso.jpg"   
        },
        {
            quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
            author: "Aristotle",
            image: "aristotle.jpg"
        },
        {
            quote: "Everything has beauty, but not everyone can see.",
            author: "Confucius",
            image: "confucius.jpg"
        },
        {
            quote: "When I let go of what I am, I become what I might be.",
            author: "Lao Tzu",
            image: "lao-tzu.jpg"
        },
        {
            quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
            author: "Maya Angelou",
            image: "maya-angelou.jpg"
        },
        {
            quote: "Education must not simply teach work - it must teach Life.",
            author: " W.E.B. Du Bois",
            image: "dubois.jpg"

        }
    ];    
});

