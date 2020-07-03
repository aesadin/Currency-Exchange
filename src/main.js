import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { callExchangeRate } from './src/currencyexchange.js';






$(document).ready(function () {
  $('#exchangeForm').submit(function (event) {
    event.preventDefault();
    let usMoney = $("#exchange").val("");
    callExchangeRate();

    console.log(usMoney)

  });
});