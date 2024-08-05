import { createContext,useEffect,useState } from "react";
const FilmContext=createContext()
function FilmProvider({children}){
    const [item,setItem]= useState([])
    const fetchdata = () => {
        fetch('http://localhost:8000/actionFilm')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const contentType = res.headers.get('content-type');
                if (!contentType || !contentType.includes('application/json')) {
                    throw new TypeError("Oops, we haven't got JSON!");
                }
                return res.json();
            })
            .then(data => {
                setItem(data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    };
    useEffect(()=>{
        fetchdata()
    },[])
    return(
        <FilmContext.Provider value={item}>
            {children}
        </FilmContext.Provider>
    )
}
export {FilmContext , FilmProvider}