import UserContext from "./Context";
import {useState} from "react";

function UserAuth({children}){
  const [userInfo, setUserInfo] = useState({
    isAuthenticated : false,
    Email : String,
    Cart : new Array()
  });
  function updateUserCart(newCart){
    setUserInfo(prevValue => {
      return{
        isAuthenticated : prevValue.isAuthenticated,
        Email : prevValue.Email,
        Cart : newCart
      }
    })
  }
  function resetUserInfo(){
    setUserInfo({
      isAuthenticated : false,
      Email : String,
      Cart : new Array()
    })
  }
  console.log(userInfo);
  return <UserContext.Provider value={{userInfo, setUserInfo, updateUserCart, resetUserInfo}}>{children}</UserContext.Provider>
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
