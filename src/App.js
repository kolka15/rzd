import React from 'react';
import './App.scss';

import IndexContext from "./contexts/indexContext"
import {DataContext} from "./contexts/dataContext"

import TrackWindow from "./components/TrackWindow/TrackWindow"
import MainWindow from "./components/MainWindow/MainWindow"

function App() {
    return (
        <IndexContext>
            <DataContext.Consumer>
                {context => (
                    <div className="App">
                        <section className="App-header">
                            {
                                context.trackedTrainNumber
                                ? <TrackWindow/>
                                : <MainWindow/>
                            }
                        </section>
                    </div>
                )}
            </DataContext.Consumer>
        </IndexContext>
    );
}

export default App;
