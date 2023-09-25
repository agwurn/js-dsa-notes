class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // 1.
  addVertex(vertex) {
    if (~this.adjacencyList[vertex]) {
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
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("NewYork");
g.addVertex("Taipei");
g.addVertex("Dallas");
g.addVertex("Honk Kong");
// console.log(g);

g.addEdge("Tokyo", "Taipei");
g.addEdge("Tokyo", "NewYork");
g.addEdge("Taipei", "NewYork");
g.addEdge("Taipei", "Honk Kong");
// console.log(g);

g.removeEdge("Tokyo", "NewYork");
// console.log(g)

g.removeVertex("Tokyo");
console.log(g);
