import React, { Component } from 'react'
import MovieActions from '../Actions/MovieActions'
import $ from 'jquery'

export default class Repo extends Component {
constructor(props){
  super(props);
}


  render(){
    return(
      <div >

        <h1 id='cool'>{this.props.params.symbol}</h1>

      </div>
      )
  }
}
