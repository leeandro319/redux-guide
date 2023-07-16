import { useState } from "react";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import UserActionTypes from "../redux/user/action-types";
import { loginUser, logoutUser } from "../redux/user/actions";


function Header() {
  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const dispatch = useDispatch()


  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({
      name: 'Leandro',
      email: 'teste@teste.com'
    }))
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {!currentUser ? (<div onClick={handleLoginClick}>Login</div>) : (<div onClick={handleLogoutClick}>Logout</div>)}
        
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
