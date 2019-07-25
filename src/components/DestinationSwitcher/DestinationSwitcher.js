import React from 'react'
import {DataContext} from "../../contexts/dataContext"
import './destinationSwitcher.scss'

export default function DestinationSwitcher() {
    return (
        <DataContext.Consumer>
            {context => (
                <div className='data-view section-wrapper section-wrapper_sm mb-4'>
                    <div className="data-view__directions">
                        <span onClick={() => context.changeDestination('2000000', '2000351')}
                              className={` data-view__direction ${context.requestData.code0 === '2000000' ? 'active' : ''} 
                              ${context.validateDestAndTimeWarning ? 'validation' : ''} `}>
                            Москва <span className='single-right'>›</span> Калуга
                        </span>
                        <span onClick={() => context.changeDestination('2000351', '2000000')}
                              className={`data-view__direction ${context.requestData.code0 === '2000351' ? 'active' : ''} 
                              ${context.validateDestAndTimeWarning ? 'validation' : ''}`}>
                            Калуга <span className='single-right'>›</span> Москва
                        </span>
                    </div>
                </div>
            )}
        </DataContext.Consumer>
    )
}