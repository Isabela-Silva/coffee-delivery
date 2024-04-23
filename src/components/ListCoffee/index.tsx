import { ShoppingCart } from "phosphor-react";
import { BtnCount } from "../BtnCount";
import { Card, ContainerCoffee } from "./styles";

export interface CardType {
  id: number;

  image: string;
  type: string;
  name: string;

  content: string;
}
interface ListCoffeeProps {
  card: CardType;
  updateTotalQuant: (newQuant: number) => void;
  // tipando o update
}
export function ListCoffee({ updateTotalQuant, card }: ListCoffeeProps) {
  return (
    <ContainerCoffee>
      <Card>
        <img src={card.image} alt="" />
        <span>{card.type}</span>
        <h3>{card.name}</h3>
        <p>{card.content}</p>

        <footer>
          <span>
            R$ <strong>9,90</strong>
          </span>
          <BtnCount updateTotalQuant={updateTotalQuant} />
          {/*  updateTotal sendo passada pro componente Btn */}
          <button>
            <ShoppingCart size={25} weight="fill" />
          </button>
        </footer>
      </Card>
    </ContainerCoffee>
  );
}
