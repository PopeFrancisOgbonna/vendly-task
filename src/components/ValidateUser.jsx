import React from 'react';
import styled from 'styled-components';
import animation from '../util/lottie';
import Lottie from "react-lottie";
import { FaEllipsisH } from 'react-icons/fa';


const ValidateUser = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData:animation.lock,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  return (
    <Wrap>
      <div className="text-center my-4 mx-auto   valid-card">
        <Lottie options={defaultOptions} width={120} height={150}/>
        <h4>₦2,000.00</h4>
        <p>Please wait.</p>
        <p className='val'>Validating user credentials...</p>
        <button className="btn"><FaEllipsisH className='icon'/></button>
      </div>
    </Wrap>
  );
}
 
export default ValidateUser;

const Wrap = styled.div `
  .valid-card{
    width: 15rem;
    background:#fff;
    border-radius:6px;
    padding-top:10px;

    border:2px solid #abf2e3;
    @media screen and (max-width: 768px){
      width:45%;
    }
    @media screen and (max-width: 480px){
      width:60%;
    }
    @media screen and (max-width: 380px){
      width:70%;
    }

    img{
      width:120px;
    }
    p.val{
      color:#5ba2a4;
    }
    .btn{
      background:#17e7b3;
      margin:10px auto 25px auto;
      width:95%;

      .icon{
        font-size:28px;
      }
    }
    .btn:focus{
      box-shadow:none !important;  
    }
  }
`;