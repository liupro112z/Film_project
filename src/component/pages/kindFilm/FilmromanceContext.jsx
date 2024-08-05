import { createContext,useEffect,useState } from "react";
const FilmRomanceContext=createContext()
function FilmRomanceProvider({children}){
    const [item,setItem]= useState([])
    const fetchdata=()=>{
        fetch(`http://localhost:8000/romanceFilm`)
            .then(res=>{
                return res.json()
            })
            .then(data=>{
                setItem(data)
            })
    }
    useEffect(()=>{
        fetchdata()
    },[])
    return(
        <FilmRomanceContext.Provider value={item}>
            {children}
        </FilmRomanceContext.Provider>
    )
}
export {FilmRomanceContext , FilmRomanceProvider}