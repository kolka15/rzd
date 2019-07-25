import React from 'react';
import './App.scss';
import IndexContext from "./contexts/indexContext"
import DestinationSwitcher from "./components/DestinationSwitcher/DestinationSwitcher"
import Datepicker from "./components/Datepicker/Datepicker"

function App() {
    return (
        <IndexContext>
            <div className="App">
                <section className="App-header">
                    <DestinationSwitcher/>
                    <Datepicker/>
                </section>
            </div>
        </IndexContext>
    );
}

export default App;
