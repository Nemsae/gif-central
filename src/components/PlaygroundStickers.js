import React, {Component} from 'react';

import SearchStore from '../stores/SearchStore';

export default class PlaygroundStickers extends Component {
  constructor() {
    super();

    this.state = {
      stickers: SearchStore.getStickerPackage(),
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
      stickers: SearchStore.getStickerPackage(),
    })
  }

  render() {
    let { stickers } = this.state;
    console.log('stickers in playgroundstickers', stickers);

    return (
      <div className='userStickerContainer'>
        {
          stickers.map(sticker => (
            <div key={sticker.id} id={sticker.id}>
              <img className='userSticker' src={sticker.image} alt=""/>
            </div>
          ))
        }
      </div>
    )
  }

}
