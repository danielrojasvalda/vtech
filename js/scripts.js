	function functionHeader() {
		var x = document.getElementById("topnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		  } else {
			x.className = "topnav";
		  }
	}

    $(document).ready(function() {

  // Get click event, assign button to var, and get values from that var
  $('#myDIV button').on('click', function() {
    var thisBtn = $(this);
    thisBtn.addClass('active').siblings().removeClass('active');
//    var btnText = thisBtn.text();
    var btnValue = thisBtn.val();
//    console.log(btnText + ' - ' + btnValue);
  	document.getElementById("amount").value = btnValue;

  });
  
});


			
	$(document).ready(function(){
	
		$('#frecuency').change(function(){
			selected_value = $("input[name='frecuency_options']:checked").val();
		});
	
	});




	function myFunction2() {
	  document.getElementById("formGif").submit();
	  var amount = document.getElementById('amount').value;
	  var frecuency = $('#frecuency input:radio:checked').val()


//var frecuency = document.getElementById('frecuency').value;
	console.log('SUBMIT');
	console.log('?amount=' +amount+ '&frecuency=' + frecuency);
	}
