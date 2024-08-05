import HeaderTop from './header-component/headerTop'
import HeaderNavbar from'./header-component/headerNavbar'
export default function Header(){
    return(
        <div className="header">
            <HeaderTop/>
            <HeaderNavbar/>
        </div>
    )
}