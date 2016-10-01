import React, { Component } from 'react'

import GifActions from '../actions/GifActions'
import SearchStore from '../stores/SearchStore'

export default class GifPlayground extends Component {
  constructor() {
    super();
    this.state = {
      image: SearchStore.getImageUrl(),
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    SearchStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    SearchStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      image: SearchStore.getImageUrl,
    })
  }

  render() {
    let { image } = this.state;

    return (
      <div>
        <h1>Gif Playground</h1>
        <img src={image} />

      </div>
    )
  }
}
