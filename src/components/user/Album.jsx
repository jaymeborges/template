import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
   icon: 'fa fa-camera',
   title: "Album de fotos",
}

export default class Album extends Component{
    render() {
         return (
            <Main {...headerProps}>
                
 
            </Main>
        )
    }  
}

