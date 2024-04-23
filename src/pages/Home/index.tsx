import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useContext } from "react";
import { Header } from "../../components/Header";
import { CardType, ListCoffee } from "../../components/ListCoffee";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import cofAme from "./../../assets/cof-ame.svg";
import cofAra from "./../../assets/cof-ara.svg";
import cofCap from "./../../assets/cof-cap.svg";
import cofCho from "./../../assets/cof-cho.svg";
import cofCre from "./../../assets/cof-cre.svg";
import cofCub from "./../../assets/cof-cub.svg";
import cofGel from "./../../assets/cof-gel.svg";
import cogHav from "./../../assets/cof-hav.svg";
import cofIrl from "./../../assets/cof-irl.svg";
import cofLat from "./../../assets/cof-lat.svg";
import cofLei from "./../../assets/cof-lei.svg";
import cofMac from "./../../assets/cof-mac.svg";
import cofMoc from "./../../assets/cof-moc.svg";
import cofTrad from "./../../assets/cof-trad.svg";
import coffee from "./../../assets/coffee.svg";
import {
  CardsBox,
  HomeContainer,
  InfoDiv,
  InfoSection,
  TitleCard,
} from "./styles";

const cards: CardType[] = [
  {
    id: 1,
    image: cofTrad,
    type: "TRADICIONAL",
    name: "Expresso Tradicional",
    content: "O tradicional café feito com água quente e grãos moídos",
  },
  {
    id: 2,
    image: cofAme,
    type: "TRADICIONAL",
    name: "Expresso Americano",
    content: "Expresso diluído, menos intenso que o tradicional",
  },
  {
    id: 3,
    image: cofCre,
    type: "TRADICIONAL",
    name: "Expresso Cremoso",
    content: "Café expresso tradicional com espuma cremosa",
  },
  {
    id: 4,
    image: cofGel,
    type: "TRADICIONAL",
    name: "Expresso Gelado",
    content: "Bebida preparada com café expresso e cubos de gelo",
  },
  {
    id: 5,
    image: cofLei,
    type: "TRADICIONAL",
    name: "Café com Leite",
    content: "Meio a meio de expresso tradicional com leite vaporizado",
  },
  {
    id: 6,
    image: cofLat,
    type: "TRADICIONAL",
    name: "Latte",
    content: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
  },
  {
    id: 7,
    image: cofCap,
    type: "TRADICIONAL",
    name: "Capuccino",
    content: "Bebida com canela feita de doses iguais de café, leite e espuma",
  },
  {
    id: 8,
    image: cofMac,
    type: "TRADICIONAL",
    name: "Macchiato",
    content: "Café expresso misturado com um pouco de leite quente e espuma",
  },
  {
    id: 9,
    image: cofMoc,
    type: "TRADICIONAL",
    name: "Mocaccino",
    content: "Café expresso com calda de chocolate, pouco leite e espuma",
  },
  {
    id: 10,
    image: cofCho,
    type: "TRADICIONAL",
    name: "Chocolate Quente",
    content: "Bebida feita com chocolate dissolvido no leite quente e café",
  },
  {
    id: 11,
    image: cofCub,
    type: "TRADICIONAL",
    name: "Cubano",
    content: "Drink gelado de café expresso com rum, creme de leite e hortelã",
  },
  {
    id: 12,
    image: cogHav,
    type: "TRADICIONAL",
    name: "Havaiano",
    content: "Bebida adocicada preparada com café e leite de coco",
  },
  {
    id: 13,
    image: cofAra,
    type: "TRADICIONAL",
    name: "Árabe",
    content: "Bebida preparada com grãos de café árabe e especiarias",
  },
  {
    id: 14,
    image: cofIrl,
    type: "TRADICIONAL",
    name: "Irlandês",
    content: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
  },
];

export function Home() {
  const { SetTotalPedidos } = useContext(CoffeeContext);
  const updateTotalQuant = (newQuant: number) => {
    SetTotalPedidos(newQuant);
  };
  // updateTotalquant sendo criado na home
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
          return <ListCoffee card={card} updateTotalQuant={updateTotalQuant} />;
          // updateTotal sendo passada pro componente ListCoffee
        })}
      </CardsBox>
    </HomeContainer>
  );
}
