import React,{useState} from "react";
import '../romanceFilm/RomanceFilm.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FilmRomanceContext } from "../FilmromanceContext";
import Footer from "../../../Footer";

export default function RomanceFilm(props){
    const item=useContext(FilmRomanceContext)
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
                                        <Link to={`/phim-tinh-cam/${user.idFilm}`}>
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