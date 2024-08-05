import {Link} from 'react-router-dom'
import logo from "../../img/logoweb.png";
import '../header-component/header.css'
import HeaderAccount from './headerAccount';
import HeaderSearch from './headerSearch';
export default function HeaderTop(){
    return(
        <div className="header-top">
            <Link to='/home' className="header-logo">
                <img src={logo} alt=""/>
                <p>Phimhay.com</p>
            </Link>
            <HeaderSearch/>
            {/* <input type="search" className="header-search" placeholder="Tìm kiếm..." /> */}
            <HeaderAccount/>
        </div>
    )
}