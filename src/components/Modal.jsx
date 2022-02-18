import React, { Children } from 'react';
import styled from 'styled-components';


const Modal = ({children,handleShow,show}) => {
  const showModal = show ? "myModal display-block":"myModal display-none";
  return (
    <Wrap className={showModal}> 
      <section>
        {children}
      </section>
      <button className="btn" onClick={handleShow}>Ok</button>
    </Wrap>
  );
}
 
export default Modal;

const Wrap = styled.div `
  .myModal {
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
  .display-block {
    display: block;
  }
  
  .display-none {
    display: none;
  }
`;