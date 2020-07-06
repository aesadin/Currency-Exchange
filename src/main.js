import { callExchangeRate } from './currencyexchange.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


// returns error message to user
async function getExchangeRate() {
  const allExchangeRates = await callExchangeRate();
  if(!allExchangeRates) {
    return 'There has been an error processing your request';
  } else {
    showExchangeRate(allExchangeRates.conversion_rates);
  }
}

// displays user inputted currency or tells user currency is not available
async function showExchangeRate(currencyType) {
  let response = await callExchangeRate();
  if(currencyType === "EUR" ) {
    $('.revealedRate').append(`Your selection's conversion rate is ${response.conversion_rates.EUR}`);
  } else if(currencyType === "NZD") {
    $('.revealedRate').append(`Your selection's conversion rate is ${response.conversion_rates.NZD}`);
  } else if(currencyType === "NOK") {
    $('.revealedRate').append(`Your selection's conversion rate is ${response.conversion_rates.NOK}`);
  } else if(currencyType === "PLN") {
    $('.revealedRate').append(`Your selection's conversion rate is ${response.conversion_rates.PLN}`);
  } else if(currencyType === "SAR") {
    $('.revealedRate').append(`Your selection's conversion rate is ${response.conversion_rates.SAR}`);
  } else {
    $('.revealedRate').append('This conversion rate is not available');
  }
}



// still working to make this a proper UI function, but it will calculate the new currency in the user's preferred country
async function calculateCurrencyOutput(usdCurrency, exchangeRate) {
  let exchangeRate = await callExchangeRate();
  let newCurrency = (usdCurrency * exchangeRate);
  return newCurrency;
}




$(document).ready(function () {
  $('#inputForm').submit(function (event) {
    event.preventDefault();
    let usdCurrency = parseInt($("#exchange").val(""));
    let currencyType = $("#currency").val("").toUpperCase();
    let exchangeRate = []; // need function to grab current exchange rate so calculateCurrencyOutput function can be called

    callExchangeRate();
    getExchangeRate()
    showExchangeRate(currencyType);
    calculateCurrencyOutput(usdCurrency, exchangeRate);

    console.log(usdCurrency)
    $(".exchangedCurrency").html();
    $(".revealedExchange").append();

  });
});
