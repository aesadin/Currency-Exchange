import { callExchangeRate } from './currencyexchange.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



async function getExchangeRate(currencyType, usdCurrency) {
  const response = await callExchangeRate();
  if(!response) {
    $(".error").html('<h3><em>There has been an error processing your request</em></h3>');
  } else {
    showExchangeRate(currencyType, response, usdCurrency);
  }
}


function showExchangeRate(currencyType, response, usdCurrency) {
  if(currencyType === "EUR" ) {
    $('.revealedRate').html(`Your selection's conversion rate is ${response.conversion_rates.EUR} and your new total is ${response.conversion_rates.EUR * usdCurrency}`);
  } else if(currencyType === "NZD") {
    $('.revealedRate').html(`Your selection's conversion rate is ${response.conversion_rates.NZD} and your new total is ${response.conversion_rates.NZD * usdCurrency}`);
  } else if(currencyType === "NOK") {
    $('.revealedRate').html(`Your selection's conversion rate is ${response.conversion_rates.NOK} and your new total is ${response.conversion_rates.NOK * usdCurrency}`);
  } else if(currencyType === "PLN") {
    $('.revealedRate').html(`Your selection's conversion rate is ${response.conversion_rates.PLN} and your new total is ${response.conversion_rates.PLN * usdCurrency}`);
  } else if(currencyType === "SAR") {
    $('.revealedRate').html(`Your selection's conversion rate is ${response.conversion_rates.SAR} and your new total is ${response.conversion_rates.SAR * usdCurrency}`);
  } else {
    $('.revealedRate').html('This conversion rate is not available');
  }
}



$(document).ready(function () {
  $('#inputForm').submit(function (event) {
    event.preventDefault();
    let usdCurrency = parseInt($(".exchange").val());
    let inputCurrency = $(".currency").val();
    let currencyType = inputCurrency.toUpperCase();
    getExchangeRate(currencyType, usdCurrency);

  });
});
