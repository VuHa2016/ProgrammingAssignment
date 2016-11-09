angular.module("calculator", [])
    .controller("calculatorController",['$scope',function calculatorController($scope) {
        //store number arr;
	    var arr = [];
        // store operate arr
	    var oper = [];
	    var length = 0;
	    $scope.displayValue = '';
		$scope.result = 0;
		
		$scope.onClickClear = function() {
		    arr = [];
		    oper = [];
			$scope.displayValue = '';
			$scope.result = 0;
			length = 0;
		};
        // when click operation
		$scope.operationButtonClicked = function (clickedOperation) {
		    var operate = $scope.displayValue;
		    operate = operate.substring(operate.length - 1, operate.length);
		    
		    if (operate == '+' || operate == '-' || operate == '*' || operate == '/' || operate == '^' || operate == '%' || operate == '')
		    {		        
		    }
		    else
		    {
		        if (operate == ')') {
		            if (clickedOperation == 's' || clickedOperation == 'i' || clickedOperation == 'o' ||
                        clickedOperation == 'a' || clickedOperation == 'N' || clickedOperation == 'C' || 
                        clickedOperation == 'T' || clickedOperation == '!' || clickedOperation == 'z' ||
                        clickedOperation == 'g' || clickedOperation == 'e')
		            { }
		            else
		            {
		                oper.push(clickedOperation);
		                $scope.displayValue += clickedOperation;
		                length = $scope.displayValue.length;
		            }
		        }
		        else if (operate == '!')
		        {
		            if (clickedOperation == 's' || clickedOperation == 'i' || clickedOperation == 'o' ||
                        clickedOperation == 'a' || clickedOperation == 'N' || clickedOperation == 'C' ||
                        clickedOperation == 'T' || clickedOperation == '!' || clickedOperation == 'z' ||
                        clickedOperation == 'g' || clickedOperation == 'e')
		            { }
		            else
		            {
		                oper.push(clickedOperation);
		                $scope.displayValue += clickedOperation;
		                length = $scope.displayValue.length;
		            }
		        }
		        else {
		            operate = $scope.displayValue;
		            operate = operate.substring(length, operate.length);

		            //execute square root
		            if (clickedOperation == 's') {
		                arr.push(operate);
		                oper.push(clickedOperation);
		                $scope.displayValue = $scope.displayValue.substring(0, length) + "sqrt(" + operate + ")";
		            }
		            //execute n!
		            else if (clickedOperation == '!') {
		                arr.push(operate);
		                oper.push(clickedOperation);
		                $scope.displayValue += clickedOperation;
		            }
		            //execute log2(x)
		            else if (clickedOperation == 'z') {
		                arr.push(operate);
		                oper.push(clickedOperation);
		                $scope.displayValue = $scope.displayValue.substring(0, length) + "log2(" + operate + ")";
		            }
		            //execute log10(x)
		            else if (clickedOperation == 'g') {
		                arr.push(operate);
		                oper.push(clickedOperation);
		                $scope.displayValue = $scope.displayValue.substring(0, length) + "log10(" + operate + ")";
		            }
		            //execute ln(x)
		            else if (clickedOperation == 'e') {
		                arr.push(operate);
		                oper.push(clickedOperation);
		                $scope.displayValue = $scope.displayValue.substring(0, length) + "ln(" + operate + ")";
		            }
		            //execute sin
		            else if (clickedOperation == 'i') {
		                arr.push(operate);
		                oper.push(clickedOperation);
		                $scope.displayValue = $scope.displayValue.substring(0, length) + "sin(" + operate + ")";
		            }
		            //execute cos
		            else if (clickedOperation == 'o') {
		                arr.push(operate);
		                oper.push(clickedOperation);
		                $scope.displayValue = $scope.displayValue.substring(0, length) + "cos(" + operate + ")";
		            }
		            //execute tan
		            else if (clickedOperation == 'a') {
		                arr.push(operate);
		                oper.push(clickedOperation);
		                $scope.displayValue = $scope.displayValue.substring(0, length) + "tan(" + operate + ")";
		            }
		            //execute asin
		            else if (clickedOperation == 'N') {
		                arr.push(operate);
		                oper.push(clickedOperation);
		                $scope.displayValue = $scope.displayValue.substring(0, length) + "asin(" + operate + ")";
		            }
		            //execute acos
		            else if (clickedOperation == 'C') {
		                arr.push(operate);
		                oper.push(clickedOperation);
		                $scope.displayValue = $scope.displayValue.substring(0, length) + "acos(" + operate + ")";
		            }
		            //execute atan
		            else if (clickedOperation == 'T') {
		                arr.push(operate);
		                oper.push(clickedOperation);
		                $scope.displayValue = $scope.displayValue.substring(0, length) + "atan(" + operate + ")";
		            }
		            else {
		                arr.push(operate);
		                oper.push(clickedOperation);
		                $scope.displayValue += clickedOperation;
		            }
		            length = $scope.displayValue.length;
		        }
		    }		    
		};
	    // when click number
		$scope.numberButtonClicked = function (clickedNumber) {
		    var operate = $scope.displayValue;
		    operate = operate.substring(operate.length - 1, operate.length);

		    if (operate == '.' && clickedNumber=='.') {
                
		    } else {
		        $scope.displayValue += clickedNumber;
		    }
		};
	    // when click display
		$scope.enterClicked = function () {
		    var operate = $scope.displayValue;
            //get 1 character at last for check
		    operate = operate.substring(operate.length - 1, operate.length);
            // Processing dont add number to array when step before enter sin, cos,tan,asin,acos,atan,sqrt 
		    if (operate == ')') {
		    } else {
		        operate = $scope.displayValue;
		        operate = operate.substring(length, operate.length);
		        arr.push(operate);
		    }	        
            //Calculator sqrt, sin,cos,tan,asin,acos, atan,
		    var i = 0;
            //square root
		    while (i < oper.length) {
		        var index = oper.indexOf('s');
		        if (index != -1) {
		            $scope.onClickCalculate1(arr[index], oper[index]);
                    //remove number at index position in arr
		            arr.splice(index, 1);
		            //add number at index position in arr
		            arr.splice(index, 0, $scope.result);
		            //remove operation at index position in oper
		            oper.splice(index, 1);
		        } else
		            break;
		    };
		    //sin
		    while (i < oper.length) {
		        var index = oper.indexOf('i');
		        if (index != -1) {
		            $scope.onClickCalculate1(arr[index], oper[index]);
		            //remove number at index position in arr
		            arr.splice(index, 1);
		            //add number at index position in arr
		            arr.splice(index, 0, $scope.result);
		            //remove operation at index position in oper
		            oper.splice(index, 1);
		        } else
		            break;
		    };
            //cos
		    while (i < oper.length) {
		        var index = oper.indexOf('o');
		        if (index != -1) {
		            $scope.onClickCalculate1(arr[index], oper[index]);
		            //remove number at index position in arr
		            arr.splice(index, 1);
		            //add number at index position in arr
		            arr.splice(index, 0, $scope.result);
		            //remove operation at index position in oper
		            oper.splice(index, 1);
		        } else
		            break;
		    };
            //tan
		    while (i < oper.length) {
		        var index = oper.indexOf('a');
		        if (index != -1) {
		            $scope.onClickCalculate1(arr[index], oper[index]);
		            //remove number at index position in arr
		            arr.splice(index, 1);
		            //add number at index position in arr
		            arr.splice(index, 0, $scope.result);
		            //remove operation at index position in oper
		            oper.splice(index, 1);
		        } else
		            break;
		    };
            //asin
		    while (i < oper.length) {
		        var index = oper.indexOf('N');
		        if (index != -1) {
		            $scope.onClickCalculate1(arr[index], oper[index]);
		            //remove number at index position in arr
		            arr.splice(index, 1);
		            //add number at index position in arr
		            arr.splice(index, 0, $scope.result);
		            //remove operation at index position in oper
		            oper.splice(index, 1);
		        } else
		            break;
		    };
            //acos
		    while (i < oper.length) {
		        var index = oper.indexOf('C');
		        if (index != -1) {
		            $scope.onClickCalculate1(arr[index], oper[index]);
		            //remove number at index position in arr
		            arr.splice(index, 1);
		            //add number at index position in arr
		            arr.splice(index, 0, $scope.result);
		            //remove operation at index position in oper
		            oper.splice(index, 1);
		        } else
		            break;
		    };
            //atan
		    while (i < oper.length) {
		        var index = oper.indexOf('T');
		        if (index != -1) {
		            $scope.onClickCalculate1(arr[index], oper[index]);
		            //remove number at index position in arr
		            arr.splice(index, 1);
		            //add number at index position in arr
		            arr.splice(index, 0, $scope.result);
		            //remove operation at index position in oper
		            oper.splice(index, 1);
		        } else
		            break;
		    };
		    //n!
		    while (i < oper.length) {
		        var index = oper.indexOf('!');
		        if (index != -1) {
		            $scope.onClickCalculate1(arr[index], oper[index]);
		            //remove number at index position in arr
		            arr.splice(index, 1);
		            //add number at index position in arr
		            arr.splice(index, 0, $scope.result);
		            //remove operation at index position in oper
		            oper.splice(index, 1);
		        } else
		            break;
		    };
		    //log2
		    while (i < oper.length) {
		        var index = oper.indexOf('z');
		        if (index != -1) {
		            $scope.onClickCalculate1(arr[index], oper[index]);
		            //remove number at index position in arr
		            arr.splice(index, 1);
		            //add number at index position in arr
		            arr.splice(index, 0, $scope.result);
		            //remove operation at index position in oper
		            oper.splice(index, 1);
		        } else
		            break;
		    };
		    //log10
		    while (i < oper.length) {
		        var index = oper.indexOf('g');
		        if (index != -1) {
		            $scope.onClickCalculate1(arr[index], oper[index]);
		            //remove number at index position in arr
		            arr.splice(index, 1);
		            //add number at index position in arr
		            arr.splice(index, 0, $scope.result);
		            //remove operation at index position in oper
		            oper.splice(index, 1);
		        } else
		            break;
		    };
		    //ln
		    while (i < oper.length) {
		        var index = oper.indexOf('e');
		        if (index != -1) {
		            $scope.onClickCalculate1(arr[index], oper[index]);
		            //remove number at index position in arr
		            arr.splice(index, 1);
		            //add number at index position in arr
		            arr.splice(index, 0, $scope.result);
		            //remove operation at index position in oper
		            oper.splice(index, 1);
		        } else
		            break;
		    };
            //mod
		    while (i < oper.length) {
		        var index = oper.indexOf('%');
		        if (index != -1) {

		            $scope.onClickCalculate(arr[index], arr[index + 1], oper[index]);
		            //remove 2 numbers at index position in arr
		            arr.splice(index, 1);
		            arr.splice(index, 1);
		            //add number at index position in arr
		            arr.splice(index, 0, $scope.result);
		            //remove operation at index position in oper
		            oper.splice(index, 1);
		        } else
		            break;
		    };
            //square
		    while (i < oper.length) {
		        var index = oper.indexOf('^');
		        if (index != -1) {
		            $scope.onClickCalculate(arr[index], arr[index + 1], oper[index]);
		            //remove 2 numbers at index position in arr
		            arr.splice(index, 1);
		            arr.splice(index, 1);
		            //add number at index position in arr
		            arr.splice(index, 0, $scope.result);
		            //remove operation at index position in oper
		            oper.splice(index, 1);
		        } else
		            break;
		    };
            //Processing * and / operation first after that +,- operation
		    while (i < oper.length) {
		        var index = oper.indexOf('*');
		        var index1 = oper.indexOf('/');
		        if (index != -1 && index1 != -1)
		        {
		            index = index > index1 ? index1 : index;
		        }
		        else if (index == -1 && index1 != -1)
		        {
		            index = index1;
		        }
		        if (index != -1) {		           		            
		            $scope.onClickCalculate(arr[index], arr[index + 1], oper[index]);
		            //remove 2 numbers at index position in arr
		            arr.splice(index, 1);
		            arr.splice(index, 1);
		            //add number at index position in arr
		            arr.splice(index, 0, $scope.result);
		            //remove operation at index position in oper
		            oper.splice(index, 1);
		        } else
		            break;
		    };		   
		    // processing from left to right for +,-
		    while (i < oper.length) {		       		           
		            $scope.onClickCalculate(arr[0], arr[1], oper[0]);
		            //remove 2 numbers at 0 position in arr
		            arr.splice(0, 1);
		            arr.splice(0, 1);
		            //add number at 0 position in arr
		            arr.splice(0, 0, $scope.result);
		            //remove operation at 0 position in oper
		            oper.splice(0, 1);	     
		    };
		    arr = [];
		    oper = [];
		   
		    $scope.displayValue = $scope.result + "";
		    length = 0;
		};

        // Function for calculator
		$scope.calculator = {
		    divide: function (amount1, amount2) {
		        return amount1 / amount2;
		    },
		    multiply: function (amount1, amount2) {
		        return amount1 * amount2;
		    },
		    plus: function (amount1, amount2) {
		        return amount1 + amount2;
		    },
		    minus: function (amount1, amount2) {
		        return amount1 - amount2;
		    },
		    square: function (amount1, amount2) {
		        return Math.pow(amount1, amount2);
		    },
		    mod: function (amount1, amount2) {
		        return amount1 % amount2;
		    },
		    sqrt: function (amount) {
		        return Math.sqrt(amount);
		    },
		    sin: function (amount) {
		        return Math.sin(amount);
		    },
		    cos: function (amount) {
		        return Math.cos(amount);
		    },
		    tan: function (amount) {
		        return Math.tan(amount);
		    },
		    asin: function (amount) {
		        return Math.asin(amount);
		    },
		    acos: function (amount) {
		        return Math.acos(amount);
		    },
		    atan: function (amount) {
		        return Math.atan(amount);
		    },
		    factorial: function (amount) {
		        var rval = 1;
		        for (var i = 2; i <= amount; i++)
		            rval = rval * i;
		        return rval;
		    },
		    log2: function (amount) {
		        return Math.log(amount) * Math.LOG2E;	       
		    },
		    log10: function (amount) {
		        return Math.log(amount) * Math.LOG10E;
		    },
		    ln: function (amount) {
		        return Math.log(amount);
		    }
		};

		$scope.onClickCalculate = function (number1, number2, operation) {
            // Plus
		    if (operation == "+") {
		        $scope.result = $scope.calculator.plus(parseFloat(number1), parseFloat(number2));
		    }
            //Minus
			else if (operation == "-"){
			    $scope.result = $scope.calculator.minus(parseFloat(number1), parseFloat(number2));
			}
            //Multiply
			else if (operation == "*") {
			    $scope.result = $scope.calculator.multiply(parseFloat(number1), parseFloat(number2));
			}
            //Divide
			else if (operation == "/") {
			    $scope.result = $scope.calculator.divide(parseFloat(number1), parseFloat(number2));
			}
            //Square
			else if (operation == "^") {
			    $scope.result = $scope.calculator.square(parseFloat(number1), parseInt(number2));
			}
            //Mod
			else if (operation == "%") {
			    $scope.result = $scope.calculator.mod(parseInt(number1), parseInt(number2));
			}
		};

		$scope.onClickCalculate1 = function (number, operation) {
            //Square root
		    if (operation == "s") {
		        $scope.result = $scope.calculator.sqrt(parseFloat(number));
		    }
            //Sin
		    else if (operation == "i") {
		        $scope.result = $scope.calculator.sin(parseFloat(number));
		    }
            //Cos
		    else if (operation == "o") {
		        $scope.result = $scope.calculator.cos(parseFloat(number));
		    }
            //Tan
		    else if (operation == "a") {
		        $scope.result = $scope.calculator.tan(parseFloat(number));
		    }
            //Asin
		    else if (operation == "N") {
		        $scope.result = $scope.calculator.asin(parseFloat(number));
		    }
            //Acos
		    else if (operation == "C") {
		        $scope.result = $scope.calculator.acos(parseFloat(number));
		    }
            //Atan
		    else if (operation == "T") {
		        $scope.result = $scope.calculator.atan(parseFloat(number));
		    }
		    //n! Factorial
		    else if (operation == "!") {
		        $scope.result = $scope.calculator.factorial(parseInt(number));
		    }
		    //log2
		    else if (operation == "z") {
		        $scope.result = $scope.calculator.log2(parseFloat(number));
		    }
		    //log10
		    else if (operation == "g") {
		        $scope.result = $scope.calculator.log10(parseFloat(number));
		    }
		    //ln
		    else if (operation == "e") {
		        $scope.result = $scope.calculator.ln(parseFloat(number));
		    }
		};
	}
]);