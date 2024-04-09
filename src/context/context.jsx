import { createContext, useState } from "react";

export const ContextJsx = createContext()

export const ContextProvider = ({children}) => {

    const [photo, setPhoto] = useState('')
    const [pesq, setPesq] = useState('')
    
    return <ContextJsx.Provider value={{photo, setPhoto, pesq, setPesq}}>{children}</ContextJsx.Provider>;

}