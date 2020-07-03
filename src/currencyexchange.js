export async function callExchageRate(){
  try{
    let exchangeResponse = await fetch(`https://v6.exchangerate-api.com/v6/appid=${process.env.API_KEY}/latest/USD?`); 
    let jsonifiedResponse;
    if (exchangeResponse.ok && exchangeResponse.status == 200) {
      jsonifiedResponse = await exchangeResponse.json();
    } else {
      jsonifiedResponse = false;
    }
    return jsonifiedResponse;
  } catch (error) {
    return false;
  }
}