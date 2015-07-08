var emailSend;
$(document).ready(function() {
	function getFields(){
		var message = $("#message").val();
		var email = $("#email").val();
		var name = $("#name").val();
		data = {message: message, email: email, n: name}
		return data;
	}

	$(".send").attr("disabled",true)
	$(document).on("keyup", "#email, #message, #name", function() {
		data = getFields();
		if(typeof data.n != 'undefined' && typeof data.email != 'undefined' && typeof data.message != 'undefined')
		{
			$(".send").attr("disabled",false)

		}
	})
	$(".send").click(function(){
		data = getFields();
		emailSend = $.ajax({
				url: 'ajax.php',
				method: 'POST',
				data: {n:data.n, message: data.message, email:data.email},
				dataType: 'json',
				error: function(error) {
					console.log(error);
				}
			});
			
			emailSend.success( function(data) {
				// Here is where we use the result from the URL page and
				// further process it or integrate it into your website.
				// Given what this function is supposed to do, this data will tell you
				// Whether the name/school combination already exists in the database
				// And if you should disable the "ENTER" button

			});
			if (typeof data != 'undefined'){
					$('#emailModal').modal('toggle');
					$("#resultModal").modal("toggle");
					$("#result").html("Thank you for contacting Fulcrum. ")
				}
				else {
					$("#result").html("An unknown error has Occurred");
				}
	})
})