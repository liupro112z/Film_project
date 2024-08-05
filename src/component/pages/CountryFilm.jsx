import { Link } from "react-router-dom"
import { useContext } from "react"
import { FilmContext } from "./kindFilm/FilmContext"
import { FilmRomanceContext } from "./kindFilm/FilmromanceContext"
import { FilmDetectiveContext } from "./kindFilm/FilmdetectiveContext"
import { useParams } from "react-router-dom"
export default function CountryFilm(){
    const params=useParams()
    const itemAction=useContext(FilmContext)
    const itemRomance=useContext(FilmRomanceContext)
    const itemDetective=useContext(FilmDetectiveContext)
    const handleCountryFilm=(titleFilm)=>{
        return(
            <div className="">
                {
                    titleFilm.map((film=>{
                        if(film.country===params.country){
                            return(
                                <div className="list-film-item" key={film.id}>
                                    <Link to={`/phim-hanh-dong/${film.idFilm}`}>
                                        <img src={film.img}></img>
                                    </Link>
                                    <p>{film.name}</p>
                                </div>
                            )
                        }
                       }))
                }
            </div>
        )

    }
    return(
        <div className="country-film">
                <div className="action-film">
                    <div className="">
                        {
                            handleCountryFilm(itemAction)
                        }
                    </div>
                    <div className="">
                        {
                            handleCountryFilm(itemRomance)
                        }
                    </div>
                    <div className="">
                        {
                            handleCountryFilm(itemDetective)
                        }
                    </div>
                </div>
        </div>
    )
}