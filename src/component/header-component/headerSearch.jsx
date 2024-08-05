import { useContext,useEffect,useState } from 'react';
import {FilmContext } from '../pages/kindFilm/FilmContext';
import {FilmRomanceContext } from'../pages/kindFilm/FilmromanceContext';
import { FilmDetectiveContext } from '../pages/kindFilm/FilmdetectiveContext';
import { Link } from 'react-router-dom';
import './headerSearch.css'
export default function HeaderSearch(){
    const itemAction=useContext(FilmContext)
    const itemRomance=useContext(FilmRomanceContext)
    const itemDetective=useContext(FilmDetectiveContext)
    const [search,setSearch]=useState('...')
    
    const reset=(str)=>{
    str=str.toLowerCase()
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); 
    str = str.replace(/\u02C6|\u0306|\u031B/g, "");
    return str
    }
    const hanldeNotFocus=()=>{
        setSearch('...')
    }
    return (
        <div className="search">
            <input type="search" onChange={(e)=>{
                if(e.target.value===" " || e.target.value===""){
                    setSearch('...')
                }else{
                    setSearch(reset(e.target.value))
                }
                }} className="header-search" placeholder="Tìm kiếm..." />
            <div className="list-search">
                {itemAction.map((film,index)=>{
                    if(reset(film.name).includes(search)){
                        console.log(film.name)
                        return(
                            <Link to={`/phim-hanh-dong/${film.idFilm}`} key={'1'+index} className='list-search-link' onClick={hanldeNotFocus}>
                                <img src={film.img} alt="" />
                                <div className="list-search-title">
                                    <p>{film.name}</p>
                                    <p>{film.chap.length} Tập</p>
                                </div>  
                            </Link>
                        )
                    }
                })}
                {itemRomance.map((film,index)=>{
                    if(reset(film.name).includes(search)){
                        console.log(film.name)
                        return(
                            <Link to={`/phim-tinh-cam/${film.idFilm}`} key={'1'+index} className='list-search-link' onClick={hanldeNotFocus}>
                                <img src={film.img} alt="" />
                                <div className="list-search-title">
                                    <p>{film.name}</p>
                                    <p>{film.chap.length} Tập</p>
                                </div>  
                            </Link>
                        )
                    }
                })}
                {itemDetective.map((film,index)=>{
                    if(reset(film.name).includes(search)){
                        console.log(film.name)
                        return(
                            <Link to={`/phim-trinh-tham/${film.idFilm}`} key={'1'+index} className='list-search-link' onClick={hanldeNotFocus}>
                                <img src={film.img} alt="" />
                                <div className="list-search-title">
                                    <p>{film.name}</p>
                                    <p>{film.chap.length} Tập</p>
                                </div>  
                            </Link>
                        )
                    }
                })}
            </div>
        </div>
    )
}