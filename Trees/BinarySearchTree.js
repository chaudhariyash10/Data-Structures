class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;

    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
    }
    
    insert(data , root1) {

        let temp = new Node(data);
        if(root1 === null){
            root1 = temp;
           
        } 
        else{
            if(data > root1.data ) root1.right=this.insert(data , root1.right);
            else if(data <= root1.data) root1.left=this.insert(data , root1.left); 

            
        }

        return root1;
    }

    find(data , root1){

        if(root1 == null) return false;

        else if(root1.data === data) return true;

        else {
            if(data > root1.data) return this.find(data , root1.right);
            else if(data < root1.data) return this.find(data , root1.left);
        }
    }

    inorder(root1){
        if(root1 == null ) return;

        this.inorder(root1.left);
        console.log(root1.data);
        this.inorder(root1.right);
    }
    preorder(root1){
        if(root1 === null) return;

        console.log(root1.data);
        this.preorder(root1.left);
        this.preorder(root1.right);
    }

    postorder(root1){
        if(root1 === null) {
           return;
        }

        this.postorder(root1.left);
        this.postorder(root1.right);
        console.log(root1.data);
    }

    BFS(root1){
      
        if(root1 === null)  return;

        var arr = [];

        arr.push(root1);

        while(arr[0] != null){
            var current = arr[0];
            console.log(current.data);
            if(current.left != null) arr.push(current.left);
            if(current.right != null) arr.push(current.right);
            arr.shift();
        }
        
    }
}

var tree =new binarySearchTree;

tree.root=tree.insert(1 , tree.root);
tree.root=tree.insert(0 , tree.root);
tree.root=tree.insert(2 , tree.root);
tree.root=tree.insert(3 , tree.root);
tree.root=tree.insert(1 , tree.root);

tree.BFS(tree.root);
console.log(tree.root);

