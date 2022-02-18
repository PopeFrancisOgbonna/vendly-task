import React, { useState } from 'react';
import styled from 'styled-components';
import Images from '../util/images';
import {FaAngleRight, FaArrowLeft} from "react-icons/fa"

const SurveyItems = ({children, text,style}) => {

  const [step,setStep] = useState(0);
  return (
    <Wrap>
      <div className="container-div my-3">
        <div className='card py-2 px-4 mx-auto my-md-5 flag-card'>
          <div>
            <h5 className='mt-4'>Survey complete!</h5>
            <img className='img-fluid flag' src={Images.flag} alt="success-flag" />
          </div>
          {children}
          <button className={style !=="light"?"btn": "btn lightBg"}>{text} <FaAngleRight className='ms-5'/></button>
          { step === 1?
            <p className='instruction text-center my-2'>Read<span className='ms-1' data-bs-toggle="modal" data-bs-target="#infoModal">Instructions</span></p>:
            <p className='text-center my-2 back'><FaArrowLeft className='me-1' />Go Back</p>
          }
        </div>
      </div>
      <div className="modal fade" id="infoModal" tabIndex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body p-4">
                <h5 className='mb-3'>Instructions</h5>
                <p>
                  You can redeem this voucher on the Roving 
                  Heights website by clicking on the "Redeem Now" button.
                </p>
                <p>
                  The discount code will be applied automatically. If not applied,
                  manually copy an dpast the discount code and follow the checkout instructions.
                </p>
                <p>
                  Delivery is also covered so that you don't have to make any further payments.
                </p>
              </div>
              <button type="button" className="btn btn-modal mx-4 mb-3" data-bs-dismiss="modal">Ok</button>
            </div>
          </div>
        </div>
    </Wrap>
  );
}
 
export default SurveyItems;

const Wrap = styled.div `
.container-div{
    
  .flag-card{
    width:25%;
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
  }
  .flag{
    border:1.5px solid #b4f3e4;
    width:100%;
  }
  .txt{
    margin:18% auto;
    font-size:16px;
    font-weight:600;
  }
  .btn{
    background:#006e72;
    color:#fff;
    font-weight:800;
    font-size:21px;
    @media screen and (max-width: 320px){
      font-size:16px;
    }
  }
  .lightBg{
    background:#E0FAF8 !important;
    color:#02d0bf !important;
    font-weight:700;
    font-size:20px;
    border:1.5px solid #b4f3e4;
    @media screen and (max-width: 320px){
      font-size:16px;
    }
  }
  .lightBg:focus{
    box-shadow:none !important;
  }
  p.instruction,p.back{
    color:#006e72;
    font-size:16px;
    font-weight:600;
    @media screen and (max-width: 320px){
      font-size:14px;
    }
  }
  p.back{
    cursor:pointer;
  }
  span{
    color:#40e8ce;
    cursor:pointer;
  }
}
.btn-modal{
  color:#fff;
  background:#006e72;
}
.modal-content{
  background:#e0faf8;

  p{
    font-size:14px;
    font-weight:400;
  }
}
`;