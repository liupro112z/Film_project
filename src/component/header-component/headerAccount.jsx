import { useState,useContext, useEffect } from 'react';
import {Link,useNavigate,useParams} from 'react-router-dom'
import logoAccount from'../../img/account.png'; 
import { AccountContext } from '../handleComponent/handleConfig/fetchdata';
import '../header-component/header.css'
export default function HeaderAccount(){
    const [nameAccount,setNameAccount] = useState('Login')
    const [logo,setLogo] =useState(logoAccount)     
    const userAccount=useContext(AccountContext)
    const navagate = useNavigate();
    var userId= localStorage.getItem('userId')
    useEffect(()=>{
        if(userId!==null){
            userAccount.map((user)=>{
                if(user.id==userId){
                    setNameAccount(user.name)
                    if(user.avatar==="" || user.avatar===undefined){
                        setLogo(logoAccount)
                    }else{
                        setLogo(user.avatar)
                    }
                }
            })
        }else{
            setNameAccount('Login')
            setLogo(logoAccount)
        }
    })

    
    const [dropdown,setdropdown] = useState(false);
    const params=useParams()
    const params1=useParams()

    const handleClick=()=>{
        setdropdown(!dropdown)
    }

    useEffect(()=>{
        if(params1.signup===String('signup')){
            localStorage.removeItem('userId')
            setNameAccount('Login')
            setLogo(logoAccount)
        }
        // navagate('/home')
    },[params.signup])

    return(
        <div onClick={handleClick}  className="header-account">
            <img src={logo}></img>
            <div><p>
            {nameAccount}
                </p>
            {dropdown &&
            <div className="dropdown">
                {
                nameAccount!=='Login' && 
                <>
                    <Link to={`/account/${userId}`}>Trang cá nhân</Link>
                    <Link to='/follow'>Phim theo dõi</Link>
                    <Link to='/signup'>Đăng xuất</Link>
                </> || 
                <>
                <Link to='/login'>Đăng nhập</Link>
                <Link to='/register'>Đăng kí</Link>
                </>
                }
            </div>
            }        
            </div>

        </div>
    )
}