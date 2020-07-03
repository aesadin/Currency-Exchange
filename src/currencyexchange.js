export async function callExchageRate(){
  try{
    const exchangeResponse = await fetch(`https://v6.exchangerate-api.com/v6/appid=${process.env.API_KEY}/latest/USD?`); 
    const jsonifiedResponse;
    if (exchangeResponse.ok && exchangeResponse.status == 200) {
      jsonifiedResponse = await exchangeResponse.json();
      showExchangeRate(jsonifiedResponse);
    } else {
      jsonifiedResponse = false;
    }
    return jsonifiedResponse;
  } catch (error) {
    return false;
  }
}

function calculateCurrencyOutput(usdCurrency, exchangeRate) {
  let newCurrency = (usdCurrency * exchangeRate);
  return newCurrency;
}