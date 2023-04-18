import React, { useState } from 'react';
import Graph from 'react-graph-vis';

function GraphEditor() {
  const [graph, setGraph] = useState({ nodes: [], edges: []});
  const [numNodes, setNumNodes] = useState(0);
  const [edgesInput, setEdgesInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const nodes = Array.from(Array(numNodes).keys()).map((i) => ({ id: i,label:`${i}` }));
    const edges = edgesInput.split(',').map((edge) => {
      const [from, to] = edge.split('-').map(Number);
      return { from, to };
    });
    console.log(nodes);
    setGraph({ nodes, edges});
  };
  const handleNumNodesChange = (e) => {
    setNumNodes(parseInt(e.target.value));
  };

  const handleEdgesInputChange = (e) => {
    setEdgesInput(e.target.value);
  };

  const graphOptions = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: 'black',
    },
    height:'250px',
  };

  return (
    <div className='container' style={{height:'100%'}}>
      <form className='container' onSubmit={handleSubmit} style={{color:'white',height:'50%'}}>
        <h1>Graph</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Number of nodes</label>
          <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={numNodes} onChange={handleNumNodesChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Edges</label>
          <input type="text" className="form-control" id="exampleInputPassword1" value={edgesInput} onChange={handleEdgesInputChange} />(e.g. "0-1,1-2,2-0")
        </div>
        <button type="submit" className="btn btn-primary">Create Graph</button>
      </form>
      <div className="container canvas-con" style={{background:"white"}}>
        {graph.nodes.length > 0 && (
          <Graph graph={graph} options={graphOptions}style={{backGround:"white"}} />
        )}
      </div>
    </div>
  );
}
export default GraphEditor;