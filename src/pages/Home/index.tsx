import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useContext } from "react";
import { Header } from "../../components/Header";
import { ListCoffee } from "../../components/ListCoffee";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import coffee from "./../../assets/coffee.svg";
import {
  CardsBox,
  HomeContainer,
  InfoDiv,
  InfoSection,
  TitleCard,
} from "./styles";

export function Home() {
  // updateTotalquant sendo criado na home
  const { cards } = useContext(CoffeeContext);

  return (
    <HomeContainer>
      <Header />
      <InfoSection>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
          <InfoDiv>
            <span>
              {" "}
              <ShoppingCart className="shop" size={20} weight="fill" /> Compra
              simples e segura
            </span>
            <span>
              {" "}
              <Timer className="time" size={20} weight="fill" />
              Entrega rápida e rastreada
            </span>
            <span>
              <Package className="package" size={20} weight="fill" />
              Embalagem mantém o café intacto
            </span>
            <span>
              <Coffee className="coffee" size={20} weight="fill" />O café chega
              fresquinho até você
            </span>
          </InfoDiv>
        </div>
        <img src={coffee} alt="" />
      </InfoSection>
      <TitleCard>
        <h2>Nossos cafés</h2>
      </TitleCard>
      <CardsBox>
        {cards.map((card) => {
          return <ListCoffee key={card.id} card={card} />;
          // updateTotal sendo passada pro componente ListCoffee
        })}
      </CardsBox>
    </HomeContainer>
  );
}
