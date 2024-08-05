import { useNavigate } from 'react-router-dom';
import './Register.css';
import { useEffect, useState } from 'react';
export default function Register(){
    const [name,setName]=useState('')
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const avatar=""
    const follow=[]
    const navigate=useNavigate()
    const [fetchData,setFetchData]=useState('')
    useEffect(()=>{
        fetch('http://localhost:3000/account')
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setFetchData(data)
        })
    },[])
    var id=String(fetchData.length+1)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={id,name,userName,password,avatar,follow};
        console.log(data);
        fetch('http://localhost:3000/account',{
            method: 'POST',
            headers: {"content-type":"application/json"},
            body: JSON.stringify(data)
        }).then((res)=>{
            alert('create account success')
            navigate('/login')
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    return(
        <div className="register">
           <div className="register-form">
            <p>Đăng kí</p>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label name="nam">Họ và tên</label>
                        <input value={name} onChange={e=>setName(e.target.value)} type="text" name="name" required />
                    </div>
                    <div className="input-container">
                        <label>Tên đăng nhập </label>
                        <input value={userName} onChange={e=>setUserName(e.target.value)} type="text" name="uname" required />
                    </div>
                    <div className="input-container">
                        <label>Mật khẩu </label>
                        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="pass" required />
                    </div>
                    <div className="input-container">
                        <label>Xác nhận mật khẩu</label>
                        <input type="password" name="pass" required />
                    </div>
                    <div className="button-container">
                <input type="submit" />
            </div>
          </form>
        </div>
           </div>
        </div>
    )
}