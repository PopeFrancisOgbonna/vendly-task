import React from 'react';
import styled from 'styled-components';
import Images from '../util/images';
import { FaEllipsisH } from 'react-icons/fa';


const ValidateUser = () => {
  return (
    <Wrap>
      <div className="text-center my-4 mx-auto   valid-card">
        <img src={Images.lock} alt="" className="img-fluid my-4" />
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