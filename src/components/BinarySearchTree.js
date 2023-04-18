import React, { useState, useEffect } from 'react';
import Graph from 'react-graph-vis';

function BinarySearchTree() {
  const [rootNode, setRootNode] = useState(null);
  const [graph, setGraph] = useState(null);
  const [inputValue, setInputValue] = useState('');

  class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  function insertValue(root, value) {
    if (root === null) {
      return new TreeNode(value);
    }
    if (value < root.value) {
      root.left = insertValue(root.left, value);
    } else if (value > root.value) {
      root.right = insertValue(root.right, value);
    }
    return root;
  }

  function convertToGraph(rootNode) {
    const graphNodes = [];
    const graphEdges = [];
    if (rootNode === null) {
      return {
        nodes: graphNodes,
        edges: graphEdges,
      };
    }
    const queue = [rootNode];
    while (queue.length > 0) {
      const node = queue.shift();
      const nodeId = `${node.value}`;
      graphNodes.push({ id: nodeId, label: node.value.toString() });
      if (node.left !== null) {
        const leftNodeId = `${node.left.value}`;
        graphEdges.push({ from: nodeId, to: leftNodeId });
        queue.push(node.left);
      }
      if (node.right !== null) {
        const rightNodeId = `${node.right.value}`;
        graphEdges.push({ from: nodeId, to: rightNodeId });
        queue.push(node.right);
      }
    }
    return {
      nodes: graphNodes,
      edges: graphEdges,
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputArray = inputValue.split(',');
    let tempRootNode = null;
    for (let i = 0; i < inputArray.length; i++) {
      tempRootNode = insertValue(tempRootNode, inputArray[i]);
    };
    setRootNode(tempRootNode);
  };

  useEffect(() => {
    if (rootNode !== null) {
      const newGraph = convertToGraph(rootNode);
      console.log(newGraph);
      setGraph(newGraph);
    }
  }, [rootNode]);

  const graphOptions = {
    layout: {
      hierarchical: {
        direction: 'UD',
      },
    },
    height:'350px',
  };

  return (
    <div className='container'>
      <form className='container' onSubmit={handleSubmit} style={{ color: "white" }}>
        <div className="mb-3">
          <h1>Binary Search Tree</h1>
          <label htmlFor="exampleInputEmail1" className="form-label">Enter comma-separated values</label>
          <input type="text" className="form-control" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="container my-2">
        {graph && <Graph graph={graph} options={graphOptions} style={{backgroundColor:'white'}} />}
      </div>
    </div>
  );
}

export default BinarySearchTree;
