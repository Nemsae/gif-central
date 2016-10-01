import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    let path = this.props.location.pathname;

    // let searchClasses = classNames({ active: path === '/search'})

    return (
      <div className='container'>
        <h1 className='text-center'>Gif Central</h1>

        <ul className="nav nav-tabs">
          {/* <li role="presentation" className={searchClasses}> */}
          {/* <li role="presentation" className={classNames({ active: path === '/'})}>
            <Link to='/'>Home</Link>
          </li> */}
          <li role="presentation" className={classNames({ active: path === '/search'})}>
            <Link to='/search'>Search Page</Link>
          </li>
          <li role="presentation" className={classNames({ active: path === '/gifplayground'})}>
            <Link to='/gifplayground'>Gif Playground</Link>
          </li>

        </ul>

        {/* So all child components/routes of Layout will be here */}
        {this.props.children}

      </div>
    )
  }
}
