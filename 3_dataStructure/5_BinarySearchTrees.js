class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    // 1. 如果沒有root，就直接this.root = newNode
    // 但如果有root，就分別往左右while找下去，直到遇到null。
    // 但也有可能找到一樣的，那就沒事只能回傳undefined
    insert(val){
        let newNode = new Node(val)
        if (!this.root){
            this.root = newNode
            return this
        } else {
            let current = this.root
            while (current) {
                if (val === current.val) return undefined
                if (val < current.val){
                    if (current.left === null){
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if (val > current.val) {
                    if (current.right === null){
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }
    
    // 2. find
    contains(val){
        let current = this.root
        while (current){
            if (val > current.val){
                current = current.right
            } else if (val < current.val){
                current = current.left
            } else if (val === current.val){
                return true
            }

        }
        return false
    }
}

let tree = new BinarySearchTree()
// tree.root = new Node(10)
// tree.right = new Node(15)
// tree.left = new Node(7)
// console.log(tree)

tree.insert(10)
tree.insert(2)
tree.insert(5)
tree.insert(15)
tree.insert(20)
// console.log(tree)

let found = tree.contains(2)
console.log(found)