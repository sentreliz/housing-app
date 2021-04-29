import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchBox from '../Components/SearchBox.js';

export default function Home() {

    const [data, setData] = useState([]);
    const [searchString, setSearchString] = useState('');
    const [results, setResults] = useState();
    const [input, setInput] = useState();

    useEffect(() => {

    }, [])

    const clickedSearch = (string) => {
        setSearchString(string);
    }

    const updateResults = (input) => {
        setInput(input);
        axios.get(`https://sentreliz.com/housing/search/${input}`).then(res => {
            console.log(res.data.results);
            setData(res.data.results);
        });
        return data;
    }

  return (
    <div>
        <h2>
        Home Header
        </h2>
        <div>
        <SearchBox 
            data={data}
            onClick={clickedSearch}
            searchString={searchString}
            input={input}
            setInput={setInput}
            updateResults={updateResults}
        />
        <button>
            Search Data
        </button>
        {data.map((result) => {
            console.log(result)
            return(
                <div>{result.RegionName}, {result.state}</div>
            )
        })}
        </div>
    </div>
  )
}