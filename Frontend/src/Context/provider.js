import UserContext from "./Context";
import {useState} from "react";
import Cookies from "js-cookie";

function UserAuth({children}){
  const [Cart , setCart] = useState([]);
  console.log(Cart);
  return <UserContext.Provider value={{Cart , setCart}}>{children}</UserContext.Provider>
}

export default UserAuth;



// import {userState, useState} from "react";

// function userDetails({children}){
//   const[user, setUser] = useState({
//     FullName : String,
//   }) 
//   return <UserContext.Provider value={user}></UserContext.Provider>
// }

// export default userDetails;
