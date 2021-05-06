// libraries
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// routes
import {
  rDesktopPcs,
  rLaptops,
  rMonitors,
  rShoppingCart,
} from "../../routes-name";

const LoginButton = () => {
  // auth0 login hook
  const { user, loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return <button onClick={() => handleLogin()}>Log In</button>;
};

const LogoutButton = () => {
  // auth0 logout hook
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

const NavBar = () => {
  // use react router history
  const history = useHistory();

  // use is authenticated hook
  const { isAuthenticated } = useAuth0();

  // use state hook
  const [isClicked, setIsClicked] = useState(false);

  // handling department click event
  const handleDepartment = () => {
    if (!isClicked) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  // handle go to shopping cart
  const handleShoppingCart = () => {
    history.push(rShoppingCart);
  };

  return (
    <div className="navbar">
      <div className="navbarGrid">
        <div>
          <p className="departements" onClick={handleDepartment}>
            Departments <span className="downwardsArrow">▼</span>
          </p>
        </div>
        <div className="authenticationButton">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          <button onClick={handleShoppingCart}>Shopping Cart</button>
        </div>
      </div>
      {isClicked && (
        <div className="navLinks">
          <p>
            <Link to={rDesktopPcs}>DektopPC's</Link>
          </p>
          <p>
            <Link to={rLaptops}>Laptops</Link>
          </p>
          <p>
            <Link to={rMonitors}>Monitors</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default NavBar;
