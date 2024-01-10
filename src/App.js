import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main/Main';
import AllArticles from './pages/AllArticles';
import AllQuizes from './pages/AllQuizes';
import QuizWelcomPage from './pages/QuizWelcomPage';
import QuizPage from './pages/QuizPage';
import ArticlePage from './pages/ArticlePage'
import CompletedPage from './pages/CompletedPage';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Статьи" element={<AllArticles/>}/>
        <Route path="/:id" element={<ArticlePage/>}/>
        <Route path="/Квизы" element={<AllQuizes/>}/>
        <Route path="/quiz/:id" element={<QuizWelcomPage/>}/>
        
        <Route path="/quizgame/:id" element={<QuizPage/>}/>
        <Route path="/completed" element={<CompletedPage/>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
