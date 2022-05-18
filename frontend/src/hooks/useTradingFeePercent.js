import { useEffect, useState } from 'react'
import { getFactoryContractInstance } from '../utils/web3'

const useTradingFeePercent = () => {
  const [tradingFee, setTradingFee] = useState(0)
  
  useEffect(() => {
    const fetchTradingFee = async () => {
      try {
        const factory = getFactoryContractInstance();
        if(factory) {
          const fee = await factory.methods.tradingFee().call();
          setTradingFee(fee)
        }
      } catch (error) {
        setTradingFee(0)
        console.log(error)
      }
    }

    fetchTradingFee()
  }, [setTradingFee])

  return tradingFee
}

export default useTradingFeePercent