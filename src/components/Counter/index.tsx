import { useState } from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

type CounterProps = {
  value?: number;
  max: number;
  onChange: (newQty: number) => void;
};

const Counter = ({ value, max, onChange }: CounterProps) => {
  const [qty, setQty] = useState(value ?? 1);
  const handleDec = () => {
    const newQty = qty - 1;
    setQty(newQty);
    onChange(newQty);
  };

  const handleInc = () => {
    const newQty = qty + 1;
    setQty(newQty);
    onChange(newQty);
  };
  return (
    <div className="flex gap-3 items-center">
      <Button onClick={handleDec} disabled={qty === 1 && value === undefined}>
        <Minus />
      </Button>
      <div>{qty}</div>
      <Button onClick={handleInc} disabled={qty === max}>
        <Plus />
      </Button>
    </div>
  );
};

export default Counter;
