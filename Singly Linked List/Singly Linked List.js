class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
} 

class singlyLinkedList {
    constructor(){
        this.head = null; 
        this.tail = null;
        this.length = 0 ;
    }

    push(data){
        let temp = new Node(data);

        if(this.head == null){
           this.head = temp ; 
           this.tail = this.head; 
        }
        else{
            this.tail.next = temp ;
            this.tail = temp ;
        }

        this.length++;
    }

    print(){
        let temp = this.head;

        while(temp !== null){
            console.log(temp.data);
            temp = temp.next;
        }
    }

    pop(){
        if(this.head == null ){
            return ;
        }
        else{
            let temp = this.head;

            while(temp.next.next !== null){
                temp = temp.next;
            }

            temp.next = null;
            this.tail = temp ;
        }
        this.length--;
    }

    shift(){
        if(this.head === null ) return;
        this.head = this.head.next;
        this.length--;
    }

    unshift(data){
        let temp = new Node(data);

        if(this.head === null) this.head = temp;
        
        else{
            temp.next = this.head ;

            this.head = temp;
        }

        this.length++;

    }

    insert(pos , data){
        if(pos == 1) 
        {this.unshift(data); 
            return;}

        if(pos == this.length + 1) {
            this.push(data);
            return;}

         var temp = new Node(data);
         var temp1 = this.head;
        for(let i = 1 ; i < pos - 1 ; i++){
            temp1 = temp1.next;
        }  
        temp.next = temp1.next;
        temp1.next = temp ;

        this.length++;
    }
   
    remove(pos){

        if(pos == 1){
            this.shift();
            return;
        }
        if(pos == this.length ){
            this.pop();
            return;
        }
        var temp = this.head;
        for(let i = 1 ; i < pos -1 ; i++){
            temp = temp.next;
        }

        temp.next = temp.next.next;
       
        this.length--;

    }
    getLength(){
        return this.length;
    }

  reverse(){
     
  var node = this.head;

  this.head = this.tail;

  this.tail = node;
 
 var prev = null;
 var next;

    while(node){
        next = node.next;

        node.next = prev;

        prev =node;

        node = next;
    }
  }

  removeFromEnd(pos){           //Dees not account for tail.....
    var temp = this.head;
    
    var l = 0;
    while(temp != null){
        l++;
        temp = temp.next;     
    }
 
    var befPos = l - pos -1;
    
    temp = this.head;
    
     for(var i = 0; i < befPos; i++) 
    {   
        temp = temp.next;
        
    }
    if(befPos == -1) {
       this.head = this.head.next;
        return ;
    }
    temp.next = temp.next.next;
    
   

 }


 swapPairs() {
    var prev = null ;
    var currNode = this.head;
    var nextNode = currNode . next;
    var nextNode2 = nextNode . next;
    this.head = nextNode;
    while(nextNode != null){
        if(prev != null) prev . next = nextNode;
        
        currNode .next = nextNode2;
        nextNode . next = currNode;
        
       
        if(nextNode2 != null && nextNode2 . next  ){
         prev = nextNode;
        currNode = nextNode2;
        nextNode = nextNode2 . next;
        nextNode2 = nextNode . next;
       
        }
        else nextNode = null;
    }
    
  
}


}
var list = new singlyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);


list.swapPairs();

list.print();
