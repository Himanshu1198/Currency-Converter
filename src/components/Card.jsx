import React, { useId } from 'react'

export default function Card({
  title,
  amount = 0,
  onAmountChange,
  onCurrencyChange,
  currecyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currecyDisable = false,
  className = '',
}) {
  const amountInputId = useId()
  return (
    <>
      <div className=' text-gray-400 flex justify-between mb-2'>
        <label htmlFor={amountInputId}>{title}</label>
        <div>Currency Type</div>
      </div>
      <div className='flex justify-between'>
        <div>
          <input
            htmlFor={amountInputId}
            type='number'
            placeholder='amount'
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
        </div>
        <div>
          <select
            name=''
            id=''
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currecyDisable}
          >
            {currecyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}
