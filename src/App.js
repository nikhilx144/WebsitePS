import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Products from './components/Products';
import Recipes from './components/Recipes';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Healthcare from './components/Healthcare';
import SignUp from './components/SignUp';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ Home }/>
          <Route path="/products" exact component={ Products }/>
          <Route path="/recipes" exact component={ Recipes }/>
          <Route path="/contact" exact component={ ContactUs }/>
          <Route path="/about" exact component={ AboutUs }/>
          <Route path="/healthcare" exact component={ Healthcare }/>
          <Route path="/signup" exact component={ SignUp }/>
          <Route path="/blogs" exact component={ Blogs }/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
