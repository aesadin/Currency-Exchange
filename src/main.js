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
    $('.revealedRate').html(`Your selection's conversion rate is ${response.conversion_rates.EUR} and your new total is € ${(response.conversion_rates.EUR * usdCurrency).toFixed(2)}`);
  } else if(currencyType === "NZD") {
    $('.revealedRate').html(`Your selection's conversion rate is ${response.conversion_rates.NZD} and your new total is $ ${(response.conversion_rates.NZD * usdCurrency).toFixed(2)}`);
  } else if(currencyType === "JPY") {
    $('.revealedRate').html(`Your selection's conversion rate is ${response.conversion_rates.JPY} and your new total is ¥ ${(response.conversion_rates.JPY * usdCurrency).toFixed(2)}`);
  } else if(currencyType === "EGP") {
    $('.revealedRate').html(`Your selection's conversion rate is ${response.conversion_rates.EGP} and your new total is E£ ${(response.conversion_rates.EGP * usdCurrency).toFixed(2)}`);
  } else if(currencyType === "AUD") {
    $('.revealedRate').html(`Your selection's conversion rate is ${response.conversion_rates.AUD} and your new total is $ ${(response.conversion_rates.AUD * usdCurrency).toFixed(2)}`);
  } else {
    $('.revealedRate').html('This conversion rate is not available');
  }
}



$(document).ready(function () {
  $('#inputForm').submit(function (event) {
    event.preventDefault();
    let usdCurrency = parseInt($(".exchange").val());
    let inputCurrency = $(".currency").val();
    $(".exchange").val("");
    $(".currency").val("");
    let currencyType = inputCurrency.toUpperCase();
    getExchangeRate(currencyType, usdCurrency);

  });
});
