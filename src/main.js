import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { callExchangeRate } from './src/currencyexchange.js';


async function getExchangeRate() {
  const allExchangeRates = await callExchangeRate();
  if(!allExchangeRates) {
    return 'There has been an error processing your request'
  } else {
    showExchangeRate();
  }
}

function showExchangeRate(currency) {
  let currency = $("#currency").val("");
  if(currency === "EUR" ) {
    $('.revealedRate').text(`Your converted currency is ${exchangeResponse.conversion_rates.EUR}`);
  } else if(currency === "NZD") {
    $('.revealedRate').text(`Your converted currency is ${exchangeResponse.conversion_rates.NZD}`);
  } else if(currency === "NOK") {
    $('.revealedRate').text(`Your converted currency is ${exchangeResponse.conversion_rates.NOK}`);
  } else if(currency === "PLN") {
    $('.revealedRate').text(`Your converted currency is ${exchangeResponse.conversion_rates.PLN}`);
  } else if(currency === "SAR") {
    $('.revealedRate').text(`Your converted currency is ${exchangeResponse.conversion_rates.SAR}`);
  } else {
    $('.revealedCurrency').text('This currency is not available');
  }
  
}



$(document).ready(function () {
  $('#exchangeForm').submit(function (event) {
    event.preventDefault();
    let usMoney = parseInt($("#exchange").val(""));
    let currencyType = $("#currency").val("").toUpperCase();
    callExchangeRate();
    showExchangeRate(currencyType);

    console.log(usMoney)
    $(".revealedRate").html();

  });
});