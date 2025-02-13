import React, { useState, useContext } from 'react'

import './login.css'
import { Link, useNavigate} from 'react-router-dom'
import contextMenu from '../context/ContextSnip'
import { links } from './links'
export default function Login() {
    const [state, setstate] = useState({'email':'','password':''})
    const navigate=useNavigate()
    const globalState=useContext(contextMenu)
    const [loading, setloading] = useState(false)
    const [loginMsg, setloginMsg] = useState("")
    const changeVal=(e)=>{
        if(e.target.type==='text'){
            setstate({'email':e.target.value,'password':state.password})
        }
        else{
            setstate({'email':state.email,'password':e.target.value})

        }
    }
    const CheckAuth=async(e)=>{
        e.preventDefault()
        setloading(true)
        // alert(globalState.state.login) 
        const options={
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({'email':state.email,'password':state.password})
        }
     
        let result=await fetch(links.login,options)
        let jsonResult=await result.json()
        if(jsonResult.Success===1){
            localStorage.setItem("token",jsonResult.token)
            localStorage.setItem("user",jsonResult.username)
            globalState.update({login:true})
            //redirect
            navigate('/')
        }
        else{
          
            let Message=""
            if("email" in jsonResult.error){
                Message+="Provide a correct and valid Email only"
            }
            if("password" in jsonResult.error){
                Message+="Provide a correct Password only"
            }
            setloginMsg(Message)
            setTimeout(()=>{
                setloginMsg("")
            },3000)
        }
        setloading(false)
    }
    const MoveToRegister=()=>{
        navigate("/Register")
    }
  return (
    <>
    
    <div className="loginArea" >
        <form className="LoginForm" onSubmit={CheckAuth}>
            <img id="profile" src={require('../Images/profile.png')} alt="" />
            <div className="field">
                <img src={require('../Images/user.png')} alt="" />  
                <input type="text" name="email" placeholder='Enter email id' onChange={changeVal} value={state.email}/>             
            </div>
            <div className="field">
                <img src={require('../Images/password.png')} alt="" />   
                <input type="password" name="password" placeholder='Enter password' onChange={changeVal} value={state.password}/>             
            </div>
            <div className="submit-panel">
                <p onClick={MoveToRegister} style={{color:"yellow"}}>Register me</p>
                {!loading&&<button type="submit">Login</button>}
                {loading&&<div className="loader"></div>}
            </div>
        </form>
        <p className="alertMsg">{loginMsg}</p>
       
    </div>
    </>
  )
}
