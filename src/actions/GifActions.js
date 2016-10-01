import API from '../API'

const GifActions = {

  fetchGifSearch(userInput) {
    API.receiveGifSearch(userInput);
  },

  fetchGifById(id) {
    API.receiveGifById(id);
  },

}

export default GifActions;
