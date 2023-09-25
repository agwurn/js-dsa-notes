/*
  要先學會 graph 跟 priority queue
*/

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  // 1. insert
  enQueue(val, priority) {
    let newNode = new Node(val, priority);
    this.nodes.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let i = this.nodes.length - 1;
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      let currentNode = this.nodes[i];
      let parentNode = this.nodes[p];
      if (currentNode.priority < parentNode.priority) {
        this.nodes[p] = currentNode;
        this.nodes[i] = parentNode;
        i = p;
      } else {
        break;
      }
    }
  }
  deQueue() {
    const minNode = this.nodes[0];
    const lastNode = this.nodes.pop();
    if (this.nodes.length > 0) {
      this.nodes[0] = lastNode;
      this.sinkDown();
    }
    return minNode;
  }
  sinkDown() {
    let idx = 0;
    const length = this.nodes.length;
    const topNode = this.nodes[0];
    while (true) {
      let lChildIdx = 2 * idx + 1;
      let rChildIdx = 2 * idx + 2;
      let lChildNode, rChildNode;
      let swap = null;

      if (lChildIdx < length) {
        lChildNode = this.nodes[lChildIdx];
        if (lChildNode.priority < topNode.priority) {
          swap = lChildIdx;
        }
      }
      if (rChildIdx < length) {
        rChildNode = this.nodes[rChildIdx];
        if (
          (swap === null && rChildNode.priority < topNode.priority) ||
          (swap !== null && rChildNode.priority < lChildNode.priority)
        ) {
          swap = rChildIdx;
        }
      }

      if (swap === null) break;
      this.nodes[idx] = this.nodes[swap];
      this.nodes[swap] = topNode;
      idx = swap;
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  /*
    distances 指的是每一個node距離start的最短距離
    previous 指的是每一個node走最短距離的話，node的前一個是誰
    pQueue 是為了記錄這個node所有neighbor裡誰最近，先走他

    好像因為用了pQueue所以不用管visited耶？
  */
  Dijkstra(start, finish) {
    let path = [];

    // 1. build up initial state
    const pQueue = new PriorityQueue();
    const distances = {};
    const previous = {};
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        pQueue.enQueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        pQueue.enQueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    let current;
    while (pQueue.nodes.length > 0 && current !== finish) {
      // 2. find the smallest vertex by poping from priorityQueue
      current = pQueue.deQueue().val;

      // 3. update the map state, new distance, new previous vertex, new pQueue
      for (let neighbor in this.adjacencyList[current]) {
        let nextNode = this.adjacencyList[current][neighbor];
        let newDistance = distances[current] + nextNode.weight;

        if (newDistance < distances[nextNode.node]) {
          distances[nextNode.node] = newDistance;
          previous[nextNode.node] = current;
          pQueue.enQueue(nextNode.node, newDistance);
        }
      }
    }
    // 4. repeat 2 & 3 as long as there is something to visit

    // 5. backtrace the shortest path
    while (previous[current]) {
      path.unshift(current);
      current = previous[current];
    }
    path.unshift(start);

    return { path: path, distance: distances[finish] };
  }
}

/*
  初始化資料
*/
let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
// console.log(graph.adjacencyList)

let path = graph.Dijkstra("A", "E");
console.log(path);
