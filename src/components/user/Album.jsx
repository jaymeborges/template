import React, { Component } from 'react'
import Main from '../template/Main'
//import albumDeFotos from './albumDeFotos'

const headerProps = {
   icon: 'fa fa-camera',
   title: "Álbum de fotos",
}

export default class Album extends Component{
    render() {
         return (
            <Main {...headerProps}>
                  <iframe src=""
                   width= "100%" height= "100%"></iframe>
            </Main>
        )
    }  
}

