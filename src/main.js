import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { callExchangeRate } from './src/currencyexchange.js';

// returns error message to user
async function getExchangeRate() {
  const allExchangeRates = await callExchangeRate();
  if(!allExchangeRates) {
    return 'There has been an error processing your request'
  } else {
    showExchangeRate(allExchangeRates.conversion_rates);
  }
}

// displays user inputted currency or tells user currency is not available
function showExchangeRate(currencyType) {
  if(currencyType === "EUR" ) {
    $('.revealedRate').text(`Your converted currency is ${exchangeResponse.conversion_rates.EUR}`);
  } else if(currencyType === "NZD") {
    $('.revealedRate').text(`Your converted currency is ${exchangeResponse.conversion_rates.NZD}`);
  } else if(currencyType === "NOK") {
    $('.revealedRate').text(`Your converted currency is ${exchangeResponse.conversion_rates.NOK}`);
  } else if(currencyType === "PLN") {
    $('.revealedRate').text(`Your converted currency is ${exchangeResponse.conversion_rates.PLN}`);
  } else if(currencyType === "SAR") {
    $('.revealedRate').text(`Your converted currency is ${exchangeResponse.conversion_rates.SAR}`);
  } else {
    $('.revealedRate').text('This currency is not available');
  }
  console.log(currencyType)
}

// still working to make this a proper UI function, but it will calculate the new currency in the user's preferred country
function calculateCurrencyOutput(usdCurrency, exchangeRate) {
  let newCurrency = (usdCurrency * exchangeRate);
  return newCurrency;
}



$(document).ready(function () {
  $('#exchangeForm').submit(function (event) {
    event.preventDefault();
    let usMoney = parseInt($("#exchange").val(""));
    let currencyType = $("#currency").val("").toUpperCase();
    callExchangeRate();
    getExchangeRate()
    showExchangeRate(currencyType);

    console.log(usMoney)
    $(".exchangedCurrency").html();

  });
});
