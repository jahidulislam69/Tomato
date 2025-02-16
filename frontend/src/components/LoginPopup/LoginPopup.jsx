import React, { useState} from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"


export default function LoginPopup({setShowLogin}) {
    const {url,token, setToken} =useContext(StoreContext);

    const [currState, setCurrState] = useState("Login")
    const [data,setData] = useState({
        name: "",
        email:"",
        password: ""
    })

    const onChangeHandler = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData(data=>({...data, [name]:value}))
    }

    const onLogin = async (e)=>{
        e.preventDefault(); // Prevent default form submission
        let newUrl = url;
        if (currState=== "Login"){
            newUrl += "/api/user/login"
        } else{
            newUrl += "/api/user/register"
        }
        try {
            const response = await axios.post(newUrl, data);
            if(response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token)
                setShowLogin(false)
            } else{
                alert(response.data.message)
            }
        } catch (error) {
            alert("An error occurred: " + error.message);
        }
    }


  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
            </div>
            <button type="submit">{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, I agree to the terms of use & Privacy Policy</p>
            </div>
            {currState==="Login"?
            <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>:
            <p>Already have an account <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
            }
        </form>
      
    </div>
  )
}
