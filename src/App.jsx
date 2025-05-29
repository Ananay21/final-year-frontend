import { Route, Routes } from 'react-router';
import AllPosts from './pages/AllPosts';
import PostPlayer from './pages/PostPage';
import AllQuiz from './pages/AllQuiz';
import QuizPage from './pages/QuizPage';
import UserPage from './pages/UserPage';
import AllFlashCards from './pages/AllFlashCards';
import CreatePost from './pages/CreatePost';
import FlashCardPage from './pages/FlashCardPage';
import Login from './pages/login';
import Signup from './pages/signup';

const App = () => {
  return (
    <Routes>
      <Route path='/allposts' element={<AllPosts/>}/>
      <Route path='/allposts/:id' element={<PostPlayer/>}/>
      <Route path='/quiz' element={<AllQuiz/>}/>
      <Route path='/quiz/:id' element={<QuizPage/>}/>
      <Route path='/user' element={<UserPage/>}/>
      <Route path='/flashcards' element={<AllFlashCards/>}/>
      <Route path='/flashcards/:id' element={<FlashCardPage/>}/>
      <Route path='/createPost' element={<CreatePost/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default App