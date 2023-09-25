/*
heap 也算是一種 tree，只是多了一些特性。

    Binary Heap:
        in MaxBinaryHeap, `parent` are always larger than `children`.

         41
      39    33
    18  27 12   

    每一個child都比parent小


binary heap 會保持full，會照著順序由左而右加入node，永不歪斜
只管垂直的順序，水平不管

## WHY?
    binary heaps 可以用在 priority queues, graph traversal

## Representing Heaps
    因為binary heap都會照順序添加node，我們可以用array來表示binary heap.

          100
        19   36
      17 12 25 5

    -> [100, 19, 36, 17, 12, 25, 5]
         0   1   2   3   4   5   6

    經過一番推理後，會發現每一個 parent 他的 child 會剛好在:
    L-child: 2n + 1
    R-child: 2n + 2

    反過來可以發現當 child 是 n，parent 就是 floor((n-1)/2)
*/

/*
    TODO: Define our Class
*/
class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	// 1. insert
	insert(element) {
		this.values.push(element);
		this.bubbleUp();
	}
	bubbleUp() {
		let i = this.values.length - 1;
		while (i > 0) {
			let p = Math.floor((i - 1) / 2);
			let currentVal = this.values[i];
			let parentVal = this.values[p];
			if (currentVal > parentVal) {
				this.values[p] = currentVal;
				this.values[i] = parentVal;
				i = p;
			} else {
				break;
			}
		}
	}
	extractMax() {
		const maxVal = this.values[0];
		const lastVal = this.values.pop();
		if (this.values.length > 0){
			this.values[0] = lastVal;
			this.sinkDown();
		}
		return maxVal;
	}
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];
		while (true) {
			let lChildIdx = 2 * idx + 1;
			let rChildIdx = 2 * idx + 2;
			let lChild, rChild;
			let swap = null;

			if (lChildIdx < length) {
				lChild = this.values[lChildIdx];
				if (lChild > element) {
					swap = lChildIdx;
				}
			}
			if (rChildIdx < length) {
				rChild = this.values[rChildIdx];
				if (
					(swap === null && rChild > element) ||
					(swap !== null && rChild > lChild)
				) {
					swap = rChildIdx;
				}
			}

			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
		return element;
	}
}

let myHeap = new MaxBinaryHeap();
myHeap.insert(41);
myHeap.insert(39);
myHeap.insert(33);
myHeap.insert(18);
myHeap.insert(27);
myHeap.insert(12);
myHeap.insert(55);
// console.log(myHeap);

let s = myHeap.extractMax();
let s2 = myHeap.extractMax();
// console.log(s2);
// console.log(myHeap);

