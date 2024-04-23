import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import cofTrad from "../../assets/cof-trad.svg";
import { BtnCount } from "../../components/BtnCount";
import { Header } from "../../components/Header";
import {
  AdressBox,
  CheckoutContainer,
  InfoBox,
  PaymentBox,
  RequestButtons,
  RequestsBox,
} from "./styles";
interface CheckoutProps {
  updateTotalQuant: (newQuant: number) => void;
}
export function Checkout({ updateTotalQuant }: CheckoutProps) {
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
            <header>
              {/* {requestList.map((req) => {
              return <Request />;
            })} */}
              <img src={cofTrad} alt="" />
              <div>
                <span>Expresso Tradicional</span>
                <RequestButtons>
                  <BtnCount updateTotalQuant={updateTotalQuant} />
                  {/* coloquei o botao aqui, mas ele não ta todo estilizado como ta na pagina Home */}
                  <button>
                    <Trash size={20} />
                    REMOVER
                  </button>
                </RequestButtons>
              </div>
              <strong>R$ 9,90</strong>
            </header>

            <footer>
              <div className="totalItems">
                <p>Total de items</p>
                <p>R$ 29,90</p>
              </div>
              <div className="delivery">
                <p>Entrega</p>
                <p>R$ 3,90</p>
              </div>
              <div className="total">
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </div>
              <button>CONFIRMAR PEDIDO</button>
            </footer>
          </div>
        </RequestsBox>
      </CheckoutContainer>
    </div>
  );
}
