 	// this file contains javascript and jQuery code for four exercises:

 	/** NUMBERS CODE **/
	var jq_numbers = [];
	var jq_least;
	var jq_greatest;
	var jq_mean;
	var jq_sum;
	var jq_product;


	function saveNumberJQ() {
    	var num = $('#userInputJQ').val();
		
		//validate user input - if a valid number, add to list
		// otherwise output results 	
		if (num == "" || isNaN(num)) {
			computeResultsJQ();
			outputResultsJQ();
		}
		else  { 
			jq_numbers.push(num);
		}; 

		// remove the submitted number from the form input
		$("#userInputJQ").val("");

	};

	function computeResultsJQ() {
		var thisNum;
		//initialize each to first entry
		if (jq_numbers.length >0) {
			jq_least = Number(jq_numbers[0]);
			jq_greatest = Number(jq_numbers[0]);
			jq_mean = Number(jq_numbers[0]);
			jq_sum = Number(jq_numbers[0]);
			jq_product = Number(jq_numbers[0]);
		}

		for (var i=1; i<jq_numbers.length; i++) {
			thisNum = Number(jq_numbers[i]);
			if (jq_least > thisNum) { jq_least = thisNum;} 
			if (jq_greatest < thisNum) { jq_greatest = thisNum;}
			jq_sum += thisNum;
			jq_product = jq_product * thisNum;
		}
		jq_mean = jq_sum / jq_numbers.length;
	}	

	function outputResultsJQ() {

		// list values that were input
		$("p#valuesInputJQ").text("Numbers Input:");
		for (var i=0; i<jq_numbers.length; i++) {
			$("p#valuesInputJQ").append (" " + jq_numbers[i]);
		}
	 	
	 	// output least
		$("#leastResultsJQ").text("Least: " + jq_least);
		
		// output greatest
		$("#greatestResultsJQ").text("Greatest: " + jq_greatest);

		// output mean
		$("#meanResultsJQ").text("Mean: " + jq_mean);

		// output sum
		$("#sumResultsJQ").text("Sum: " + jq_sum);

		// output product
		$("#productResultsJQ").text("Product: " + jq_product);

		// clear array for next time around
		jq_numbers = [];
	}

	/** FACTORIAL CODE **/

	// output factorial of provided input
	function factorialJQ () {
		var num = $("#factorialInputJQ").val();
		var factorial = 1;

		if (isNaN(num) || num <=0) {
			$("#factorialOutputJQ").text("Not a valid positive number, try again.");
		}
		else {
			for (var i=Number(num); i>0; i--) {
				factorial = factorial * i;
			}
			$("#factorialOutputJQ").text(num + "! = " + factorial);
		};
		// clear input
		$("#factorialInputJQ").val("");
	}

	/**  FIZZ BUZZ CODE **/

	// if user input is valid (positive int from 1 to 100)
	function validInput(num) {
		if (isNaN(num) || (num % 1 != 0) || (num <=0)  || (num > 100)) {
			return false;		// Not a Number, or not an int from 1 to 100
		};
		return true; 	
	};
		
	
	// find and output FizzBuzz for numbers from 1 to 100
	function fizzBuzzJQ (){

		// check user input
		var fizz = $("#fizzInputJQ").val();
		var buzz = $("#buzzInputJQ").val();
		var outputString = "";
		var fbString = "";

		if (validInput(fizz)) {
			if (validInput(buzz)) {
				for (var i=1; i<=100; i++) {
					fbString = i;
					if (i % fizz == 0) {
						fbString = "Fizz";
						if (i % buzz == 0) {
							fbString = "Fizz Buzz"
						};
					}
					else if (i % buzz == 0) {
						fbString = "Buzz";
					}
				outputString = outputString + " <br> " + fbString;
				}
				$("#fizzBuzzOutputJQ").append(outputString);
			}
			else 
				$("#fizzBuzzOutputJQ").append("Invalid number for Buzz - must be integer from 1 to 100. Try Again.");
		}
		else
		    $("#fizzBuzzOutputJQ").append("Invalid number for Fizz - must be integer from 1 to 100. Try Again.");
		// clear input fields
		var fizz = $("#fizzInputJQ").val("");
		var buzz = $("#buzzInputJQ").val("");

	}

	/* PALINDROME CODE */

	function checkPalindromeJQ(str) {
	  	var len = Math.floor(str.length / 2);
	  	for (var i = 0; i < len; i++) {
	       if (str[i] !== str[str.length - i - 1])
	      return false;
	  	};
	 	return true;
	}

	function palindromeJQ() {
		var pString = $("#palindromeJQ").val().toLowerCase();
		var outString = "";

		checkPalindromeJQ(pString) ? outString="Yes, "+pString+" is a palindrome!" : outString="No, "+pString+" is not a palindrome.";
		$("#palindromeOutputJQ").append(outString);
		// clear input field
		$("#palindromeJQ").val("")
	}

$(document).ready(function(){

	/* listen for events */

	//get Numbers from user
	$('button#numbersJQ').click (function (event) {
		event.preventDefault();

		// remove any data from previous run
		$("#valuesInputJQ").empty();
		$("#leastResultsJQ").empty();
		$("#greatestResultsJQ").empty();
		$("#meanResultsJQ").empty();
		$("#sumResultsJQ").empty();
		$("#productResultsJQ").empty();
		saveNumberJQ();
	});

	$('button#factorialJQ').click (function (event) {
		event.preventDefault();
		// remove any data from previous run
		$("#factorialOutputJQ").empty();
		factorialJQ();
	});

	$('button#fizzBuzzJQ').click (function (event) {
		event.preventDefault();
		// remove any data from previous run
		$("#FizzBuzzOutputJQ").empty();
		fizzBuzzJQ();
	});

	$('button#palindromeJQ').click (function (event) {
		event.preventDefault();
		// remove any data from previous run
		$("#palindromeOutputJQ").empty();
		palindromeJQ();
	});



});

