import React from 'react';
import './App.scss';

import IndexContext from "./contexts/indexContext"
import {DataContext} from "./contexts/dataContext"

import DestinationSwitcher from "./components/DestinationSwitcher/DestinationSwitcher"
import Datepicker from "./components/Datepicker/Datepicker"
import {Btn1} from "./components/Buttons/Buttons"
import Timetable from "./components/Timetable/Timetable"

function App() {
    return (
        <IndexContext>
            <DataContext.Consumer>
                {context => (
                    <div className="App">
                        <section className="App-header">
                            <DestinationSwitcher/>
                            <Datepicker/>
                            <div className='text-left section-wrapper section-wrapper_sm position-relative'>
                                {
                                    context.fetchError &&
                                    <span className='fetch-error'>Сервер вернул ошибку</span>
                                }
                                <Btn1 text='Расписание' clickHandler={context.onGetTimetable}/>
                            </div>
                            {
                                context.timetable && context.timetable.hasOwnProperty('list') &&
                                <Timetable/>
                            }
                        </section>
                    </div>
                )}
            </DataContext.Consumer>
        </IndexContext>
    );
}

export default App;
