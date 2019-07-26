import React from "react"
import {DataContext} from "../../contexts/dataContext"
import './trackWindow.scss'
import DelayIndicator from "../DelayIndicator/DelayIndicator"

export default function TrackWindow() {
    return (
        <DataContext.Consumer>
            {context => (
                <div className='track-window section-wrapper'>
                    <span className='close-btn' onClick={context.closeTracking}>&times;</span>
                    <h2>Номер поезда: {context.trackedTrainNumber}</h2>
                    <h3 className='mb-5'>{context.trackedTrainTime}</h3>

                    <div className='mb-5'>
                        <DelayIndicator trackTimerAmount={context.trackTimerAmount}/>
                    </div>
                    {
                        context.ticketsFound
                            ? <h1>Билеты найдены!!!</h1>
                            : <h1>Билетов нет</h1>
                    }
                </div>
            )}
        </DataContext.Consumer>
    )
}