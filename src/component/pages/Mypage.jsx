import { useContext,useState } from "react"
import { AccountContext } from "../handleComponent/handleConfig/fetchdata"
import { useParams } from "react-router-dom"
import '../pages/Mypage.css'
export default function Mypage(){
    const dataUser=useContext(AccountContext)
    // const [selectedImage, setSelectedImage] = useState(null);
    const params =useParams()
    const [changePass,setChangePass]=useState(false)
    const [oldPass,setOldPass]=useState('')
    const [newPass,setNewPass]=useState('')
    const [confirmNewPass,setConfirmNewPass]=useState('')
    const setTableChangePass=()=>{
        setChangePass(!changePass)
    }

    const handleChangePass=()=>{
        const check=dataUser[localStorage.getItem('userId')-1]
        console.log(check.password)
        if(check.password!==oldPass){
            alert('Mật khẩu hiện tại không chính xác!')
            setOldPass('')
            setNewPass('')
            setConfirmNewPass('')
            return
        }
        if(newPass!==confirmNewPass){
            alert('Xác nhận mật khẩu không chính xác!')
            setOldPass('')
            setNewPass('')
            setConfirmNewPass('')
        }else{
            var id=localStorage.getItem('userId');
            var name=dataUser[id-1].name;
            var userName=dataUser[id-1].userName;
            var password=newPass;
            var avatar=dataUser[id-1].avatar;
            var follow=dataUser[id-1].follow;
            const data={id,name,userName,password,avatar,follow}
            fetch(`http://localhost:3001/account/${id}`,{
                method: 'PUT',
                headers: {"content-type":"application/json"},
                body: JSON.stringify(data)
            }).then((res)=>{
                alert("Đổi mật khẩu thành công")
                window.location.reload(false);
            }).catch((err)=>{
                console.log(err.message)
            })
        }
    }
    // const upLoadImg=(event)=>{
    //     const file=event.target.files[0];
    //     console.log(URL.createObjectURL(file));
    //     // setSelectedImage(event.target.files[0]);
    // }

    return(
        <div className="main">
                {dataUser.map((user)=>{
                    if(user.id===params.accountId){
                        return(
                            <div key={user.id} className="container">
                                <div className="info">
                                    <img src={user.avatar} alt="" className="info-img"/>
                                    <div className="info-set">
                                        <p className="username">{user.name}</p>
                                        <p className="setPassword" onClick={setTableChangePass}>Đổi mật khẩu</p>
                                        <div>
                                        <input
                                            type="file"
                                            // onChange={upLoadImg}
                                        />
                                        </div>
                                    </div>
                                    {changePass && 
                                    <div className="changepass">
                                        <p>Đổi Mật Khẩu</p>
                                        <form action="">
                                            <div className="wrapinput">
                                                <label htmlFor="oldpass">Nhập mật khẩu hiện tại</label>
                                                <input 
                                                type="password" 
                                                className="pass" 
                                                value={oldPass}
                                                onChange={(e)=>{setOldPass(e.target.value)}}
                                                />
                                            </div>
                                            <div className="wrapinput">
                                                <label htmlFor="newpass">Nhập mật khẩu mới</label>
                                                <input 
                                                type="password"
                                                className="pass"
                                                value={newPass}
                                                onChange={(e)=>{setNewPass(e.target.value)}}
                                                />
                                            </div>
                                            <div className="wrapinput">
                                                <label htmlFor="newpass">Xác nhận mật khẩu mới</label>
                                                <input
                                                type="password"
                                                className="pass"
                                                value={confirmNewPass}
                                                onChange={(e)=>{setConfirmNewPass(e.target.value)}}
                                                />
                                            </div>
                                        </form>
                                        <button className="btnChangePass" onClick={handleChangePass}>Xác nhận</button>
                                    </div>
                                    }
                                </div>
                            </div>
                        )
                    }
                })}
        </div>
    )
}