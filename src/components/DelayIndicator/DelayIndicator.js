import React from "react"
import './delayIndicator.scss'

export default function DelayIndicator(props) {
    return (
        <div className='delay-indicator'>
            <div className="delay-indicator__scale" style={{animationDuration: `${props.trackTimerAmount}s`}}>
            </div>
        </div>
    )
}