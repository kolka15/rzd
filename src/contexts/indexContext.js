import React from 'react'
import {DataProvider} from "./dataContext"

export default function IndexContext(props) {
    return (
        <DataProvider>
            {props.children}
        </DataProvider>
    )
}