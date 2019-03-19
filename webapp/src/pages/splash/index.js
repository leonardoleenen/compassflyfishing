import React from 'react'
import {view} from './view'


import {getDB} from "../../database"

class Splash extends React.Component {
    componentWillMount = () => {
        let db = getDB()
        console.dir(db)
    }
    render = ()=> view(this.props)
}

export default Splash