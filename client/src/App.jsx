import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import QuestPage from './pages/QuestPage/QuestPage.jsx'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import SubmitPage from './pages/SubmitPage'
import SubmissionPage from './pages/SubmissionPage'
import UserRoute from './routes/UserRoute'
import ModeratorRoute from './routes/ModeratorRoute'
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage.jsx'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<QuestPage/>}/>
      <Route path='login' element={<LoginPage/>}/>
      <Route path='signup' element={<SignUpPage/>}/>
      <Route path="/quests/:questNameParam" element={<LeaderboardPage/>}></Route>

      <Route path='submit' element={
        <UserRoute>
          <SubmitPage/>
        </UserRoute>
      }/>

      <Route path='submissions' element={
        <ModeratorRoute>
          <SubmissionPage/>
        </ModeratorRoute>
      }/>


    </Routes>
    </>
  )
}

export default App
