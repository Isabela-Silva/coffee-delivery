import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { BtnCount } from "../BtnCount";
import { Card, ContainerCoffee } from "./styles";

interface CardType {
  id: number;
  price: string;
  image: string;
  type?: string;
  name: string;

  content?: string;
}
interface ListCoffeeProps {
  card: CardType;
}
export function ListCoffee({ card }: ListCoffeeProps) {
  const { HandleAddCoffee } = useContext(CoffeeContext);
  console.log(HandleAddCoffee);
  return (
    <ContainerCoffee>
      <Card>
        <img src={card.image} alt="" />
        <span>{card.type}</span>
        <h3>{card.name}</h3>
        <p>{card.content}</p>

        <footer>
          <span>
            R$ <strong>{card.price}</strong>
          </span>
          <BtnCount id={card.id} />
          <button>
            <ShoppingCart size={25} weight="fill" />
          </button>
        </footer>
      </Card>
    </ContainerCoffee>
  );
}
