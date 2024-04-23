import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import logo from "./../../assets/logo.svg";
import { HeaderBox, HeaderContainer } from "./style";

export function Header() {
  const { totalQuant } = useContext(CoffeeContext);
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
          <span>{totalQuant}</span>
        </div>
      </HeaderBox>
    </HeaderContainer>
  );
}
