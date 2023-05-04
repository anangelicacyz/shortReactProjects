import React from "react";
import '../stylesheets/button.css'
function Button ({texto, isClickButton, manageClick}){
  return(
    <button
      className={ isClickButton? 'click-button' : 'restart-button' }
      onClick= {manageClick}>
      {texto}
    </button>
  )
}export default Button