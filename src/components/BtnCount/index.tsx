import { Minus, Plus } from "phosphor-react";
import { useCoffee } from "../../hookss/useCoffee";
import { Count } from "./styled";
interface BtnCountProps {
  id: number;
}
// mais uma tipagem do update
export function BtnCount({ id }: BtnCountProps) {
  const { HandleAddCoffee, HandleDeleteCoffee, shopCart } = useCoffee();

  // const [count, setCount] = useState(0);

  const coffeeInShopCart = shopCart.find(
    (item) => item.coffeeProduct.id === id
  );
  const quantity = coffeeInShopCart ? coffeeInShopCart.quantityProduct : 0;

  const increment = () => {
    // updateTotalQuant(1);
    HandleAddCoffee(id);
  };
  const decrement = () => {
    // updateTotalQuant(-1);

    HandleDeleteCoffee(id);
  };
  console.log(HandleAddCoffee);
  return (
    <Count>
      <button onClick={decrement}>
        {" "}
        <Minus className="countSvg" size={20} weight="bold" />{" "}
      </button>
      <span>{quantity}</span>
      <button onClick={increment}>
        <Plus className="countSvg" weight="bold" size={20} />
      </button>
    </Count>
  );
}
