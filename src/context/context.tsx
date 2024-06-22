import { createContext, useState } from "react";

let myVar: any;

export const ContextJsx = createContext(myVar);  

type TitleProps = {
    children: any;
  }
  
  export const ContextProvider: any = ({ children }: TitleProps) => {

    const [photo, setPhoto] = useState('')
    
    return <ContextJsx.Provider value={{photo, setPhoto }}>{children}</ContextJsx.Provider>
}