import SearchStore from '../stores/SearchStore';
import React, {Component} from 'react';
import { browserHistory } from 'react-router';

export default class SearchTable extends Component {
  constructor() {
    super();

    this._onChange = this._onChange.bind(this);
    this.state = {
      results: SearchStore.getSearchResults()
    }
  }

  componentWillMount() {
    SearchStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    SearchStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      results: SearchStore.getSearchResults()
    })
  }

  _getId(id) {
    // console.log('id of pic: ',id)
    browserHistory.push(`/gifplayground/${id}`);
  }

  render() {
    let {results} = this.state;

    console.log('results: ',results);

    return (
      <div>

              {
                results.map((gif, i) => (
                  <div key={i} className='col-xs-3 searchImageContainer'><img onClick={() => this._getId(gif.id)} className='searchImage' src={gif.image}/></div>

                ))
              }
      </div>
    )
  }

}
