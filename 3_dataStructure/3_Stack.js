class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    // 1. 記得要檢查stack是不是空的
    push(val){
        let newNode = new Node(val)
        if (!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            newNode.next = this.first
            this.first = newNode
        }
        return ++this.size // 會 ++ 又可以回傳？
    }

    // 2. 記得要檢查是不是空的，刪掉後是不是空的
    pop(){
        if(!this.first) return undefined
        let popedNode = this.first
        if(this.first === this.last){
            this.first = null
            this.last = null    
        } else {
            this.first = popedNode.next
            popedNode.next = null
        }
        this.size--
        return popedNode
    }
}

let myStack = new Stack()
myStack.push('hello')
myStack.push('world')
let a = myStack.push('!')
// console.log(a)

let poped = myStack.pop()
console.log(myStack)
console.log(poped)