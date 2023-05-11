import { useLocation } from 'react-router-dom';

const ResultsPage = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.example.com/search?q=${searchQuery}`)
      .then((response) => {
        setData(response.data);
      });
  }, [searchQuery]);

  // Render the results data
};
