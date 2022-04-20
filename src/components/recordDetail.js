import React from 'react';
import { Link  } from 'react-router-dom';
import { LeafPoll } from 'react-leaf-polls'
import 'react-leaf-polls/dist/index.css'

const RecordDetail = props => {

  const data = props.response.choices.map(item => {
    return { text: item.choice, votes: item.votes };
  });

  const customTheme = {
      textColor: 'black',
      mainColor: '#00B87B',
      backgroundColor: 'rgb(255,255,255)',
      alignment: 'center',
    }
  function vote(item, results) {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()
    // get a callback when the server responds
    xhr.addEventListener('load', () => {
    })
    // open the request with the verb and the url
    xhr.open('PUT', 'https://private-anon-4ed56fbab9-blissrecruitmentapi.apiary-mock.com/questions/'+props.response.id)
    props.response.choices= results.map(item => {
          return { choice: item.choice, votes: item.votes };
        })
    xhr.send(JSON.stringify(props.response))
      
    }
  return (
      <Link to={"/questions/"+props.response.id} style={{ color: 'inherit', textDecoration: 'inherit'}} >
      <p>{props.response.id}</p> 
      <div className='row' >
        <img src={props.response.image_url} alt="question" style={{ marginRight: '8vw'}}/>    
        <LeafPoll
            type='multiple'
            question={props.response.question}
            results={data}
            theme={customTheme}
            onVote={vote}
            />      
      </div>
      <Link to={"/share/"+props.response.id} style={{ color: 'inherit', textDecoration: 'inherit'}} ></Link>
      </Link>

  );
};


export default RecordDetail;