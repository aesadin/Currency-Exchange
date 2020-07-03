import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { callExchangeRate } from './src/currencyexchange.js';


async function getExchangeRate() {
  const apiResponse = await callExchangeRate();
  if(!apiResponse) {
    return 'There has been an error processing your request'
  } else {
    showExchangeRate(apiResponse);
  }
}

function showExchangeRate(exchangeResponse) {
  if( ) {
    $('.revealedRate').text(`Your converted currency is ${exchangeResponse.conversion_rates.EUR}`);
  } else if() {
    $('.revealedRate').text(`Your converted currency is ${exchangeResponse.conversion_rates.NZD}`);
  } else if() {
    $('.revealedRate').text(`Your converted currency is ${exchangeResponse.conversion_rates.NOK}`);
  } else if() {
    $('.revealedRate').text(`Your converted currency is ${exchangeResponse.conversion_rates.PLN}`);
  } else if() {
    $('.revealedRate').text(`Your converted currency is ${exchangeResponse.conversion_rates.SAR}`);
  } else {
    $('.revealedCurrency').text('This currency is not available');
  }
  
}



$(document).ready(function () {
  $('#exchangeForm').submit(function (event) {
    event.preventDefault();
    let usMoney = $("#exchange").val("");
    callExchangeRate();

    console.log(usMoney)

  });
});