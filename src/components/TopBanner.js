import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import requests from "../Requests";





const TopBanner = () => {


    const [global, setGlobal] = useState([])

    

    useEffect(() => {
        axios
        .get(requests.requestGlobal)
        .then((res) => {
            setGlobal(res.data)
            console.log(res.data)
        })
        .catch((error) => console.log(error))
    }, [requests.requestGlobal])




  return (
    <div className='flex justify-center gap-14 px-11 py-2 ml-2 text-[11px]'>
        <p>Cryptos:<span className='text-[#6585ed]'> {global.data?.active_cryptocurrencies.toLocaleString()} </span></p>
        <p>Exchanges:<span className='text-[#6585ed]'> {global.data?.total_exchanges.toLocaleString()}</span></p>
        <p>Market Cap:<span className='text-[#6585ed]'> ${global.data?.quote.USD.total_market_cap.toLocaleString()} </span></p>
        <p>24h Vol Change:<span className='text-[#6585ed]'> {global.data?.quote.USD.total_volume_24h_yesterday_percentage_change.toFixed(2)}%</span></p>
        <p>Dominance:<span className='text-[#6585ed]'> BTC:{global.data?.btc_dominance.toFixed(2)}% ETH:{global.data?.eth_dominance.toFixed(2)}%</span></p>
        <p>Active Market Pairs<span className='text-[#6585ed]'> {global.data?.active_market_pairs.toLocaleString()}</span></p>
    </div>
  )
}

export default TopBanner