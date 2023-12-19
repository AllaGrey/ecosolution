import { useState, useEffect } from 'react';
import { Counter, Quantity, Units } from './Incrementor.styled';

export const Incrementor = () => {
  const [value, setValue] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue(prevValue => prevValue + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatValue = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <Counter>
      <Quantity>{formatValue(value)}</Quantity>
      <Units>kWh</Units>
    </Counter>
  );
};
