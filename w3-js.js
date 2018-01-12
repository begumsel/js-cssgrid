// Scope
function scopes1a(){
	var carName = "Volvo";
}

function scopes1b(){
	document.getElementById('demo23').innerHTML =
	"var carName = 'Volvo'" + "<br />" +
	"The type of carName is " + typeof carName;
	// document.getElementById('demo23').innerHTML.style.display="block";
}

function scopes1(){
	document.getElementById('demo22').innerHTML = 
	"In JavaScript there are two types of scope: <br /> <b>Local scope</b> <br /> <b>Global scope</b>";
}

// OBJECTS
// ***************** //
function objects4(){
	document.getElementById('demo21').innerHTML = 
	"var x = new String(); Declares x as a String object" + 
	"<br /> " + 
	"var y = new Number(); Declares y as a Number object" +
	"<br /> " + 
	"var z = new Boolean(); Declares z as a Boolean object";
}

function objectMethod(){
	var person = {
		firstName: "Jane",
		lastName: "Doe",
		age: 25,
		eyeColor: "blue",
		fullName: function fullName(){
			return this.firstName + " " + this.lastName;
		}
	}
document.getElementById("demo20").innerHTML = person.fullName();		
};


function objects3(){
	var person = {firstName: "Jane", lastName:"Doe", age:25, eyeColor:"blue"}
	document.getElementById('demo19').innerHTML =
	person["firstName"] + " is " + person["age"] + " years old.";
}

function objects2(){
	var car = {type:"Fiat", model:"500", color:"white"};
	document.getElementById('demo18').innerHTML = car.model;
}



// functions
function toCelcius(f){
	return (5/9) * (f-32);
}

function showCelcius(){
	document.getElementById('demo17').innerHTML = toCelcius;	
}


// functions as variables
//------>fonk. içinde fonk. çağırma???->> function functAsVar(){
// document.getElementById("demo18").innerHTML =
// "The temperature is " + toCelsius(77) + " Celsius";
// };


// complex data
function complexData(){
	document.getElementById('demo16').innerHTML = 
	typeof {name: 'John', age:34} +"<br>" +
	typeof [1, 2, 3, 4] +"<br>" +
	typeof null + "<br>" +
	typeof function myFunc(){};
}

// primitive data
function primitiveData(){
	document.getElementById("demo15").innerHTML = 
	typeof "john" + "<br>" + 
	typeof 3.14 + "<br>" +
	typeof true + "<br>" +
	typeof false + "<br>" +
	typeof x;
}

// null&undefined
function nullAndUndefined(){
	document.getElementById('demo14').innerHTML = 
	typeof undefined + "<br>" +
	typeof null + "<br /><br />" +
	(null === undefined) + "<br />" +
	(null == undefined);
}

//emptying the value of an object
function undefinedValue(){
	var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    person = undefined;
    document.getElementById('demo13').innerHTML = typeof person;
}

function nullValue(){
	var person ={firstName:"John", lastName:"Doe", age:25, eyeColor:"blue"};
	person = null;
	document.getElementById('demo12').innerHTML = typeof person;
} //You can consider it a bug in JavaScript that typeof null is an object. It should be null.

//empty values
function values(){
	var car = "";
	document.getElementById('demo11').innerHTML = 
	"the value is: " + car + "<br>" + 	"the type is: " + typeof car;
}

//typeof
function typeOfExp(){
	document.getElementById('demo10').innerHTML = 
	typeof "" + "<br>" +
	typeof 99 + " " + typeof true;	
}

//objects
function objects(){
	var person = {
		firstName : "jane", //object içinde tanımladığın property'den sonra : koy!
		lastName : "doe", //->virgül!
		age : 50,
		eyeColor : "blue" //->virgül yok!
	};
document.getElementById('demo9').innerHTML = person.firstName + " has " + person.eyeColor + " eyes.";		
};

// arrays
function array(){
	var cars =["saab", "volvo", "bmw"];
	document.getElementById('demo8').innerHTML = cars[1];
}

//booleans
function booleans(){
	var x = 5;
	var y = 5;
	var z = 6;
	document.getElementById('demo7').innerHTML = ( x==y ) + "<br>" + ( x==z );
}

// exponential notation
function exponNot(){
	var y = 123e5;
    var z = 123e-5;
    document.getElementById('demo6').innerHTML= y + "<br>" + z; 
}

// js evaluates expression from left to right
function leftRight(){
var x = 16 + 4 + "Volvo";
var x = "Volvo" + 16 + 4;
document.getElementBYId('demo4');
}

// data types
var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object

// concatenation:
function concantenate(){
x = "5" + 2 + 3;
document.getElementById("demo3").innerHTML = "The result of adding '5' + 2 + 3: " + x;
}

// undefined variable

function undefinedVar(){
var carName = "Volvo"
var carName;
// var carName = "vw";
document.getElementById("demo2").innerHTML = 
"A variable re-declared without a value will have the first value declared: " + carName;
}

//variables

function total(){
var price1 = 5;
var price2 = 6;
var total = price1 << price2;
document.getElementById("demo1").innerHTML = "The total is: " + total;
}

// *****************************************************

// The JavaScript syntax defines two types of values: Fixed values and variable values.

// Fixed values are called literals. Variable values are called variables.

// *****************************************************

// The most important rules for writing fixed values are:

// Numbers are written with or without decimals:


