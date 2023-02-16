import UserContext from "./Context";
import {useState} from "react";

function UserAuth({children}){
  const[isLogin, setLogin] = useState(false);
  return <UserContext.Provider value={{isLogin, setLogin}}>{children}</UserContext.Provider>
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
