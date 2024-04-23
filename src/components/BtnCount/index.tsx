import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { Count } from "./styled";

interface BtnCountProps {
  updateTotalQuant: (newQuant: number) => void;
}
// mais uma tipagem do update
export function BtnCount({ updateTotalQuant }: BtnCountProps) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    updateTotalQuant(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      updateTotalQuant(count - 1);
    }
  };
  return (
    <Count>
      <button onClick={decrement}>
        {" "}
        <Minus className="countSvg" size={20} weight="bold" />{" "}
      </button>
      <span>{count}</span>
      <button onClick={increment}>
        <Plus className="countSvg" weight="bold" size={20} />
      </button>
    </Count>
  );
}
