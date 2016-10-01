import React, { Component } from 'react'
import GifActions from '../actions/GifActions'


export default class GifPlayground extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    let { id } = this.props.params;
    console.log('id in playground: ',id);
    GifActions.fetchGifById(id);

  }

  render() {

    console.log('this.props: ',this.props)
    return (
      <div>

        <h1>Gif Playground</h1>

      </div>
    )
  }
}
