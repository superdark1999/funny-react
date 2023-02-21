import React, { useEffect, useRef, useState } from "react";

export default function FunnyUseState() {
  const [amount, setAmount] = useState(0);
  const inputRef = useRef<any>();

  console.log("render");
  const handleChangeValueInput = () => {
    inputRef.current.value = 10;
  };

  return (
    <div>
      <input ref={inputRef} value={amount}></input>
      <div>{amount}</div>
      <button
        onClick={() => {
          setAmount(amount + 1);
          setAmount((prev) => prev + 1);
          setAmount((prev) => prev + 1);
          setAmount(amount + 1);
        }}
      >
        button1
      </button>
      <button onClick={handleChangeValueInput}>button2</button>
    </div>
  );
}
