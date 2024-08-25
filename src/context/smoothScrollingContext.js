'use client'

import { useEffect,useState,useContext,createContext } from "react"
import Lenis from "lenis"

const smoothScrollingContext=createContext()


export const useSmoothScroller=()=>useContext(smoothScrollingContext)

export default function ScrollContext({children}){
    const [lenisRef,setLenis]=useState(null);
    const [rafState, setRaf]=useState(null);

    useEffect(()=>{
        const scroller=new Lenis();
        let rf;

        function raf(time){
            scroller.raf(time);
            requestAnimationFrame(raf);
        }

        rf=requestAnimationFrame(raf);
        setRaf(rf);
        setLenis(scroller)


        return ()=>{
            if(lenisRef){
                cancelAnimationFrame(rafState);
                lenisRef.destroy()
            }
        }

    },[])

    return <smoothScrollingContext.Provider value={lenisRef}>
        {children}
    </smoothScrollingContext.Provider>
}