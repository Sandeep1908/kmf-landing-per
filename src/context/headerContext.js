import react,{createContext,useContext,useState} from "react";


const MyContext=createContext()

export const MyContextProvider=({children})=>{
    const [isScroll,setIsScroll]=useState(false)

    return (
        <MyContext.Provider value={{isScroll,setIsScroll}} >
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext=()=>{
    return useContext(MyContext)
}