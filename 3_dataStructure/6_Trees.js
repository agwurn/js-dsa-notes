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

    /*
        queue真的很關鍵，
        從一開始root放到queue裡，把root印到結果、把兩個葉子放到queue
        下一層的兩個葉子也會是印到結果，把他們的左右葉子繼續放到queue後面排隊
        就永遠不會打亂每一層的順序
    */
    BFS() {
        let data = []
        let queue = []
        let node = this.root
        queue.push(node)
        while (queue.length){
            node = queue.shift()
            data.push(node.val)
            if (node.left){
                queue.push(node.left)
            }
            if (node.right){
                queue.push(node.right)
            }
        }
        return data
    }
 
    /*
        用helper function做recursion
        主要是把打印的順序放在最上面，就會先打印root再進到左右，
        每一層左或右也會先打印他自己，才會往下找
    */
    DFSPreOrder(){
        let data = []

        function traverse(node){
            data.push(node.val)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }

        traverse(this.root)
        return data
    }

    /*
        只改一行的順序
        postOrder: 左右中，逛完才印
    */
    DFSPostOrder(){
        let data = []

        function traverse(node){
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.val)
        }

        traverse(this.root)
        return data
    }
    
    /*
        一樣，只改一行的順序
        inOrder: 左中右，逛左印再逛右
    */
    DFSInOrder(){
        let data = []

        function traverse(node){
            if (node.left) traverse(node.left)
            data.push(node.val)
            if (node.right) traverse(node.right)
        }

        traverse(this.root)
        return data
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

/*
       10
    2     15
      5      20
*/

// let a = tree.BFS()
// console.log(a)

// let b = tree.DFSPreOrder()
// console.log(b)

// let c = tree.DFSPostOrder()
// console.log(c)

let d = tree.DFSInOrder()
console.log(d)