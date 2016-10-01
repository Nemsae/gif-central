import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _searchResults = [];
let _imageUrl = '';

class SearchStore extends EventEmitter {
  constructor() {
    super();


    AppDispatcher.register(action => {
      let {type, payload} = action;
      switch (type) {
        case 'RECEIVE_SEARCH_RESULTS':
        _searchResults = payload.gifResults;
        this.emit('CHANGE');
        break;

        case 'SEND_URL':
        _imageUrl = payload.url;
        this.emit('CHANGE');
        break;

      }
    })

    //storage
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getSearchResults() {
    return _searchResults;
  }

  getImageUrl() {
    return _imageUrl;
  }

}

export default new SearchStore();
