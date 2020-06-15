import { useState } from "react";
export default initialVal => {
  const [value, setValue] = useState({});
  const handleChange = e => {

      setValue({...value, [e.target.name]: e.target.value});
    //etValue({name: e.target.value, price: e.target.value})
  };
  const reset = () => {
    setValue("");
  };
  return [value.name, value.price, handleChange, reset];
};
