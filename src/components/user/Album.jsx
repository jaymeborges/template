import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Album de Fotos'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
  
}

export default class  extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }
  
    render() {
        return (
            <Main {...headerProps}>
            
            </Main>
        )
    }
}