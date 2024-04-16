import react,{createContext,useContext,useState} from "react";


const MyContext=createContext()

export const MyContextProvider=({children})=>{
    const [isScroll,setIsScroll]=useState(0)
    const [id,setId]=useState(null)

    return (
        <MyContext.Provider value={{isScroll,setIsScroll,id,setId}} >
            {children}
        </MyContext.Provider>
    )
}

export const useMyContext=()=>{
    return useContext(MyContext)
}