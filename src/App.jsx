import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo)

 const convert = () =>{
  return setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () =>{
   setFrom(to);
   setTo(from);
   setAmount(convertedAmount);
   setConvertedAmount(amount)
  }

  return (
    <>
      <div className="w-full h-screen bg-black text-center py-20">
        <div className="p-4 rounded-lg bg-slate-700 max-w-lg  mx-auto">
          <h1 className="text-teal-400 font-bold text-2xl mb-5 ">
            Currency Converter
          </h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert()
            }}>
            <InputBox label="From" 
             selectCurrency={from}
             amount={amount}
             currencyOptions = {options}
             onAmountChange={(amount) => setAmount(amount)}
             onCurrencyChange={(from) => setFrom(from)}
             />
            <button
              type="button"
              className="bg-teal-400  rounded-lg p-1 left-1/2 -translate-x-5 -translate-y-2  mx-auto text-white absolute "
              onClick={swap}
            >
              swap
            </button>
            <InputBox label="To" 
            selectCurrency={to}
            amount={convertedAmount}
            currencyOptions = {options} 
            onCurrencyChange={(to) => setTo(to)}
            />

            <button
              type="submit"
              className="bg-teal-400 text-white text-center p-3 mt-3 w-full rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
