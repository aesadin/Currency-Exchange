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
    showExchangeRate(apiResponse.conversion_rates);
  }
}

function showExchangeRate()



$(document).ready(function () {
  $('#exchangeForm').submit(function (event) {
    event.preventDefault();
    let usMoney = $("#exchange").val("");
    callExchangeRate();

    console.log(usMoney)

  });
});