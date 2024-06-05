import { ReactNode, createContext, useCallback, useState } from "react";
import cofAme from "./../assets/cof-ame.svg";
import cofAra from "./../assets/cof-ara.svg";
import cofCap from "./../assets/cof-cap.svg";
import cofCho from "./../assets/cof-cho.svg";
import cofCre from "./../assets/cof-cre.svg";
import cofCub from "./../assets/cof-cub.svg";
import cofGel from "./../assets/cof-gel.svg";
import cogHav from "./../assets/cof-hav.svg";
import cofIrl from "./../assets/cof-irl.svg";
import cofLat from "./../assets/cof-lat.svg";
import cofLei from "./../assets/cof-lei.svg";
import cofMac from "./../assets/cof-mac.svg";
import cofMoc from "./../assets/cof-moc.svg";
import cofTrad from "./../assets/cof-trad.svg";
interface coffeeProps {
  id: number;
  price: string;
  image: string;
  type?: string;
  name: string;
  content?: string;
}

interface shoppingCartProps {
  coffeeProduct: coffeeProps;
  quantityProduct: number;
}
interface CoffeeContextType {
  totalQuant: number;
  updateTotalQuant: (newQuant: number) => void;
  HandleAddCoffee: (id: number) => void;
  HandleDeleteCoffee: (id: number) => void;
  shopCart: shoppingCartProps[];
  setShopCart: React.Dispatch<React.SetStateAction<shoppingCartProps[]>>;
  cards: coffeeProps[];
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
  getTotalDelivery: () => number;
}

const cards: coffeeProps[] = [
  {
    id: 1,
    price: "9,90",
    image: cofTrad,
    type: "TRADICIONAL",
    name: "Expresso Tradicional",
    content: "O tradicional café feito com água quente e grãos moídos",
  },
  {
    id: 2,
    price: "9,90",
    image: cofAme,
    type: "TRADICIONAL",
    name: "Expresso Americano",
    content: "Expresso diluído, menos intenso que o tradicional",
  },
  {
    id: 3,
    price: "9,90",
    image: cofCre,
    type: "TRADICIONAL",
    name: "Expresso Cremoso",
    content: "Café expresso tradicional com espuma cremosa",
  },
  {
    id: 4,
    price: "9,90",
    image: cofGel,
    type: "TRADICIONAL",
    name: "Expresso Gelado",
    content: "Bebida preparada com café expresso e cubos de gelo",
  },
  {
    id: 5,
    price: "9,90",
    image: cofLei,
    type: "TRADICIONAL",
    name: "Café com Leite",
    content: "Meio a meio de expresso tradicional com leite vaporizado",
  },
  {
    id: 6,
    price: "9,90",
    image: cofLat,
    type: "TRADICIONAL",
    name: "Latte",
    content: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
  },
  {
    id: 7,
    price: "9,90",
    image: cofCap,
    type: "TRADICIONAL",
    name: "Capuccino",
    content: "Bebida com canela feita de doses iguais de café, leite e espuma",
  },
  {
    id: 8,
    price: "9,90",
    image: cofMac,
    type: "TRADICIONAL",
    name: "Macchiato",
    content: "Café expresso misturado com um pouco de leite quente e espuma",
  },
  {
    id: 9,
    price: "9,90",
    image: cofMoc,
    type: "TRADICIONAL",
    name: "Mocaccino",
    content: "Café expresso com calda de chocolate, pouco leite e espuma",
  },
  {
    id: 10,
    price: "9,90",
    image: cofCho,
    type: "TRADICIONAL",
    name: "Chocolate Quente",
    content: "Bebida feita com chocolate dissolvido no leite quente e café",
  },
  {
    id: 11,
    price: "9,90",
    image: cofCub,
    type: "TRADICIONAL",
    name: "Cubano",
    content: "Drink gelado de café expresso com rum, creme de leite e hortelã",
  },
  {
    id: 12,
    price: "9,90",
    image: cogHav,
    type: "TRADICIONAL",
    name: "Havaiano",
    content: "Bebida adocicada preparada com café e leite de coco",
  },
  {
    id: 13,
    price: "9,90",
    image: cofAra,
    type: "TRADICIONAL",
    name: "Árabe",
    content: "Bebida preparada com grãos de café árabe e especiarias",
  },
  {
    id: 14,
    price: "9,90",
    image: cofIrl,
    type: "TRADICIONAL",
    name: "Irlandês",
    content: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
  },
];
export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}
export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [totalQuant, setTotalQuant] = useState(0);

  // carrinho --------------------------
  const [shopCart, setShopCart] = useState<shoppingCartProps[]>([]);

  const updateTotalQuant = useCallback((newQuant: number) => {
    setTotalQuant((prevState) => prevState + newQuant);
  }, []);

  const HandleAddCoffee = (id: number) => {
    const coffee = cards.find((coffee) => coffee.id === id);

    if (!coffee) return;

    const coffeeInShopCart = shopCart.find(
      (item) => item.coffeeProduct.id === id
    );
    if (coffeeInShopCart) {
      const newShoppingCart = shopCart.map((item) => {
        if (item.coffeeProduct.id === id) {
          return {
            ...item,
            quantityProduct: item.quantityProduct + 1,
          };
        }
        return item;
      });
      setShopCart(newShoppingCart);
      return;
    }

    const coffeeItem: shoppingCartProps = {
      coffeeProduct: coffee,
      quantityProduct: 1,
    };

    const newShoppingCart = [...shopCart, coffeeItem];
    setShopCart(newShoppingCart);
  };

  const HandleDeleteCoffee = (id: number) => {
    const coffeeInShopCart = shopCart.find(
      (item) => item.coffeeProduct.id === id
    );

    if (coffeeInShopCart!.quantityProduct > 1) {
      const newShoppingCart = shopCart.map((item) => {
        if (item.coffeeProduct.id === id) {
          return {
            ...item,
            quantityProduct: item.quantityProduct - 1,
          };
        }
        return item;
      });

      setShopCart(newShoppingCart);
      return;
    }

    const newShoppingCart: shoppingCartProps[] = shopCart.filter(
      (item) => item.coffeeProduct.id !== id
    );

    setShopCart(newShoppingCart);
  };

  const getTotalQuantity = useCallback(() => {
    return shopCart.reduce((total, item) => total + item.quantityProduct, 0);
  }, [shopCart]);

  const getTotalPrice = useCallback(() => {
    const totalProductPrice = shopCart.reduce((total, item) => {
      const price = parseFloat(item.coffeeProduct.price.replace(",", "."));
      return total + price * item.quantityProduct;
    }, 0);

    return parseFloat(totalProductPrice.toFixed(2));
  }, [shopCart]);

  const getTotalDelivery = useCallback(() => {
    const deliveryFee = 3.5;
    const totalPrice = getTotalPrice();

    return parseFloat((totalPrice + deliveryFee).toFixed(2));
  }, [getTotalPrice]);
  return (
    <CoffeeContext.Provider
      value={{
        totalQuant,
        updateTotalQuant,
        HandleAddCoffee,
        HandleDeleteCoffee,
        shopCart,
        setShopCart,
        cards,
        getTotalQuantity,
        getTotalPrice,
        getTotalDelivery,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
