import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import contextMenu from '../context/ContextSnip'
import Alert from './Alert'

export default function Home() {
  const navigate=useNavigate()
  const globalState=useContext(contextMenu)
 
  return (
    <div className="container">
      {globalState.state.login&& <Alert Status="Success" description="You are welcomed" />}
      <p className="heading">Welcome to iTodos</p>
      <p className='Quote'>Leave paper behind, make work Ecofriendly</p>
      <div id="animatedBox">
        <p className="non-heading">The Digital TodoApp to store Todos on iCloud</p>
        <div className="flex">
          <p className="flex-item">Write todos with our easy to use workarea</p>
          <p className="flex-item">Store todos on our secure Database</p>
          <p className="flex-item">Manage your todos Efficiently in organized way</p>
        </div>
        <button onClick={()=>{
          if(globalState.state.login){
            //do logout
            navigate('/WorkArea')
          }
          else{
            navigate("/login")
          }
          
        }}>{globalState.state.login?"Go To WorkArea":"Login/Sign-up"}</button>
      </div>
    </div>
  )
}
