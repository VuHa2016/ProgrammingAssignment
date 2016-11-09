'use strict';

describe('Given we are using a todo application', function () {
    var scope = {};
    beforeEach(function () {
        module('calculator');
        inject(function ($controller) {
            $controller('calculatorController', { $scope: scope });
        });
    });
   
	
});