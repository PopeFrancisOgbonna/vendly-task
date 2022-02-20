import React from 'react';
import styled from 'styled-components';



const UserList = ({users,selectUser}) => {
  return (
    <Wrap>
      <ul className="userlist">
        {
          users.map(user =>{
            return(
              <li key={user.id}  className='d-flex align-items-center'
                onClick={() => selectUser(`${user.username}`)}
              >
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
    </Wrap>
  );
}
 
export default UserList;

const Wrap =styled.div `
  .userlist{
    list-style:none;
    width:90%;
    margin:5% auto;
    padding:5px 10px;
    li{
      margin:5px 0;
      cursor:pointer;
    }
    li img{
      width:60px;
      height:60px;

      @media screen and (max-width:480px){
        width:40px;
        height:40px;
      }
    }
    div h6{
      @media screen and (max-width:480px){
        font-size:12px;
        font-weight:bold;
        margin-top:2%;
      }
    }
    div p{
      @media screen and (max-width:480px){
        font-size:10px;
        font-weight:400;
      }
    }
  }
`;