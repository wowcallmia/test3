import React, { Component } from 'react'
import MovieStore from '../Stores/MovieStore'
import { Link } from 'react-router'
import MovieActions from '../Actions/MovieActions'
import uuid from 'uuid'

export default class TableResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: MovieStore.getShows(),

    }
    this._selectTitle = this._selectTitle.bind(this);
    this._onChange = this._onChange.bind(this);

  }
  componentWillMount(){
    MovieStore.startListening(this._onChange)
  }
  componentWillUnmount(){
    MovieStore.stopListening(this._onChange)
  }
  _onChange(){
    this.setState({
      shows: MovieStore.getShows()

    })

  }
  _selectTitle(id){
  console.log('id:', id)
  // browserHistory.push(`/FavoritePage/${id}`);
}
_onClick(e){
    e.preventDefault();
      const {shows} = this.id;
    let showInfo = shows.id;
    MovieActions.favShow(showInfo);


    }






  render(){
    const {shows} = this.state;
    console.log(this.state);
    return(
   <div>
     {shows.map((show, i) => (
       <div key = {show.id}>
         <Link  onClick = {this._selectTitle.bind(show.id)} className='btn btn-primary btn-xs' to = {`/FavoritePage`}>


           <ul id="tableUl">

             <li>{show.name}</li>

           </ul>
         </Link>
       </div>

     ))}

           </div>
      )
  }
}
