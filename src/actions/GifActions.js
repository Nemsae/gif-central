import API from '../API'
import AppDispatcher from '../AppDispatcher'

const GifActions = {

  fetchGifSearch(userInput) {
    API.receiveGifSearch(userInput);
  },

  fetchGifById(id) {
    API.receiveGifById(id);
  },

  sendImage(url) {
    AppDispatcher.dispatch({
      type: 'SEND_URL',
      payload: { url }
    })
  },

}

export default GifActions;
