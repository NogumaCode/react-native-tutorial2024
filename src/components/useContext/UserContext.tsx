import { createContext, Dispatch, SetStateAction, useState } from "react";

interface UserContextType {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
}

interface UserProps{
  children:React.ReactNode;
}
const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({children}:UserProps)=>{
  const[user,setUser] = useState("Noguma");

  return(
    <UserContext.Provider value={{ user,setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext,UserProvider}
