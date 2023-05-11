
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Button1 from './Book';
// import { Link } from 'react-router-dom'
import './InfoPage.css'
const InfoPage = () =>{
 
    const [data,setData] = useState('');
    const id = useParams(); 
    const showName=id.show;
    const url = 'https://api.tvmaze.com/singlesearch/shows?q='+showName;
    console.log(showName)
    
    useEffect(() => {
        axios.get(url).then((response) => {
          setData(response.data);
        });
      }, [url]);
    
    console.log(data);
    const temp = data.summary;
    const image = data?.image?.original;
    const language = data.language;
    const rating = data?.rating?.average;
    // const summary = temp.slice(3,-4);
    return(
        <div className='container'>
        <div className="image-container">
            <img className="show-image" src={image} alt={showName} />
        </div>
        <div className='info=container'>
                <h1 className='show-title'>{showName}</h1>
                <div className="info-section">
                    <h2 className="info-text">Language:</h2>
                    <p className="info-text">{language}</p>
                </div>
                <div className="info-section">
                    <h2 className="info-text">Rating:</h2>
                    <p className="info-text">{rating}</p>
                </div>
                <div className="info-section">
                    <h3 className="info-label">Summary:</h3>
                    <p className="info-text">{temp}</p>
                </div>
                <Button1 />
                {/* <button className="book-button">Book Your Show</button> */}
        </div>
             
        </div>
        
    )
}

export default InfoPage;