class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }        
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    // 1. 
    push(val){
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    // 2.
    pop(){
        if(this.length === 0) return undefined
        
        let lastNode = this.tail 
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = lastNode.prev
            this.tail.next = null
            lastNode.prev = null
        }
        this.length -= 1
        return lastNode
    }

    // 3.
    shift(){
        if(this.length === 0) return undefined

        let oldHead = this.head

        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }

        this.length -= 1
        return oldHead
    }

    // 4.
    unshift(val){
        let newNode = new Node(val)
        
        if (this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length ++
        return this
    }

    // 5.
    get(index){
        if (index < 0 || index >= this.length) return null

        let count
        let current
        if (index <= this.length / 2){       
            count = 0
            current = this.head
            while(count !== index){
                current = current.next
                count ++
            }
        } else {
            count = this.length - 1
            current = this.tail
            while(count !== index){
                current = current.prev
                count --
            }
        }
        return current
    }

    // 6.
    set(index, val){
        let targetNode = this.get(index)
        if (targetNode != null){
            targetNode.val = val
            return true
        } 
        return false
    }

    // 7.
    insert(index, val){
        if (index < 0 || index > this.length) return false
        else if (index === 0) return this.unshift(val)
        else if (index === this.length) return this.push(val)

        let newNode = new Node(val)
        let afterNode = this.get(index)
        let beforeNode = afterNode.prev

        newNode.next = afterNode
        newNode.prev = beforeNode
        beforeNode.next = newNode
        afterNode.prev = newNode

        this.length ++
        return true
    }
    // 8.
    remove(index){
        if (index < 0 || index > this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        let removedNode = this.get(index)
        let beforeNode = removedNode.prev
        let afterNode = removedNode.next
        beforeNode.next = removedNode.next
        afterNode.prev = removedNode.prev
        removedNode.next = null
        removedNode.prev = null
        this.length--
        return removedNode
    }

    printAll(){
        let current = this.head
        while (current){
            console.log(current.val)
            current = current.next
        }
    }
    reverse(){
        if (this.length <= 0) return this
        let current = this.head
        let oldNext
        while(current){
            oldNext = current.next
            current.next = current.prev
            current.prev = oldNext
            current = oldNext
        }
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        return this
    }
}

let dlist = new DoublyLinkedList()
dlist.push('hello')
dlist.push('world')
dlist.push('!')
// console.log(dlist)

// let a = dlist.pop()
// let b = dlist.pop()
// let c = dlist.pop()
// let d = dlist.pop()
// console.log(d)
// console.log(dlist)

// let a = dlist.shift()
// let b = dlist.shift()
// let c = dlist.shift()
// console.log(dlist)
// console.log(a)

// dlist.unshift('yoo(head)')
// console.log(dlist)

// let gotVal = dlist.get(4)
// console.log(gotVal)

// dlist.set(0, 'HEEEELO')
// console.log(dlist)

// dlist.insert(4, 'inserted!!')
// dlist.printAll()

// let removed = dlist.remove(1)
// console.log(removed)
// dlist.printAll()

dlist.reverse()
dlist.printAll()