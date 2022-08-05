import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Posts } from './posts/posts';
import { NewPost } from './components/post/new-post/NewPost';
import { EditPost } from './components/post/edit-post/EditPost';
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/new" element={<NewPost />} />
            <Route path="/edit/:postId" element={<EditPost />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
