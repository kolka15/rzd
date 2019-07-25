import React from 'react'
import './timetable.scss'
import {DataContext} from "../../contexts/dataContext"

export default function Timetable() {

    const renderFreeSeats = (seats) => {
        seats.map(category =>
            <div>
                места:
                <div>{category.typeCarLoc}:{category.freeSeats}</div>
            </div>
        )
    }

    return (
        <DataContext.Consumer>
            {context => (
                <div className='timetable section-wrapper section-wrapper_sm'>
                    {
                        context.timetable.list.map(train =>
                            <div className='timetable__row'>

                                <div className='mb-3'>Номер поезда: {train.number2}</div>
                                <div className='mb-3'>{train.route0} &mdash; {train.route1}</div>
                                <div className='mb-3'>{train.station0} &mdash; {train.station1}</div>
                                <div className='mb-3'>{train.date0} {train.time0}</div>
                                {
                                    train.serviceCategories && train.serviceCategories.length
                                        ? renderFreeSeats(train.serviceCategories)
                                        : <div>Мест нет</div>
                                }
                            </div>
                        )
                    }
                </div>
            )}
        </DataContext.Consumer>
    )
}