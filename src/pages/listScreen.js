import React, { Component } from 'react';
import { Navigate   } from 'react-router-dom';
import RecordList from '../components/recordsList'

class ListScreen extends Component { //different
  constructor(props) {
    super(props)
    this.state = {list: [], offset: 0};
    this.ShowMore = this.ShowMore.bind(this);
  }

  componentWillMount() {
    console.log("hey")
    this.loadRecords()
  }

  loadRecords() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()
    
    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      this.setState({list: this.state.list.concat(JSON.parse(xhr.responseText))}); 
    })
    // open the request with the verb and the url
    xhr.open('GET', 'https://private-anon-4ed56fbab9-blissrecruitmentapi.apiary-mock.com/questions?limit=10&offset='+this.state.offset+'&filter=filter')
    // send the request
    xhr.send()
  }

  ShowMore() {
    this.setState({offset:this.state.offset+10});
    this.loadRecords() 
  }
  
  render() {
    const list = this.state.list;
    return (
      <div className="App"> 
        <header className="App-header">
            <RecordList list={list}/>
            <button onClick={this.ShowMore}>
              Show More
            </button>
        </header>
       
      
    </div>
    );
  }
}

export default ListScreen;
