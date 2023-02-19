import './login.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios  from 'axios';
import { Link } from 'react-router-dom';
export default function AdminLogin() {
  const [id,setuname]=useState();
  const[pwd,setpwd]=useState();
  const navigate=useNavigate();
  const validate=()=>{
      if(id=='' && pwd==''){
        alert("Fill credentials");
      }
      else if(id==="admin" && pwd==="admin123"){
                console.log(id)
               navigate('/home/'+id);
      }
      else{
        alert("please verify credentials")
        }
        
    }

  return (
    <div className='loginContainer'>
      <div className="loginWrapper">
        <div className="loginLeft">
            
            <h3 className='loginLogo'>YOUR BANK</h3>
            <span className="loginDesc">Connect the world around <b>Your Bank</b> </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
            <img src="https://thumbs.dreamstime.com/b/simple-clean-crisp-creative-yb-logo-icon-design-vector-format-creative-yb-logo-icon-design-171889908.jpg" alt="" 
            className="loginlogo" />
            
              <input type="text" placeholder='Employee ID' className="loginInput" onChange={(e)=>setuname(e.target.value)} />
              <input type="password" placeholder='Password' className="loginInput" onChange={(e)=>setpwd(e.target.value)}/>
              <button type="submit" className="loginButton" onClick={validate}>Log IN</button>
              {/* <span className="loginForgot">Forgot Password</span> */}
              <div><Link to="/login" className='loginAdmin'>Not Admin?Employee </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}