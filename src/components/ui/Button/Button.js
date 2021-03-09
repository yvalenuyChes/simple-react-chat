import React from 'react'
import classes from './Button.module.scss'

const Button = props => {
   return (
      <>
         <button
            className={classes.button}
            type="button"
            disabled={props.disabled}
            onClick={props.onClick}
         >{props.buttonText}</button>
      </>
   )
}

export default Button