import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';




async function callExchageRate(){
  try{
    let response = await fetch(`https://v6.exchangerate-api.com/v6/api-key=${process.env.API_KEY_NY}/latest/USD?`); 
    let jsonifiedResponse;
    if (response.ok && response.status == 200) {
      jsonifiedResponse = await response.json();
    } else {
      jsonifiedResponse = false;
    }
    return jsonifiedResponse;
  } catch (error) {
    return false;
  }
}

$(document).ready(function () {
  // $('#submit-button').submit(function (event) {
  //     event.preventDefault();

  // });
});