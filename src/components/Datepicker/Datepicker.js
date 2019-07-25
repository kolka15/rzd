import React from 'react'
import DatePicker, {registerLocale} from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './datepicker.scss'
import addDays from 'date-fns/addDays/index'
import ru from 'date-fns/locale/ru';
import {DataContext} from "../../contexts/dataContext"

registerLocale('ru', ru);

export default function Datepicker() {
    return (
        <DataContext.Consumer>
            {context => (
                <div className='section-wrapper section-wrapper_sm mb-4 text-left'>
                    <div className={`d-inline-block ${context.validateDestAndTimeWarning ? 'validation' : ''}`}>
                        <DatePicker
                            selected={context.datepickerDate}
                            onChange={context.depatureDateSelect}
                            locale="ru"
                            dateFormat='dd.MM.yyyy'
                            minDate={Date.now()}
                            maxDate={addDays(new Date(Date.now()), 45)}
                        />
                    </div>
                </div>
            )}
        </DataContext.Consumer>
    )
}