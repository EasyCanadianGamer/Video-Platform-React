import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componenets/home/home';
import Signup from './componenets/signup/signup';
import Login from './componenets/login/login';
import Channel from './componenets/channel/channel';


function App() {
  return (
    <>






      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/channel" element={<Channel />}/>

        <Route path="/src/" element={<Home/>} />
        </Routes>
      </Router>

    </>

  )
}
export default App
