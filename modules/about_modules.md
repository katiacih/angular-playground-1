## Creating a Module
A module is created by using the `angular.module` method. 
The first parameter is the name of the module, and the second parameter is an array of dependencies (modules that this module depends on).
```javascript
<div ng-app="myApp">...</div>

<script>

var app = angular.module("myApp", []);

</script>
```

## Adding a Controller
use ng-controller directive to add a controller to a module.
```javascript
<div ng-app="myApp" ng-controller="myCtrl">
{{ firstName + " " + lastName }}
</div>

<script>

var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
});

</script>
```	

## Adding a Directive
use the `app.directive` method to add a directive to a module.
```javascript 
<div ng-app="myApp" w3-test-directive></div>

<script>
var app = angular.module("myApp", []);

app.directive("w3TestDirective", function() {
  return {
    template : "I was made in a directive constructor!"
  };
});
</script>
```

## Adding modules and controllers in separate files
```html
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="myCtrl">
{{ firstName + " " + lastName }}
</div>

<script src="myApp.js"></script>
<script src="myCtrl.js"></script>

</body>
</html>
```

myCtrl.js
```javascript
app.controller("myCtrl", function($scope) {
  $scope.firstName = "John";
  $scope.lastName= "Doe";
});
```

myApp.js
```javascript
var app = angular.module("myApp", []);
```

While it is common in HTML applications to place scripts at the end of the <body> element, 
it is recommended that you load the AngularJS library either in the <head> or at the start of the <body>
This is because calls to angular.module can only be compiled after the library has been loaded.

example completed
```html
<!DOCTYPE html>
<html>
<body>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>

<div ng-app="myApp" ng-controller="myCtrl">
{{ firstName + " " + lastName }}
</div>

<script>
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
});
</script>

</body>
</html>
```



[]: # # angular-playground-1
[]: # Repositorio de estudo de angular
[]: # 
[]: # 
[]: # ## Projeto 1 - W3Scholls trilha angular
[]: # Acessado em 02/02/2025 - https://www.w3schools.com/angular
[]: #