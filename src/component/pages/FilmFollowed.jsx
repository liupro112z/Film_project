import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FilmContext } from "../pages/kindFilm/FilmContext";
import { FilmRomanceContext } from "./kindFilm/FilmromanceContext";
import { FilmDetectiveContext } from "./kindFilm/FilmdetectiveContext";
import { AccountContext } from "../handleComponent/handleConfig/fetchdata";
import {GoArchive} from 'react-icons/go'
import '../pages/FilmFollowed.css'
export default function FilmFollowed(props){
    const itemAction=useContext(FilmContext)
    const itemRomance=useContext(FilmRomanceContext)
    const itemDetective=useContext(FilmDetectiveContext)
    const itemAccount=useContext(AccountContext)
    const userId=localStorage.getItem("userId")
    const navagate=useNavigate()

    const hanldeUnfollow=(e)=>{
        if(window.confirm("Bạn muốn hủy theo dõi phim này!")==true){
            const element=e.target.parentElement.parentElement
            var title=element.getAttribute("idtitle")
            var idfilm=element.getAttribute("ididfilm")
            const checkUnfollow = itemAccount[localStorage.getItem('userId')-1].follow.find(item=>{
                if(item.title===title && item.idfilm===idfilm){
                    return true
                }
            })
            var follow=itemAccount[localStorage.getItem('userId')-1].follow.filter(item=>{
                return (item.title!==checkUnfollow.title && item.idfilm===checkUnfollow.idfilm) || (item.title===checkUnfollow.title && item.idfilm!==checkUnfollow.idfilm) ||(item.title!==checkUnfollow.title && item.idfilm!==checkUnfollow.idfilm)
            })
    
            var id=localStorage.getItem('userId'); //save userId
            var name=itemAccount[id-1].name
            var userName=itemAccount[id-1].userName
            var password=itemAccount[id-1].password
            var avatar=itemAccount[id-1].avatar
            const data={id,name,userName,password,avatar,follow}
            fetch(`http://localhost:3001/account/${id}`,{
                method: 'PUT',
                headers: {"content-type":"application/json"},
                body: JSON.stringify(data)
            }).then((res)=>{
                window.location.reload(false);
            }).catch((err)=>{
                console.log(err.message)
            })
        }
    }

    const handleFilmFollow=(title,idfilm,url,idtitle)=>{
         return (
             title.map(film=>{
                if(film.idFilm===Number(idfilm)){
                    return(
                        <div key={film.idFilm} idtitle={`${idtitle}`} ididfilm={`${film.idFilm}`} className="list-film-item">
                            <div className="unfollow" onClick={(e)=>hanldeUnfollow(e)}>
                                <GoArchive/>
                            </div>
                            <Link to={`${url}/${film.idFilm}`}>
                                <img src={film.img} alt="" />
                            </Link>
                            <p>{film.name}</p>
                        </div>
                    )
                }
            })

         )
    }
    return(
        <>
            {itemAccount.map(user=>{
                if(user.id===userId){
                    return(
                        <div key={user.id} className="">
                            <p className="title-filmfollow">Phim theo dõi</p>
                            <div className="list-filmfollow">
                            {user.follow.map(userFollow=>{
                                if(userFollow.title==="1"){
                                    return(
                                        <div key={Math.random()} className="">
                                        {   
                                            handleFilmFollow(itemAction,userFollow.idfilm,"/phim-hanh-dong","1")
                                        }
                                        </div>
                                    )
                                }else if(userFollow.title==="2"){
                                    return(
                                        <div  key={Math.random()}  className="">
                                        {
                                            handleFilmFollow(itemRomance,userFollow.idfilm,"/phim-tinh-cam","2")

                                        }
                                        </div>
                                    )
                                }else {
                                    return(
                                        <div  key={Math.random()}  className="">
                                        {
                                            handleFilmFollow(itemDetective,userFollow.idfilm,"/phim-trinh-tham","3")
                                                    
                                        }
                                        </div>
                                    )
                                }
                            })}
                            </div>
                        </div>
                    )
                }
                })
            }
        </>
    )
}