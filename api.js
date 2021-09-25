const baseURL = 'https://coinroutes.com'
const apiToken = ''
const priceSocketURL = 'api/streaming/real_price'
const cbboSocketURL = 'api/streaming/cbbo'





const request = async({endpoint, method, body, token})=>{
      try{
        let headers = {'Content-Type': 'application/json'}
        if(token) headers['Authorization']=`Bearer ${token}`
        let req = {
        method:method,
        headers: headers,
      }
      if(body) request['body']= JSON.stringify(body)
      console.log("options",request)
      const resp = await fetch(baseURL+endpoint,req)
      const data = await resp.json()
      
      console.log(data)
      
      if(data.error) throw(data.error)
      return  data.data ? data.data : null

      }
      catch(err){
        console.error(err)
      }
      finally{
        console.log('request', baseURL+endpoint)
      }
  }
const  getCurrencyPairs = ()=>{
    const endpoint='/api/currency_pairs/'
    const data = await this.request({
        endpoint:endpoint,
        method:'GET',
        token:apiToken
    })
    return {data}
}

//Example
// {
//     "currency_pair": "BTC-USD",
//     "exchanges": [
//       "gdax", "gemini", "bitstamp"
//     ],
//     "side": "bids",
//     "quantity": 1
// }
const  costCalculator = (currency_pair, exchanges, side, quantity)=>{
    const endpoint = '/api/cost_calculator/'
    const data = await this.request({
        endpoint:endpoint,
        method:'POST',
        body:{
            currency_pair: currency_pair,
            exchanges: exchanges,
            side: side,
            quantity: quantity,
        },
        token:apiToken
    })
      return {data}
    }







module.exports = {
    getCurrencyPairs,
    costCalculator

}