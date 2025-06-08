import { Route, Routes } from 'react-router';
import AllPosts from './pages/AllPosts';
import PostPlayer from './pages/PostPage';
import AllQuiz from './pages/AllQuiz';
import QuizPage from './pages/QuizPage';
import UserPage from './pages/UserPage';
import CreatePost from './pages/CreatePost';
import Login from './pages/login';
import Signup from './pages/signup';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/allposts' element={<AllPosts/>}/>
      <Route path='/allposts/:id' element={<PostPlayer/>}/>
      <Route path='/quiz' element={<AllQuiz/>}/>
      <Route path='/quiz/:id' element={<QuizPage/>}/>
      <Route path='/user' element={<UserPage/>}/>
      <Route path='/createPost' element={<CreatePost/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default App