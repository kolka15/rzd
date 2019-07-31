import React from 'react'
import './timetable.scss'
import {DataContext} from "../../contexts/dataContext"
import {Btn1Green} from "../Buttons/Buttons"

export default function Timetable() {

    const renderFreeSeats = (seats) =>
        <div>
            <div className='mb-1'>Места:</div>

            {
                seats.map((category, i) =>
                    <div key={i}>
                        <div>{category.typeCarLoc} : {category.freeSeats}</div>
                    </div>
                )
            }
        </div>

    return (
        <DataContext.Consumer>
            {context => (
                <div className='timetable section-wrapper section-wrapper_sm'>
                    {
                        context.timetable.list.map(train =>
                            <div key={train.number2} className='timetable__row d-flex'>

                                <div>
                                    <div className='mb-3'>Номер поезда: {train.number2}</div>
                                    <div className='mb-3'>{train.route0} &mdash; {train.route1}</div>
                                    <div className='mb-3'>{train.station0} &mdash; {train.station1}</div>
                                    <div className='mb-3'>{train.time0}</div>
                                    {
                                        train.serviceCategories && train.serviceCategories.length
                                            ? renderFreeSeats(train.serviceCategories)
                                            : <div className='booked'>Мест нет</div>
                                    }
                                </div>
                                <div className="d-flex align-items-end">

                                    {
                                        !train.serviceCategories.length &&
                                        <div>
                                            <Btn1Green text='Включить отслеживание' clickHandler={()=>context.trackTicket(train)}/>
                                        </div>
                                    }

                                </div>
                            </div>
                        )
                    }
                </div>
            )}
        </DataContext.Consumer>
    )
}