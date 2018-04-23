/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
// Do not modify this GraphNode class
// Use any of its methods as you see fit to implement your graph
class GraphNode { // GraphVertex
  constructor({ value, edges }) {
    this._value = value;
    this._edges = edges;
  }

  get value() {
    return this._value;
  }

  get edges() {
    return this._edges;
  }

  get numberOfEdges() {
    return this._edges.length;
  }

  set edges(x) {
    this._edges = x;
  }

  pushToEdges(y) {
    this._edges.push(y);
  }
}

class Graph {
  constructor() {
    this.vertices = [];
  }
  // Wraps the input value in a new GraphNode and adds it to the array of vertices
  // If there are only two nodes in the graph, they need to be automatically
  // connected via an edge
  // Optionally accepts an array of other GraphNodes for the new vertex to be connected to
  // Returns the newly-added vertex
  addVertex(value, edges = []) {}
  // Checks all the vertices of the graph for the target value
  // Returns true or false
  contains(value) {}
  // Checks the graph to see if a GraphNode with the specified value exists in the graph
  // and removes the vertex if it is found
  // This function should also handle the removing of all edge references for the removed vertex
  removeVertex(value) {}
  // Checks the two input vertices to see if each one references the other in their respective edges array
  // Both vertices must reference each other for the edge to be considered valid
  // If only one vertex references the other but not vice versa, should not return true
  // Note: You'll need to store references to each vertex's array of edges so that you can use
  // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
  checkIfEdgeExists(fromVertex, toVertex) {}
  // Adds an edge between the two given vertices if no edge already exists between them
  // Again, an edge means both vertices reference the other
  addEdge(fromVertex, toVertex) {}
  // Removes the edge between the two given vertices if an edge already exists between them
  // After removing the edge, neither vertex should be referencing the other
  // If a vertex would be left without any edges as a result of calling this function, those
  // vertices should be removed as well
  removeEdge(fromVertex, toVertex) {}
}

// class Graph {
//   constructor() {
//     this.vertices = []; // all the graph nodes, which hold a value, and a array of edges
//   }
//   // Wraps the input value in a new GraphNode and adds it to the array of vertices
//   // If there are only two nodes in the graph, they need to be automatically
//   // connected via an edge
//   // Optionally accepts an array of other GraphNodes for the new vertex to be connected to
//   // Returns the newly-added vertex
//   addVertex(value, edges = []) { // O(1) // addNode
//     // add a node to the vertices array (this.vertices)
//     // Vertex's will always be unique
//       // any vertex edge needs to be reciprocated
//     const newNode = new GraphNode({ value, edges });
//     // iterate over newNodes edges;
//     newNode.edges.forEach((edge) => {
//       edge.pushToEdges(newNode);
//     });

//     // only 1 vertex and passing in another vertex
//     if (this.vertices.length === 1) { // only 1 edge..now creating a 2nd edge
//       // making relationships reciprocal
//       this.vertices[0].pushToEdges(newNode);
//       newNode.pushToEdges(this.vertices[0]);
//     }

//     this.vertices.push(newNode);
//     return newNode;
//   }
//   // Checks all the vertices of the graph for the target value
//   // Returns true or false
//   contains(value) {
//     for (let i = 0; i < this.vertices.length; i += 1) {
//       const vertex = this.vertices[i];
//       if (vertex.value === value) return true;
//     }
//     return false;
//   }
//   // Checks the graph to see if a GraphNode with the specified value exists in the graph
//   // and removes the vertex if it is found
//   // This function should also handle the removing of all edge references for the removed vertex
//   removeVertex(value) { // removeNode
//     // find the index of the vertex
//       // remove or filter that vertex from the vertices
//       // find all the edge occurrences of the vertex
//         // remove or filter out the all the vertex edge occurrences
//     // remove vertex from graph vertices
//     this.vertices = this.vertices.filter(vertex => vertex.value !== value);
//     // remove references to vertex from any ref edges
//     this.vertices = this.vertices.filter((vertex) => {
//       const filteredEdges = vertex.edges.filter(edge => edge.value !== value);
//       // return vertex.edges.filter(edge => edge !== value);
//       vertex.edges = filteredEdges;
//       // vertex needs at least one edge to stay in the graph
//       return vertex.edges.length > 0;
//     });
//   }
//   // Checks the two input vertices to see if each one references the other in their respective edges array
//   // Both vertices must reference each other for the edge to be considered valid
//   // If only one vertex references the other but not vice versa, should not return true
//   // Note: You'll need to store references to each vertex's array of edges so that you can use
//   // array methods on said arrays. There is no method to traverse the edge arrays built into the GraphNode class
//   checkIfEdgeExists(fromVertex, toVertex) { // O(|V|)
//     // boolean value
//     return fromVertex.edges.includes(toVertex) && toVertex.edges.includes(fromVertex);
//   }
//   // Adds an edge between the two given vertices if no edge already exists between them
//   // Again, an edge means both vertices reference the other
//   addEdge(fromVertex, toVertex) { // O(1)
//     if (!this.checkIfEdgeExists(fromVertex, toVertex)) {
//       fromVertex.pushToEdges(toVertex);
//       toVertex.pushToEdges(fromVertex);
//     }
//   }
//   // Removes the edge between the two given vertices if an edge already exists between them
//   // After removing the edge, neither vertex should be referencing the other
//   // If a vertex would be left without any edges as a result of calling this function, those
//   // vertices should be removed as well
//   removeEdge(fromVertex, toVertex) {
//     if (this.checkIfEdgeExists(fromVertex, toVertex)) {
//       fromVertex.edges = fromVertex.edges.filter(edge => edge.value !== toVertex.value);
//       toVertex.edges = toVertex.edges.filter(edge => edge.value !== fromVertex.value);
//       if (fromVertex.numberOfEdges === 0) this.removeVertex(fromVertex.value);
//       if (toVertex.numberOfEdges === 0) this.removeVertex(toVertex.value);
//     }
//   }
// }

module.exports = Graph;

