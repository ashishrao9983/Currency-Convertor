import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data , setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    
    fetch(
      `https://api.frankfurter.app/latest?from=USD`
    )
      .then((res) => res.json())
      .then((res) => {
      
        setData(res.rates);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;