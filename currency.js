$(document).ready(function() {

	var currency_converted_endpoint = "http://data.fixer.io/api/latest?access_key=765658e565d5659c56b60b764d14a351&format=1";




	$.get(currency_converted_endpoint, (response) => {
		var api = response.rates;
		var dollars = $("#dollars").val();
		//console.log(dollars);

	$('#EUR').click( function (event) {
		let eurConversionRate = api.EUR;

		$('#eur').append('<p>' + dollars + ' dollars is equal to ' + (eurConversionRate * dollars * (1/1.227447)) + ' EUR');
		// console.log(eurConversionRate * dollars * (1/1.227447));
		});

	$('#GBP').click( function (event) {
		let gbpConversionRate = api.GBP;

		$('#gbp').append('<p>' + dollars + ' dollars is equal to ' + (gbpConversionRate * dollars * (1/1.227447)) + ' GBP');
		// console.log(gbpConversionRate * dollars * (1/1.227447));
	});

	$('#CNY').click( function (event) {
		let cnyConversionRate = api.CNY;

		$('#cny').append('<p>' + dollars + ' dollars is equal to ' + (cnyConversionRate * dollars * (1/1.227447)) + ' CNY');
		// console.log(cnyConversionRate * dollars * (1/1.227447));
	});

	$('#JPY').click( function (event) {
		let jpyConversionRate = api.JPY;

		$('#jpy').append('<p>' + dollars + ' dollars is equal to ' + (jpyConversionRate * dollars * (1/1.227447)) + ' JPY');
		// console.log(jpyConversionRate * dollars * (1/1.227447));
	});



	});


});

//USD: 1.227447
//EUR
//GBP
//CNY
//JPY




// api key 765658e565d5659c56b60b764d14a351
