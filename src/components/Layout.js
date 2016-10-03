import React, { Component } from 'react'
import {Link} from 'react-router'
import classNames from 'classnames'

import LookupForm from './LookupForm'
import TableResult from './TableResult'
import Repo from './Repo'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {

    let path = this.props.location.pathName;

    let searchClasses = classNames({active: path === '/search'})

    return (
      <div className='container'>
        <LookupForm/>


        <h1 className='text-center'>Show Lookup</h1>
        <ul className="nav nav-tabs">
          <li role="presentation" className={searchClasses} to='/favorites'>
            <Link to ='/FavoritePage'>Favorites</Link>
          </li>

        </ul>

        <TableResult/>
        {this.props.children}
      </div>
    )
  }
}
