import React, { useState } from 'react';
import styled from 'styled-components';
import Lottie from "react-lottie";
import NavBar from './NavBar';
import {FaAngleRight, FaCheckCircle, FaTwitter} from "react-icons/fa"
import SurveyItems from './SurveyItems';
import dommieUsers from '../util/users';
import ValidateUser from './ValidateUser';
import UserList from './UserList';
import animation from "../util/lottie";

const Survey = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const [msg, setMsg] = useState("");
  const [found, setFound] = useState(0);
  const [hideIcon, setHideIcon] = useState("all");
  const [step,setStep] = useState(0);

  const handleStep =(step) =>{
    setStep(step);
  }

  const selectUser = (name) =>{
    setUser(name);
    setShow(false);
    setFound(0);
    setHideIcon('check');
    setTimeout(() => {
      setHideIcon('icons');
    }, 2000);
  }
  const handleInput = (event) =>{
    setHideIcon('all');
    if(user.length ===1 && !user.includes('@')){
      setFound(0);
      setLoading(true);
      setMsg("Fetching Search result")
      setShow(true);
      setTimeout(() => {
        setLoading(false);
        setMsg("No result found");
      },3000);
    }
    if(user.startsWith("@")){
      setMsg('');
      setFound(0);
      setLoading(true);
      setMsg("Fetching Search result")
      setShow(true);
      setTimeout(() => {
        setLoading(false);
        if(user.includes('@') && user.length !==2){
          setMsg('');
          setFound(1);
          setUsers(dommieUsers)
          return;
        }
        setMsg("No result found");
      },3000);
    }
    if(event.key ==='Enter'){
      setFound(0);
      setLoading(true);
      setMsg("Fetching Search result")
      setShow(true);
      setTimeout(() => {
        setLoading(false);
        if(user.includes('@')){
          setMsg('');
          setFound(1);
          setUsers(dommieUsers)
          return;
        }
        setMsg("No result found")
      },3000);
    }
  }

  const setOpt = (data)=>{
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData:data,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }
    return defaultOptions;
  }
  
  return ( 
    <Wrap>
      <NavBar />

      {step ===0?<SurveyItems step={step} handleStep ={handleStep}>
        <p className='text-center txt'>Thanks for your time!</p>
         <button className="btn" onClick={() => handleStep(1)}>Continue<FaAngleRight className='ms-5'/></button>
      </SurveyItems> : step ===1?
      <>
        <SurveyItems  step={step} handleStep ={handleStep}>
          <p className='text-center pass mt-2 mb-0'>Pass it on?</p>
          <p className="text-center mt-0">Nominate someone else to 
            take this incentivized survey.
          </p>
          <div className="input-div">
            <input type="text" name="tweet-handle" placeholder='Search/Insert their Tweeter handle' 
              value={user} onKeyDown={(e) => handleInput(e)}  onChange={(e) =>setUser(e.target.value)}
            />
            <div className={hideIcon ==='all'?'hide':"favicons"}>
              <FaCheckCircle className={hideIcon !=="icons"?'check rotate-scale-up':'hide'}/>
              <FaTwitter className={hideIcon !=='icons'?"hide":'tweet'}/>
              <div className={hideIcon !=="icons"?"hide":'heart'}><Lottie options={setOpt(animation.heart)}/></div>
            </div>
          </div>
          { hideIcon ==='icons'?
            <button className="btn" onClick={() => handleStep(3)}>Continue<FaAngleRight className='ms-5'/></button>:
            <button className="btn lightBg" onClick={() => handleStep(3)}>Skip<FaAngleRight className='ms-5'/></button>
          }
        </SurveyItems>

        <div className={show?"search-div":"hide"}>
          <div className="text-center mx-auto">
            {loading && <div className='icon'><Lottie options={setOpt(animation.loader)}/></div>}
            { (found !==1 && !loading) && <div className='icon'><Lottie options={setOpt(animation.search)}/></div>}
            <p className="text-center result-txt">{msg}</p>
          </div>
          { found !==0 &&
            <UserList users={users} selectUser={selectUser}/>
          }
        </div>
      </> : 
      <ValidateUser />
      
    }
    </Wrap>
  );
}
 
export default Survey;

const Wrap = styled.div `
  .hide{
    display:none;
  }
  .pass{
    font-weight:700;
    color:#053737;
  }
  .pass + p{
    color:#5ba2a4;
    line-height:16px;
    font-weight:600;
    font-size:14px;
  }
  .result-txt{
    color:#5ba2a4;
  }
  input{
    border-top:none;
    border-right:none;
    border-left:none;
    border-bottom:2px solid #208686;
    padding:2px;
    margin-bottom:10px;
    width:100%;
  }
  input::placeholder{
    color:#3fdcce !important;
    font-size:12px;
    font-weight:500;
  }
  input:focus{
    outline:none;
  }

  .search-div{
    background:#fff;
    width: 16rem;
    margin:4% auto;
    border:1.5px solid #b4f3e4;
    border-radius:8px;
    background:#E0FAF8;
    position: absolute;
    top:8%;
    left:37%;
    height:300px;
    
    @media screen and (max-width:768px){
      top:10%;
      left:26%;
      height:310px;
    }
    @media screen and (max-width:480px){
      top:10%;
      left:18%;
      height:250px;
      width:14rem;
    }
    @media screen and (max-width:380px){
      top:11%;
      left:12%;
      height:260px;
      width:14rem;
    }

    .icon{
      width:180px;
      height:180px;
      background: #fff;
      padding:5px;
      margin:25% auto 0 auto;
      @media screen and (max-width:480px){
        width:140px;
      }
    }
  }

 
  .input-div{
    position:relative;

    .favicons{
      display:flex;
      align-items:center;
      width:max-content;
      position:absolute;
      bottom:14px;
      right:12px;
      .check,.heart{
        width:30px;
      }
      .check{
        color:#17e7b3;
      }
      .tweet{
        color:#0077b6;
      }
      .rotate-scale-up {
        animation: rotate-scale-up 1s cubic-bezier(0.550, 0.055, 0.675, 0.190) infinite;
      }
    }
  }
  
  @keyframes rotate-scale-up {
    0% {
      transform: scale(1.3) rotateZ(0);
    }
    100% {
      transform: scale(1) rotateZ(360deg);
    }
  }
  
`;