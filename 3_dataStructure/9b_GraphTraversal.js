class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // 1.
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  // 2.
  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    } else {
      console.error("error vertices");
    }
  }

  //3.
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => {
      return v !== v2;
    });
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => {
      return v !== v1;
    });
  }

  //4. 結果比想像的簡單，直接把vertex裏面每一個分別去斷聯就好
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  //5.
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacenyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      adjacenyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start); // 會立即用start呼叫第一次

    return result;
  }

  //6.
  depthFirstIterative(start) {
    const result = [];
    const stack = [start];
    const visited = {};
    visited[start] = true;

    let currentVertex;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      visited[currentVertex] = true;
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }
  // 7.
  breadthFirstTraversal(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("E", "F");

/*
      A
     / \
    B   C
    |   |
    D---E
     \ /
      F

*/
// console.log(g);

// let t = g.depthFirstRecursive("A");
// console.log(t);

// let t = g.depthFirstIterative("A");
// console.log(t);

let t = g.breadthFirstTraversal("A");
console.log(t);
