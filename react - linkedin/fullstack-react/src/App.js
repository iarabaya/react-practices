import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesList from "./pages/ArticlesList";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} exact />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/articles-list" element={<ArticlesList/>} />
        <Route path="/article" element={<ArticlePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
