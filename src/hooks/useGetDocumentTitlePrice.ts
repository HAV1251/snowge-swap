import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { SNOWGE } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const snowgePriceUsd = priceData ? parseFloat(priceData.data[SNOWGE.address].price) : 0

  const snowgePriceUsdString =
    Number.isNaN(snowgePriceUsd) || snowgePriceUsd === 0
      ? ''
      : ` - $${snowgePriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 5,
          maximumFractionDigits: 5,
        })}`

  useEffect(() => {
    document.title = `SnowgeSwap${snowgePriceUsdString}`
  }, [snowgePriceUsdString])
}
export default useGetDocumentTitlePrice
