import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './componenets/signup/signup';
import Login from './componenets/login/login';
import Channel from './componenets/channel/channel';


function App() {
  return (
    <>

<h1> Welcome to Shit Tube!! </h1>

<p> A place where for your channels are more personalized then any other.</p>


<button > <a href='/signup'> Sign Up</a></button>
<button> <a href = '/login'>Log In</a></button>






      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/channel" element={<Channel />}/>

        </Routes>
      </Router>

    </>

  )
}
export default App
