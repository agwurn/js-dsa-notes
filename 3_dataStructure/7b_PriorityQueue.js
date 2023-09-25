/*
怕亂成一團所以，弄另一個檔案
*/

/*
    TODO: Define our Class
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
        let newNode = new Node(val, priority)
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
		if(this.nodes.length > 0){
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

let ER = new PriorityQueue();
ER.enQueue("common cold", 5)
// ER.enQueue("gunshot wound", 1)
// ER.enQueue("high fever", 4)
// ER.enQueue("broken arm", 2)
// ER.enQueue("glass in foot", 3)
console.log(ER)


// ER.enQueue("gunshot wound", 1)
// console.log(ER)
let a = ER.deQueue("common cold")
console.log(a)
console.log(ER)

