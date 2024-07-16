function InputBox({ 
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  onAmountDisbale = false,
  onCurrencyDisable = false
  

}) {
  return (
    <>
      <div className="mt-2 bg-white rounded-lg p-2 w-full flex flex-wrap justify-between">
        <div className="w-1/3 text-left">

          <label className="pb-2">{label}</label>
          <input type="number"
           value={amount} 
           placeholder="amount"
           onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
           disabled={onAmountDisbale}
            />
        </div>

        <div className="w-1/4 text-right block">
          <p className="pb-2">Currency Type</p>

          <select
            className="bg-gray-200 max-w-20 p-1 rounded-lg outline-0 "
            value={selectCurrency}
            onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={onCurrencyDisable}
          >
          {
            currencyOptions.map((cur)=> <option key={cur} value={cur}>{cur}</option>) 
          }
          
           
          
          </select>

        </div>
      </div>
    </>
  );
}

export default InputBox;
