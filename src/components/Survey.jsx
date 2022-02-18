import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Images from '../util/images';
import {FaAngleRight} from "react-icons/fa"
import SurveyItems from './SurveyItems';
import dommieUsers from '../util/users';


const Survey = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");

  const handleInput = (event) =>{
    if(event.key ==='Enter'){
      console.log(user)
      if(user.includes('@')){
        setUsers(dommieUsers)

      }
      console.log(users)
      setLoading(true);
      setShow(true);
      setTimeout(() => {
        
        setLoading(false);
      },3000);
    }
  }

  return ( 
    <Wrap>
      <NavBar />
      {/* <SurveyItems text="Continue">
        <p className='text-center txt'>Thanks for your time!</p>
      </SurveyItems> */}
      <SurveyItems text="Skip" style="light">
        <p className='text-center pass mt-2 mb-0'>Pass it on?</p>
        <p className="text-center mt-0">Nominate someone else to 
          take this incentivized survey.
        </p>
        <input type="text" name="tweet-handle" placeholder='Search/Insert their Tweeter handle' 
          onKeyDown={(e) => handleInput(e)}  onChange={(e) =>setUser(e.target.value)}
        />
      </SurveyItems>
      <div className={show?"search-div":"hide"}>
        <div className="text-center mx-auto">
          {loading && <img src={Images.loader} alt="loader" className="img-fluid icon" />}
          { (!users.length && !loading) && <img src={Images.searchError} alt="loader" className="img-fluid icon" />}
          <ul className="userlist">
            {
              users.map(user =>{
                return(
                  <li key={user.id}  className='d-flex '>
                    <img src={user.image} alt="user" className='me-2' />
                    <div>
                      <h6 className='mb-0'>{user.name}</h6>
                      <p>{user.username}</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          <p className={(!users.length && !loading)?"text-center result-txt":"hide"}>No results found</p>
        </div>
      </div>
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

    .icon{
      width:180px;
      padding:5px;
      margin:25% auto 0 auto;
    }
  }

  .userlist{
    list-style:none;
    background:#fff;
    width:90%;
    margin:4px auto;
    li{
      margin:3px 0;
      border:1px solid #fff;
    }
    li img{
      width:30px;
      height:30px;
    }
  }
  
`;