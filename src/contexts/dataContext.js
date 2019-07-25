import React from 'react'
import axios from "axios"

export const DataContext = React.createContext()

export class DataProvider extends React.Component {

    state = {
        timetable: undefined,
        datepickerDate: '',
        validateDestAndTimeWarning: false,
        fetchError: false,
        requestData: {
            dir: '0',
            tfl: '3',
            code0: '', //Moscow 2000000, Kaluga 2000351
            code1: '',
            dt0: '',
            checkSeats: '0',
            withoutSeats: 'y',
            version: 'v.2018',
        },
    }

    getTimetable = () => {
        let bodyFormData = new FormData();
        let rid = undefined
        let requestOptions = {
            url: '/timetable/public/ru?layer_id=5827',
            method: 'POST',
            data: bodyFormData,
        }

        Object.keys(this.state.requestData).forEach(el => {
            bodyFormData.set(el, this.state.requestData[el]);
        })

        axios(requestOptions)
            .then(responce => {
                rid = responce.data.RID
                setTimeout(() => {
                    fetch("/timetable/public/ru?layer_id=5827", {
                        "credentials": "include",
                        "headers": {
                            "accept": "application/json, text/javascript, */*; q=0.01",
                            "accept-language": "en-US,en;q=0.9,ru;q=0.8,la;q=0.7,bg;q=0.6",
                            "cache-control": "no-cache",
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                            "pragma": "no-cache",
                            "x-requested-with": "XMLHttpRequest"
                        },
                        "referrerPolicy": "no-referrer-when-downgrade",
                        "body": `dir=0&tfl=3&code0=${this.state.requestData.code0}&code1=${this.state.requestData.code1}&dt0=${this.state.dt0}&checkSeats=0&withoutSeats=y&version=v.2018&rid=${rid}`,
                        "method": "POST",
                        "mode": "cors"
                    })
                        .then(resp2 => {
                            return resp2.json()
                        })
                        .then(myJson => {
                            if (myJson.hasOwnProperty('tp')) {
                                this.setState({
                                    timetable: myJson.tp[0],
                                    fetchError: false
                                })
                            } else {
                                this.setState({fetchError: true})
                            }
                        })
                }, 1000)
            })
    }

    changeDestination = (code0, code1) => {
        this.setState({
            validateDestAndTimeWarning: false,
            requestData: {
                ...this.state.requestData,
                code0: code0,
                code1: code1,
            }
        })
    }

    depatureDateSelect = (date) => {
        this.setState({
            datepickerDate: date,
            validateDestAndTimeWarning: false,
            requestData: {
                ...this.state.requestData,
                dt0: date ? date.toLocaleDateString("ru") : null
            }
        })
    }

    onGetTimetable = () => {
        if (this.state.requestData.code0
            && this.state.requestData.code1
            && this.state.requestData.dt0) {
            this.setState({validateDestAndTimeWarning: false})
            this.getTimetable()
        } else {
            this.setState({validateDestAndTimeWarning: true})
        }
    }

    render() {
        return (
            <DataContext.Provider value={{
                ...this.state,
                onGetTimetable: this.onGetTimetable,
                changeDestination: this.changeDestination,
                depatureDateSelect: this.depatureDateSelect,

            }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
} 