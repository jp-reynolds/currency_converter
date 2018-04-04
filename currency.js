$(document).ready(function() {

	var currency_converted_endpoint = "http://data.fixer.io/api/latest?access_key=765658e565d5659c56b60b764d14a351&format=1";

	$.get(currency_converted_endpoint, function(response) {
		//variable to access the 'rates' objects because this is where all the different conversion rates are at
		var api = response.rates;
		// var dollars = $("#dollars").val();
		//console.log(dollars);

		$('#EUR').click( function (event) {
			event.preventDefault();
			let dollars = $("#dollars").val();
		//I created a variable for each currencies specific conversion rate and labeled them the same in my html id's
			let eurConversionRate = api.EUR;
																		//when this toFixed(2) is added it makes the number into a string, not ideal...tried math.Round but couldn't get the precision to work
			$('#eur').append('<p>' + '$' + dollars + ' is equal to ' + '€' + parseFloat((eurConversionRate * dollars * (1/1.227447)).toFixed(3)) + ' EUR');
		});

		$('#GBP').click( function (event) {
			event.preventDefault();
			let dollars = $("#dollars").val();
			let gbpConversionRate = api.GBP;
			$('#gbp').append('<p>' + '$' + dollars + ' is equal to ' + '£' + (gbpConversionRate * dollars * (1/1.227447)).toFixed(3) + ' GBP');
		});

		$('#CNY').click( function (event) {
			event.preventDefault();
			let dollars = $("#dollars").val();
			let cnyConversionRate = api.CNY;
			$('#cny').append('<p>' + '$' + dollars + ' is equal to ' + '¥' + (cnyConversionRate * dollars * (1/1.227447)).toFixed(3) + ' CNY');
		});

		$('#MXN').click( function (event) {
			event.preventDefault();
			let dollars = $("#dollars").val();
			let mxnConversionRate = api.MXN;
			$('#mxn').append('<p>' + '$' + dollars + ' is equal to ' + '¥' + (mxnConversionRate * dollars * (1/1.227447)).toFixed(3) + ' MXN');
		});

		$('#JPY').click( function (event) {
			event.preventDefault();
			let dollars = $("#dollars").val();
			let jpyConversionRate = api.JPY;
			$('#jpy').append('<p>' + '$' + dollars + ' is equal to ' + '¥' + (jpyConversionRate * dollars * (1/1.227447)).toFixed(3) + ' JPY');
		});
	});


});

//USD: 1.227447
//EUR
//GBP
//CNY
//JPY




// api key 765658e565d5659c56b60b764d14a351
