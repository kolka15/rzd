import './spinner.scss'
import React from 'react'

const Spinner = () => {
    return (
        <div className="lds-ellipsis mx-3">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export {Spinner}