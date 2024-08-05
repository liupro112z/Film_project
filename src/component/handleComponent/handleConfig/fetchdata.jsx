import { createContext,useEffect,useState } from "react";
const AccountContext=createContext()
function AccountProvider({children}){
    const [item,setItem]= useState([])
    const fetchdata=()=>{
        fetch(`http://localhost:3000/account`)
            .then(res=>{
                return res.json()
            })
            .then(data=>{
                setItem(data)
            })
    }
    useEffect(()=>{
        fetchdata()
    },[])
    return(
        <AccountContext.Provider value={item}>
            {children}
        </AccountContext.Provider>
    )
}
export {AccountContext , AccountProvider}