$(".table.available").on("click",function openRez() {

	let tableNum = $(this).text();
	$("#popWindow").css('display', 'flex');
	$("#tableNumber").text('Table Number:  ' + tableNum);
	$(this).removeClass('available').addClass('selected');

	$("#cancel").on("click", function() {    
		$("#popWindow").css('display', 'none');
		$('.selected').addClass('available');
	}); 

});

$("#button").on("click", function makeRez() {
	
	$("#popWindow").css('display', 'none');
	$('.selected').addClass('reserved');
	$('.reserved').removeClass('selected');

	 //instead of creating individual appends, create a class for every table with
	 //spans of name/phone/party and then call that class on mouseover. 

	 $("#uName").append('.reserved');
	 $("#phone").append('.reserved');
	 $("#noParty").append('.reserved');

	 

	 let rezName = $("#uName").val();
	 let rezPhone= $("#phone").val();
	 let rezNoParty= $("#noParty").val();


	 $(".reserved").on('mouseenter', function () {			
	 	$(this).text(rezName);
	 	

	 	$(".reserved").on('mouseleave', function() {
	 		$(this).remove(rezName);
	 	});

	 	clearRezForm();

	 });
	});

const clearRezForm = function() {
	$("#uName").val("");
	$("#phone").val("");
	$("#noParty").val("");
}


