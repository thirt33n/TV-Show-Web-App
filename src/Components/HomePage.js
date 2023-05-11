import axios from "axios";
import { useEffect, useState } from "react";
import './SearchBar.css'
import { Link } from 'react-router-dom'


export default function HomePage({navigation}){

    const [data,setData] = useState('')
    const [word,setWord] =useState('')
    const wordUrl = 'https://random-word-api.vercel.app/api?words=1'

    // const navigate = useNavigate();

    useEffect(() => {
        axios.get(wordUrl).then((res) => {
          setWord(res.data);
        });
      }, []);
      const query = word[0];
      console.log(query)

    const url = 'https://api.tvmaze.com/search/shows?q='+query;
    
    useEffect(() => {
        axios.get(url).then((response) => {
          setData(response.data);
        });
      }, [url]);

    

    const dataList = data && data.map(item =>{
        
    return(
     
        <Link to={{
            pathname:`/info/${item.show.name}`,
        }} key={item?.show?.id}>
            <div>
                <img className="image" src={item?.show?.image?.medium} alt="Show" />
                <p style={{color:'black',textDecoration:'none'}}>{item.show.name}</p>
            </div>
        </Link>
       
    )
})
    

    return(
        <div>
            <div className="bannerContainer">
                <img className="banner" src="https://i.ibb.co/sPz8QtS/INFINITY-e-NTERTAINMENT.png" alt="Banner" />
            </div>
            <p style={{fontSize:30,}}>Explore </p>
            <div className="listContainer">
                <div className="List">
                    {dataList}
                </div>
            </div>
        </div>
    )
}