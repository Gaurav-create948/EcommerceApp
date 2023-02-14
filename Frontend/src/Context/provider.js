import UserContext from "./Context";
import {useState} from "react";

function UserDetails({children}){
  const[user, setUser] = useState({
    FullName : String,
  })
  let order = [];
  function setOrders(Data){
    order.push(Data);
    console.log(order);
  };
  return <UserContext.Provider value={{user, setUser, order, setOrders}}>{children}</UserContext.Provider>
}

export default UserDetails;



