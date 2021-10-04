import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound404/NotFound';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/About'>
            <About></About>
          </Route>
          <Route path='/Courses'>
            <Courses></Courses>
          </Route>
          <Route to='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Route to='/footer'>
          <Footer></Footer>
        </Route>
      </Router>
    </div>
  );
}

export default App;
