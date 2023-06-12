import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import ArticleListPage from './Pages/ArticleListPage';
import ArticlePage from './Pages/ArticlePage';
import NotFound from './Pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/aboutus" element={ <AboutUs /> } />
          <Route path="/articlelist" element={ <ArticleListPage /> } />
          <Route path="/article/:articleId" element={ <ArticlePage /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;