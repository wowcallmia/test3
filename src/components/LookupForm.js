import React, { Component } from 'react'
import MovieActions from '../Actions/MovieActions'

export default class Form extends Component {
  constructor() {
    super();
    this._submitForm = this._submitForm.bind(this);
  }

  _submitForm(e){
      e.preventDefault();
        const {shows} = this.refs;
      let showInfo = shows.value;
      MovieActions.createShow(showInfo);
      shows.value = ''

    
      }



  render() {
    return (

      <form onSubmit = {this._submitForm} className="form-inline text-center">
        <div className="form-group">
          <label >Lookup Show</label>
          <input ref = 'shows' type="text" className="form-control" id="examplestock" aria-describedby="stockhelp" placeholder="Enter Show" required/>
          <small id="emailHelp" className="form-text text-muted">Put in Show</small>
        </div>
        <button className="btn btn-primary">Lookup Show</button>
  </form>

    )
  }
}
