import AppDispatcher from '../AppDispatcher'

const ServerActions = {

  sendSearchResults(gifResults) {
    // console.log('sanity: ',gifResults);
    AppDispatcher.dispatch({
      type: 'RECEIVE_SEARCH_RESULTS',
      payload: { gifResults }
    })
  },

}

export default ServerActions;
