class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    /* 加上push，基本上
        把tail.next接到新node，
        把tail設定成新node
    */
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = this.tail.next
        }
        this.length++
        return this
    }

    // 介紹怎麼遍歷
    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val)
            current = current.next
        }
    }

    // 加上pop
    pop(){
        if(!this.head) return undefined

        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current // 永遠比current慢一格
            current = current.next // 最後current撞到null，newTail會在前一位
        }
        this.tail = newTail
        this.tail.next = null

        this.length -= 1
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }
    
    // 從前面刪掉一個node
    shift(){
        if(!this.head) return undefined
        let current = this.head
        this.head = this.head.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return current
    }

    // 從前面新增一個node
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length ++
        return this
    }

    // 取得特定node
    get(index){
        if(index < 0 || index > this.length) return null

        let current = this.head
        while(index > 0){
            current = current.next
            index--
        }
        return current
    }

    // 更新特定node
    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val
            return true
        }
        return false
    }

    // 從特定位置新增node
    // "!!"只是為了檢查有沒有值，把1轉true，null轉false
    insert(index, val){
        if(index < 0 || index > this.length) return false
        else if (index === this.length) return !!this.push(val)
        else if (index === 0) return !!this.unshift(val)
        
        let newNode = new Node(val)
        let prevNode = this.get(index - 1)
        newNode.next = prevNode.next
        prevNode.next = newNode

        this.length++
        return true
    }

    // 刪除特定node
    remove(index){
        if(index < 0 || index > this.length) return undefined
        else if (index === 0) return this.shift()
        else if (index === this.length - 1) return this.pop()

        let prevNode = this.get(index - 1)
        let removedNode = prevNode.next
        prevNode.next = removedNode.next

        this.length -= 1
        return removedNode
    }

    // 反轉list
    reverse(){
        let current = this.head
        this.head = this.tail
        this.tail = current
        // console.log(this.head.val)
        // console.log(this.tail.val)
        let next
        let prev = null
        while (current !== null) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this
    }

    // 轉array
    toArray(){
        let arr = []
        let current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        return arr
    }
}

let list = new SinglyLinkedList()
list.push('hello')
list.push('world')
list.push('!')

// list.traverse()

// let a = list.pop()
// console.log(a)
// console.log(list)

// let a = list.shift()
// let b = list.shift()
// let c = list.shift()
// console.log(a)
// console.log(list)

// list.unshift('HIIIII')
// console.log(list)

// console.log(list.get(0))

// list.set(0, 'HIII')
// console.log(list)

// list.insert(5, '###inserted')
// list.traverse()

// let a = list.remove(2)
// list.traverse()

// let arr = list.toArray()
// console.log(arr)

list.reverse()
list.traverse()