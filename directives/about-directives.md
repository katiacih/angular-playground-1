
## Directive ng- 

use ng-app directive to define an AngularJS application.
use ng-init directive to initialize application data.
use ng-model directive to bind input fields to application data.

```html
<div ng-app="" ng-init="firstName='John'">

<p>Name: <input type="text" ng-model="firstName"></p>
<p>You wrote: {{ firstName }}</p>

</div>
```

### Binding data

```
