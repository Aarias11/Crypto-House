const coinKey = '7f897da9-3e52-4fa9-9923-c8d6c7c16060'

const newsKey = '38f6fa5ffa484907b41f19b044283d61'


const requests = {
    requestGlobal: `https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=${coinKey}`,
    requestNews: `https://newsapi.org/v2/everything?q=crypto&apiKey=${newsKey}`,
    
}





export default requests