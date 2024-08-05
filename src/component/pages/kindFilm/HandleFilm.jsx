import { createContext, useContext, useState } from "react"
import { FilmContext } from "./FilmContext"
import { FilmRomanceContext } from "./FilmromanceContext"
import { FilmDetectiveContext } from "./FilmdetectiveContext"
import { AccountContext } from "../../handleComponent/handleConfig/fetchdata"
import { useParams,Link, useNavigate } from "react-router-dom"
import {MdOutlineBookmarkAdd} from 'react-icons/md'
import '../kindFilm/HandleFilm.css'
export default function HandleFilm(props){
    const params = useParams();
    var titleFilm={}
    var urlTitleFilm=''
    var titleId;
    if(props.titleFilm==='action'){
         titleFilm=FilmContext
         urlTitleFilm="/phim-hanh-dong"
         titleId=1
    }else if(props.titleFilm==='romance'){
         titleFilm=FilmRomanceContext
         urlTitleFilm="/phim-tinh-cam"
         titleId=2
    }else if(props.titleFilm==='detective'){
         titleFilm=FilmDetectiveContext
         urlTitleFilm="/phim-trinh-tham"
         titleId=3
    }
    const accountContext=useContext(AccountContext)
    const context=useContext(titleFilm)
    const hanldeFollow=(e)=>{
        e.preventDefault();
        var id=localStorage.getItem('userId'); //save userId
        var title=String(titleId)//save title Film
        var idfilm=params.idfilm;//save id Film in title Film
        var name;
        var userName;
        var password;
        var avatar="";
        var follow;
        accountContext.map
        (user=>{
            if(user.id===id)
            {
                name=user.name;
                userName=user.userName;
                password=user.password;
                avatar=user.avatar;
                const check=user.follow.find(item=>{
                    if(item.title===title && item.idfilm===idfilm){
                        return true
                    }
                    return false
                })
                // console.log(user.follow)
                // console.log(check)
                if(check){
                    follow=[...user.follow]
                }else{
                    follow=[...user.follow,{title,idfilm}]
                }
            }
        })
        const data={id,name,userName,password,avatar,follow}
        // console.log(data)
        fetch(`http://localhost:3001/account/${id}`,{
            method: 'PUT',
            headers: {"content-type":"application/json"},
            body: JSON.stringify(data)
        }).then((res)=>{
            alert('Add film into bookmark success')
            window.location.reload(false);
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    return(
        <div>
                {context.map(item=>{
                    if(String(item.idFilm)===String(params.idfilm)){
                        return(
                            <div key={item.idFilm} className="main">
                                <div className="container">
                                    <div className="name-film">
                                        <p>{item.name}</p>
                                        <div className="description">
                                            <div className="wrap-img">
                                                <img src={item.img} alt="" />
                                                {
                                                    localStorage.getItem("userId") &&
                                                    <p className="name-film-icon" onClick={hanldeFollow}><MdOutlineBookmarkAdd/>Theo dõi</p>
                                                }
                                            </div>
                                            <div className="description-text">
                                                <p className="text">Nội dung</p>
                                                <p className="content">{item.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chapter">
                                        <p>Danh sách tập</p>
                                        <div className="wrap-chapter">
                                            {item.chap.map(itemChapter=>(
                                                <Link key={itemChapter.idChapter} to={`${urlTitleFilm}/${item.idFilm}/chap/${itemChapter.idChapter}`} className="chapter-link">{itemChapter.idChapter}</Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            
        </div>
    )
}