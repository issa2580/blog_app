import './App.css'
import HomePage from './pages/HomePage/HomePage'
import ArticleDetails from './pages/DetailArticle/ArticleDetails';

import {Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/blog/:id' element={<ArticleDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;
