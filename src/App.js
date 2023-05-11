import './App.css';
import {  Route, Routes } from 'react-router-dom';

import Header from './Components/SearchBar';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import InfoPage from './Components/InformationPage';
function App() {
  return (
        <div>
          <Header />
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route exact path='/info/:show' element={<InfoPage />} />
            </Routes>
          <Footer />
        </div>
  );
}

export default App;
