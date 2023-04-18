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
      <div className="container" style={{height:'90vh'}}>
        <Navbar/>
          <Routes>
            <Route path="Graph-visuals/" element={<GraphEditor/>}/>
            <Route path="Graph-visuals/bst" element={<Tree/>}/>
          </Routes>
      </div>
    </Router>
  ); 
}
export default App;
