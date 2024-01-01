import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../../context/user-context';
import "./thankyoupage.css";

const ThankYouPage = () => {
  const {thankyou, closeThankyou} = useContext(UserContext);

  const handleClose = () =>{
    closeThankyou();
  }
  return (
    <div className={`thankyou ${thankyou ? 'thankyou-open' : "thankyou-close"}`}>
        <div>
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/><path stroke="#FFF" stroke-width="5" d="M20 31.86L28.093 40 44 24"/></g></svg>
        </div>
        
        <div>Thanks for your support!</div>

        <div>Your pledge brings us one step closer to sharing Mastercraft
        Bamboo Monitor Riser worldwide. You will get an email once our campaign is 
        completed.</div>

        <button type='button' onClick={handleClose}>Got it!</button>
    </div>
  )
}

export default ThankYouPage;