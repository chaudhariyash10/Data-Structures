class Node{
    constructor(data){
        this.data = data;
        this.next = null;

    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(data){
        var temp = new Node(data);
        
        if(this.first === null){
            this.first = temp ;
            this.last=this.first;  
            
        }
        else{
            this.last.next = temp;
            this.last = temp;
        }
        this.length++;
    }

    dequeue(){
        if(this.first == null) return;
        else{
           let temp = this.first.next;
           this.first = temp; 
        }
        this.length--;
    }

    print(){
        
        
        let temp = this.first;
        
        while(temp !==null){

            console.log(temp.data);
            temp = temp.next;
        }
        }
    
}

var list = new Queue;

list.enqueue(1);
list.enqueue(2);
list.enqueue(6);
list.enqueue(2);
list.enqueue(8);

list.dequeue();

list.print();
