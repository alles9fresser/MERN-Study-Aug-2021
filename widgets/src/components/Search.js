import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);
  //const [timeoutID, timeout] = useState(-1);

  const [timeoutID, setTimeoutID] = useState(-1);


  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };


    // if( !(timeoutID === -1)){
    //   clearTimeout(timeoutID);
    // }

    // timeout(setTimeout(()=>{
    //   if (term) {
    //     search();
    //   }
    // }, 500))

    // const timeoutID = setTimeout(()=>{
    //   if (term) {
    //     search();
    //   }
    // }, 500);


    

    if(term && !results.length){
      search();
    } else {
      const tid =  setTimeout(()=>{
        if (term) {
          search();
        }
      }, 100)
      return () => {
        console.log(tid)
        clearTimeout(tid);
    }

    }

    
    

    

    
  }, [term]);


  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
