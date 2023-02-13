import UserContext from "./Context";
import {userState, useState} from "react";

function userDetails({children}){
  const[user, setUser] = useState({
    FullName : String,
  }) 
  return <UserContext.Provider value={user}></UserContext.Provider>
}

export default userDetails;