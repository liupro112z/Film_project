import { useContext } from "react"
import { FilmContext } from "./FilmContext"
import { FilmRomanceContext } from "./FilmromanceContext"
import { FilmDetectiveContext } from "./FilmdetectiveContext"
import { useParams,useSearchParams } from "react-router-dom"
import '../kindFilm/HandleFilmWatch.css'
export default function HandleFilmWatch(props){
    const paramsId=useParams()
    const paramsIdChapter=useParams()
    var titleFilm={}
    if(props.titleFilm==='action'){
         titleFilm=FilmContext
    }else if(props.titleFilm==='romance'){
         titleFilm=FilmRomanceContext
    }else if(props.titleFilm==='detective'){
         titleFilm=FilmDetectiveContext
    }
    const contextItem=useContext(titleFilm)
    return(
        <div>
            {contextItem.map(item=>{
                if(String(item.idFilm)===String(paramsId.idfilm)){
                    return(
                        <div key={item.idFilm} className="main1">
                            {item.chap.map(itemChapter=>{
                                if(String(itemChapter.idChapter)===String(paramsIdChapter.idchap)){
                                    return (
                                        <div key={itemChapter.idChapter} className="container">
                                            <p className="name-film">{item.name}</p>
                                            <p className="chapter-film">Tập: {itemChapter.idChapter}</p>
                                            <video src={itemChapter.src} autoPlay controls></video>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    )
                }
            })}
        </div>
    )
}