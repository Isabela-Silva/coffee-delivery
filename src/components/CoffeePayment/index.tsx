import { Trash } from "phosphor-react";
import { RequestButtons } from "../../pages/Checkout.tsx/styles";
import { BtnCount } from "../BtnCount";
import { CoffeePaymentContainer } from "./styles";

interface CoffeePaymentProps {
  image: string;
  name: string;
  price: string;
}
export function CoffeePayment({ image, price, name }: CoffeePaymentProps) {
  //   const [coffeePaymentSelected, setCoffeePaymentSelected] = useState([]);
  return (
    <CoffeePaymentContainer>
      <img src={image} alt="" />
      <div>
        <span className="titleCoffee">{name}</span>
        <RequestButtons>
          <BtnCount />
          {/* coloquei o botao aqui, mas ele não ta todo estilizado como ta na pagina Home */}
          <a>
            <Trash size={20} />
            REMOVER
          </a>
        </RequestButtons>
      </div>
      <strong>R$ {price}</strong>
    </CoffeePaymentContainer>
  );
}
