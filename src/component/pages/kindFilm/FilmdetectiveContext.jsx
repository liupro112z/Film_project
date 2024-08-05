import { createContext,useEffect,useState } from "react";
const FilmDetectiveContext=createContext()
function FilmDetectiveProvider({children}){
    const [item,setItem]= useState([])
    const fetchdata=()=>{
        fetch(`http://localhost:8000/detectiveFilm`)
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
        <FilmDetectiveContext.Provider value={item}>
            {children}
        </FilmDetectiveContext.Provider>
    )
}
export {FilmDetectiveContext , FilmDetectiveProvider}