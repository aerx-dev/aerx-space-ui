import React from "react";

import Wallets from "./Wallets";
import Collapse from "../Profiles/Collapse"

function index() {
    const [isToggle, setToggle] = React.useState(false);
  

    const toggleClick = () => {
        setToggle((prevState) => !prevState);
      // change toggle state
      }
  return (
    <div h="100vh"  bgColor="black">
      <Collapse toggle={toggleClick} Toggle={isToggle} />
      {isToggle && (
        <div>
      
          <Wallets />
        </div>
      )}
    </div>
  );
}

export default index;
