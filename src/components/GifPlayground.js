import React, { Component } from 'react'

import GifActions from '../actions/GifActions'
import SearchStore from '../stores/SearchStore'
import StickerBar from './StickerBar'
import PlaygroundStickers from './PlaygroundStickers'

export default class GifPlayground extends Component {
  constructor() {
    super();
    this.state = {
      image: SearchStore.getImageUrl(),
    }

    this._onChange = this._onChange.bind(this);
    this._submitForm = this._submitForm.bind(this);
  }

  componentWillMount() {
    SearchStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    SearchStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      image: SearchStore.getImageUrl(),
    })
  }

  _submitForm(e) {
    e.preventDefault();
    let { searchStickerInput } = this.refs;
    let input = searchStickerInput.value;
    console.log('searchInput: ',input);

    GifActions.fetchStickerSearch(input);
  }

  render() {
    let { image } = this.state;

    return (
      <div>
        <h1>Gif Playground</h1>
        <form className="form-inline">
        {/* <form onSubmit={this._submitForm} className="form-inline"> */}
          <div className="form-group">
            <label>Search Sticker</label>
            <input ref='searchStickerInput' type="text" className="form-control" placeholder="Category"/>
          </div>
          <button onClick={this._submitForm} type="submit" className="btn btn-primary">Find Sticker</button>
        </form>
        <StickerBar />
        <div className='playgroundGifContainer'>
          <img className='playgroundGif' src={image} />
          <PlaygroundStickers />
        </div>

      </div>
    )
  }
}
