import React from 'react'
import './buttons.scss'

export const Btn1 = (props) =>
    <button className='btn-1' onClick={props.clickHandler}>{props.text}</button>