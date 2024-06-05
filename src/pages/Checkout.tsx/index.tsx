import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import { useContext } from "react";
import { BtnCount } from "../../components/BtnCount";
import { Header } from "../../components/Header";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import {
  AdressBox,
  CheckoutContainer,
  InfoBox,
  PaymentBox,
  RequestsBox,
} from "./styles";

export function Checkout() {
  const { shopCart, HandleDeleteCoffee, getTotalPrice, getTotalDelivery } =
    useContext(CoffeeContext);

  const totalPrice = getTotalPrice();
  const totalDelivery = getTotalDelivery();

  return (
    <div>
      <Header />
      <CheckoutContainer>
        <InfoBox>
          <AdressBox>
            <h3>Complete seu pedido</h3>
            <div className="adressBox">
              <header>
                <div className="iconPin">
                  <MapPinLine size={20} weight="bold" />
                </div>
                <div>
                  <span>Endereço de Entrega</span>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </header>
              <input type="number" placeholder="CEP" className="cep" />
              <input type="text" placeholder="Rua" className="rua" />
              <div className="adress-home">
                <input type="number" placeholder="Número" />
                <input type="text" placeholder="Complemento" />
              </div>
              <div className="adress-city">
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="UF" />
              </div>
            </div>
          </AdressBox>

          <PaymentBox>
            <header>
              <div className="iconCurrency">
                <CurrencyDollar size={20} weight="bold" />
              </div>
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>
            <div className="paymentCards">
              <button>
                <span>
                  <CreditCard size={20} />
                </span>
                CARTÃO DE CRÉDITO
              </button>
              <button>
                <span>
                  <Bank size={20} />
                </span>
                CARTÃO DE DÉBITO
              </button>
              <button>
                <span>
                  <Money size={20} />
                </span>
                DINHEIRO
              </button>
            </div>
          </PaymentBox>
        </InfoBox>

        <RequestsBox>
          <h3>Cafés selecionados</h3>
          <div className="requestsBox">
            {shopCart.map((item) => (
              <div className="coffeeProduct" key={item.coffeeProduct.id}>
                <img src={item.coffeeProduct.image} alt="" />
                <div className="coffeeInfo">
                  <span>{item.coffeeProduct.name}</span>
                  <div className="coffeeButtons">
                    <BtnCount id={item.coffeeProduct.id} />
                    <button
                      onClick={() => HandleDeleteCoffee(item.coffeeProduct.id)}
                    >
                      <Trash size={20} />
                      REMOVER
                    </button>
                  </div>
                </div>
                <strong>R$ {item.coffeeProduct.price}</strong>
                {/* <strong>Quantidade :{item.quantityProduct}</strong> */}
              </div>
            ))}
            <footer>
              <div className="totalItems">
                <p>Total de items</p>
                <p>R$ {totalPrice}</p>
              </div>
              <div className="delivery">
                <p>Entrega</p>
                <p>R$ 3.90</p>
              </div>
              <div className="total">
                <strong>Total</strong>
                <strong>R$ {totalDelivery}</strong>
              </div>
              <button>CONFIRMAR PEDIDO</button>
            </footer>
          </div>
        </RequestsBox>
      </CheckoutContainer>
    </div>
  );
}
