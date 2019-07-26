import React from "react"
import {DataContext} from "../../contexts/dataContext"
import DestinationSwitcher from "../DestinationSwitcher/DestinationSwitcher"
import Datepicker from "../Datepicker/Datepicker"
import {Btn1} from "../Buttons/Buttons"
import {Spinner} from "../Spinner/Spinner"
import Timetable from "../Timetable/Timetable"

export default function MainWindow() {
    return (
        <DataContext.Consumer>
            {context => (
                <>
                    <DestinationSwitcher/>
                    <Datepicker/>
                    <div className='text-left section-wrapper section-wrapper_sm position-relative'>
                        {
                            context.fetchError &&
                            <span className='fetch-error'>Сервер вернул ошибку</span>
                        }
                        <Btn1 text='Расписание' clickHandler={context.onGetTimetable}/>
                        {
                            context.loadingData && <div className='spinner-position'><Spinner/></div>
                        }
                    </div>
                    {
                        !context.loadingData && context.timetable && context.timetable.hasOwnProperty('list') &&
                        <Timetable/>
                    }
                </>
            )}
        </DataContext.Consumer>
    )
}