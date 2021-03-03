/**
 * Virgina Tech Test
 * Freddy Rojas
 * 02/08/2021
 * 
 * Funtional Scripts for index.html
 */

/*--FUNCTION HEADER--*/
function functionHeader() {
	var x = document.getElementById("topnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

/*-- FUNCTION AMOUNT GROUP--*/
$(document).ready(function() {
	$('#amountGroup button').on('click', function() {
    	var thisBtn = $(this);
    	thisBtn.addClass('active').siblings().removeClass('active');
    	var btnValue = thisBtn.val();
  		document.getElementById("amount").value = btnValue;
		});
  	});

/*-- FUNCTION AMOUNT --*/
function maxLengthCheck(object) {
	if (parseInt(object.value) > parseInt(object.max)) {
		alert("The minimum amount is $0.01\nThe maximum amount is $10000\nPlease check the input value: $"+object.value);
	}
}

/*-- FUNCTION FRECUENCY--*/
$(document).ready(function() {
	$('#frecuency').change(function(){
		selected_value = $("input[name='frecuency_options']:checked").val();
	});
});

/*-- FUNCTION SUBMIT--*/
function functionSubmit() {
	document.getElementById("formGif").submit();
	var amount = document.getElementById('amount').value;
	var frecuency = $('#frecuency input:radio:checked').val()
	console.log('SUBMIT');
	console.log('?amount=' +amount+ '&frecuency=' + frecuency);
}
