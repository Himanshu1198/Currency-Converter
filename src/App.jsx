import { useState } from 'react'
import Card from './components/Card'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [convetedamount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convetedamount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const submit = (e) => {
    e.preventDefault()
    convert()
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center h-96'>
        <div className=' bg-white bg-opacity-15 border border-white p-10 w-1/2 rounded-lg mt-48'>
          <div>
            <div className='bg-white p-4 rounded-lg -mb-3'>
              <Card
                title='From'
                amount={amount}
                currecyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className='flex justify-center z-10'>
              <div className='bg-blue-700 text-white w-14 rounded-md'>
                <button className='p-2' onClick={swap}>
                  Swap
                </button>
              </div>
            </div>
            <div className='bg-white p-4 rounded-lg -mt-3'>
              <Card
                title='To'
                amount={convetedamount}
                currecyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
              />
            </div>
            <div className='flex justify-center'>
              <button
                onClick={submit}
                className='bg-blue-700 text-white w-full mt-4 p-2 rounded-md text-xl'
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
