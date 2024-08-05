import {Link} from 'react-router-dom'
import ActionFilm from '../pages/kindFilm/actionFilm/ActionFilm'
import {useState} from 'react'
import '../header-component/header.css'
export default function HeaderNavbar(){
    return(
        <ul className="header-navbar ">
            <li><Link to='/home'>Trang chủ</Link></li>
            <li><Link className='header-navbar-tl'>Thể loại</Link>
                <ul className="dropdown-link">
                    <li><Link to='/phim-hanh-dong'>Phim hành động </Link></li>
                    <li><Link to='/phim-tinh-cam'>Phim tình cảm </Link></li>
                    <li><Link to='/phim-trinh-tham'>Phim trinh thám </Link></li>
                </ul>
            </li>
            <li><Link to='/phimmoi'>Phim mới</Link></li>
            <li><Link to='/phimbo'>Phim bộ</Link></li>
            <li><Link to='/phimle'>Phim lẻ</Link></li>
            <li><Link to='/phimchieurap'>Phim chiếu rạp</Link></li>
            <li><Link to='/quocgia'>Quốc gia</Link>
                <ul className="dropdown-link ">
                    <li><Link to='/country/vietnam'>Việt Nam</Link></li>
                    <li><Link to='/country/hanquoc'>Hàn Quốc</Link></li>
                    <li><Link to='/country/trungquoc'>Trung Quốc</Link></li>
                    <li><Link to='/country/nhatban'>Nhật Bản</Link></li>
                    <li><Link to='/country/my'>Mỹ</Link></li>
                </ul>
            </li>
        </ul>
    )
}