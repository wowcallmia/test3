import React, { Component } from 'react'
import MovieActions from '../Actions/MovieActions'

export default class FavoritePage extends Component {
  constructor(props) {
    super(props);
  }
// componentWillMount(){
//   let {id} = this.props.params;



  render() {

    console.log('this.props:', this.props)
    return (
      <div id ='cool' className='container'>
        <h1>Favorites Page</h1>
        <h2>Fav {this.props.params.name}</h2>
        <h1>{this.props.params.id}</h1>
      </div>
          )
          }
          }
