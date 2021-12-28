import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Create from './Create';
import ProjectDetails from './ProjectDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">

          <Routes>
          <Route exact path = "/" element = { <Home /> } />
          <Route path = "/create" element = { <Create /> } />
          <Route path = "/project/:id" element = { <ProjectDetails /> } />
          </Routes>
          
        </div>

      </div>
    </Router>
  );
}

export default App;
