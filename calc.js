$(document).ready(function() {
	var number = " ";
	var answer;
	var newNumber = " ";
	var operator = " ";
	var panel = $('#active_panel');
	panel.text("0");

	$('#numbers > a').not('#clear, #clear_all').on('click', function(){
		number += $(this).text();
		panel.text(number);
	});
	$('#operators > a').not('#equals').on('click', function(){
		operator = $(this).text();
		newNumber = number;
		number = " ";
		panel.text(operator);
	});
	$('#clear').on('click', function(){
		number = number.substring(0, number.length-1);
			panel.text(number);			
	});
	$('#clear_all').on('click', function(){
		number = " ";
		newNumber = " ";
		panel.text("0");
	});
	$('#equals').on('click', function(){
		newNumber = parseInt(newNumber);
		number = parseInt(number);
		switch(operator){
			case "+":
				answer = newNumber + number;
				break;
			case "-":
				answer = newNumber - number;
				break;
			case "*":
				answer = newNumber * number;
				break;
			case "/":
				answer = newNumber/number;
				break;
			default:
				answer = "error";			
		}

		answer.toString();
		panel.text(answer);
		number = answer;

	});

});