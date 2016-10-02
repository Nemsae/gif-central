import React, {Component} from 'react';
import $ from 'jquery';
import mousewheel from 'jquery-mousewheel';
import uuid from 'uuid';

import SearchStore from '../stores/SearchStore';
import GifActions from '../actions/GifActions';

export default class StickerBar extends Component {
  constructor() {
    super();

    this.state = {
      stickers: SearchStore.getStickerResults(),
    }

    this._onChange = this._onChange.bind(this);
    this._sendStickerImg = this._sendStickerImg.bind(this);
  }

  componentWillMount() {
    SearchStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    SearchStore.stopListening(this._onChange);
  }


  _onChange() {
    this.setState({
      stickers: SearchStore.getStickerResults(),
    })
  }

  _sendStickerImg(url, id) {
    console.log('url: ',url,'id: ',id);
    let StickerPackage = {
      image: url,
      id: uuid(),
    }

    GifActions.sendStickerImage(StickerPackage);
  }

  componentDidMount() {
    $('div.outerStickerBar').mousewheel(function(event,deltax) {
      this.scrollLeft -= (deltax * 1);
      event.preventDefault();
    })
  }

  render() {
    let { stickers } = this.state;

    return (
      <div className='outerStickerBar'>
        <div className='innerStickerBar'>
          {
            stickers.map( (sticker, i) => (
              <div className='stickerImageContainer' key={sticker.id} id={sticker.id}>{i}
                <img className='stickerImage' onClick={() => this._sendStickerImg(sticker.stickerImage, sticker.id)} src={sticker.stickerImage} alt=""/>
              </div>
            ))
          }
        </div>
      </div>
    )
  }

}
