import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import RecordDetail from '../components/recordDetail'





const DetailsScreen = props => {
  let { id } = useParams();
  //let { content };
  const [content, setContent] = useState(<div></div>);

  //CHECK INTERNET
  window.addEventListener('online', (event) => {
    console.log("You are now connected to the network.");
  });
 
  useEffect(()=>{
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()
    var response = {}
    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      response = JSON.parse(xhr.responseText)
      setContent(<RecordDetail response={response}/>)
    })
    // open the request with the verb and the url
    xhr.open('GET', 'https://private-anon-e589480d8d-blissrecruitmentapi.apiary-mock.com/questions/'+id)
    // send the request
    xhr.send()
  }, [id])

 
    return (
      <div className="App"> 
      <header className="App-header">
        <Link to='/questions/' style={{ color: 'inherit', textDecoration: 'inherit'}} >Go Back</Link>
        {content}
      </header>
     
    
  </div>
    );
};

export default DetailsScreen;