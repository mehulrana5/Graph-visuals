import GraphEditor from "./components/GraphEditor";
import Tree from "./components/BinarySearchTree";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <Routes>
            <Route path="/" element={<GraphEditor/>}/>
            <Route path="/bst" element={<Tree/>}/>
          </Routes>
      </div>
    </Router>
  ); 
}
export default App;
