import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import logo from "./../../assets/logo.svg";
import { HeaderBox, HeaderContainer } from "./style";

export function Header() {
  const { getTotalQuantity } = useContext(CoffeeContext);

  const quantity = getTotalQuantity();
  return (
    <HeaderContainer>
      <HeaderBox>
        <img src={logo} alt="" />
        <div>
          <button>
            {" "}
            <MapPin weight="fill" size={20} /> Belém, PA
          </button>
          <Link to="/checkout">
            <ShoppingCart weight="fill" size={20} />
          </Link>
          <span>{quantity}</span>
        </div>
      </HeaderBox>
    </HeaderContainer>
  );
}
