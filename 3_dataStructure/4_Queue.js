

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    // 1. add to the end
    enQueue(val){
        let newNode = new Node(val)
        if(this.size === 0){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    // 2. remove from beginning 
    deQueue(){
        if(this.size === 0) return null
        let firstNode = this.first
        if(this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = firstNode.next
            firstNode.next = null
        }
        this.size--
        return firstNode
    }
}

let myQueue = new Queue()
myQueue.enQueue('a')
myQueue.enQueue('b')
myQueue.enQueue('c')
console.log(myQueue)

let a = myQueue.deQueue()
console.log(myQueue)
console.log('--dequeded-- \n',a)