import React from "react";
import { Link,useParams } from "react-router-dom";
import { useContext } from "react";
import { FilmDetectiveContext } from "../FilmdetectiveContext";
import Footer from "../../../Footer";
import '../detectiveFilm/DetectiveFilm.css'
export default function DetectiveFilm(props){
    const item=useContext(FilmDetectiveContext)
    return(
        <>
            <div className="">
                <div className="action-film">
                    {item.length>0 &&
                        <div className="list-film">
                            { item.map(user=>{
                                if(user.idFilm<=props.id){
                                    return(
                                    <div className="list-film-item" key={user.idFilm}>
                                        <Link to={`/phim-trinh-tham/${user.idFilm}`}>
                                            <img src={user.img}></img>
                                        </Link>
                                        <p>{user.name}</p>
                                    </div>
                                    )
                                }
                            }
                            )}
                        </div>
                    }
                </div>
            </div>
            {props.id >10 &&
            <Footer/>
            }
        </>
    )
}